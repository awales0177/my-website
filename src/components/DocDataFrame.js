import React, { useState, useRef, useEffect } from 'react';
import './DocDataFrame.css';

const DocDataFrame = ({ data, columns, rowsPerPage = 10 }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [columnWidths, setColumnWidths] = useState({});
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

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
    setCurrentPage(1); // Reset to first page when sorting
  };

  const handleResize = (column, width) => {
    setColumnWidths(prev => ({
      ...prev,
      [column]: width
    }));
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
          <div className="dataframe-header">
            {columns.map((column) => (
              <div
                key={column}
                className="dataframe-header-cell"
                style={{ width: columnWidths[column] || 'auto' }}
              >
                <div className="column-header" onClick={() => handleSort(column)}>
                  <span className="column-title">{column}</span>
                  <span className="sort-indicator">{getSortIndicator(column)}</span>
                </div>
                <div
                  className="resize-handle"
                  onMouseDown={(e) => {
                    const startX = e.clientX;
                    const startWidth = columnWidths[column] || containerRef.current.offsetWidth / columns.length;
                    
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
                    style={{ width: columnWidths[column] || 'auto' }}
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