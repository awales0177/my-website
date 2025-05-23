import React, { useState, useRef, useEffect } from 'react';
import './DocDataFrame.css';

const DocDataFrame = ({ data, columns, rowsPerPage = 10 }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [columnWidths, setColumnWidths] = useState({});
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  // Calculate initial column widths based on content
  useEffect(() => {
    const calculateColumnWidths = () => {
      if (!headerRef.current) return;

      const headerCells = headerRef.current.querySelectorAll('.dataframe-header-cell');
      const newWidths = {};
      
      // First pass: calculate minimum widths based on content
      columns.forEach((column, index) => {
        const cell = headerCells[index];
        if (cell) {
          // Get the text content width
          const textWidth = cell.querySelector('.column-title').scrollWidth;
          // Add padding and sort indicator space
          const totalWidth = textWidth + 60; // 60px for padding and sort indicator
          newWidths[column] = Math.max(120, totalWidth);
        } else {
          newWidths[column] = 120; // Default width if cell not found
        }
      });

      // Second pass: distribute extra space if available
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalWidth = Object.values(newWidths).reduce((sum, w) => sum + w, 0);
        
        if (containerWidth > totalWidth) {
          const extraWidth = containerWidth - totalWidth;
          const extraPerColumn = extraWidth / columns.length;
          
          columns.forEach(column => {
            newWidths[column] += extraPerColumn;
          });
        }
      }

      setColumnWidths(newWidths);
    };

    // Initial calculation
    calculateColumnWidths();

    // Recalculate on window resize
    const handleResize = () => {
      calculateColumnWidths();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns, data]);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setCurrentPage(1);
  };

  const handleResize = (column, width) => {
    setColumnWidths(prev => {
      const newWidths = { ...prev };
      newWidths[column] = Math.max(120, width); // Ensure minimum width of 120px
      
      // If container is wider than total column widths, distribute remaining space
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalWidth = Object.values(newWidths).reduce((sum, w) => sum + w, 0);
        
        if (containerWidth > totalWidth) {
          const extraWidth = containerWidth - totalWidth;
          const extraPerColumn = extraWidth / (columns.length - 1);
          
          columns.forEach(col => {
            if (col !== column) {
              newWidths[col] += extraPerColumn;
            }
          });
        }
      }
      
      return newWidths;
    });
  };

  const handleCellHover = (e, value) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left,
      y: rect.bottom + 5
    });
  };

  const getSortIndicator = (column) => {
    if (sortConfig.key !== column) return '↕';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="doc-dataframe-wrapper">
      <div className="doc-dataframe-container" ref={containerRef}>
        <div className="doc-dataframe">
          {/* Header */}
          <div className="dataframe-header" ref={headerRef}>
            {columns.map((column) => (
              <div
                key={column}
                className="dataframe-header-cell"
                style={{ width: columnWidths[column] }}
              >
                <div className="column-header" onClick={() => handleSort(column)}>
                  <span className="column-title">{column}</span>
                  <span className="sort-indicator">{getSortIndicator(column)}</span>
                </div>
                <div
                  className="resize-handle"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    const startX = e.clientX;
                    const startWidth = columnWidths[column];
                    
                    const handleMouseMove = (e) => {
                      const newWidth = startWidth + (e.clientX - startX);
                      handleResize(column, newWidth);
                    };
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="header-underline" />

          {/* Body */}
          <div className="dataframe-body">
            {currentData.map((row, rowIndex) => (
              <div
                key={startIndex + rowIndex}
                className={`dataframe-row ${(startIndex + rowIndex) % 2 === 0 ? 'even' : 'odd'}`}
              >
                {columns.map((column) => (
                  <div
                    key={column}
                    className="dataframe-cell"
                    style={{ width: columnWidths[column] }}
                    onMouseEnter={(e) => handleCellHover(e, row[column])}
                  >
                    {row[column]}
                    <div 
                      className="cell-popup"
                      style={{
                        left: `${tooltipPosition.x}px`,
                        top: `${tooltipPosition.y}px`
                      }}
                    >
                      {row[column]}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="dataframe-pagination">
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
        <button 
          className="pagination-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default DocDataFrame; 