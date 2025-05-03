import React, { useState, useRef, useEffect } from 'react';
import './StreamlitDataFrame.css';

const StreamlitDataFrame = ({ data, columns }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [columnWidths, setColumnWidths] = useState({});
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeColumn, setResizeColumn] = useState(null);
  const tableRef = useRef(null);

  // Handle column sorting
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
  };

  // Handle column resizing
  const handleResizeStart = (e, column) => {
    setIsResizing(true);
    setResizeColumn(column);
    setResizeStartX(e.clientX);
  };

  const handleResizeMove = (e) => {
    if (!isResizing) return;

    const delta = e.clientX - resizeStartX;
    setColumnWidths(prev => ({
      ...prev,
      [resizeColumn]: Math.max(100, (prev[resizeColumn] || 150) + delta)
    }));
    setResizeStartX(e.clientX);
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    setResizeColumn(null);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleResizeMove);
      document.addEventListener('mouseup', handleResizeEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
    };
  }, [isResizing]);

  return (
    <div className="streamlit-dataframe-container">
      <table className="streamlit-dataframe" ref={tableRef}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                style={{ width: columnWidths[column] || 'auto' }}
                onClick={() => handleSort(column)}
              >
                <div className="column-header">
                  {column}
                  {sortConfig.key === column && (
                    <span className="sort-indicator">
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
                <div
                  className="resize-handle"
                  onMouseDown={(e) => handleResizeStart(e, column)}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'even' : 'odd'}>
              {columns.map((column) => (
                <td key={column} style={{ width: columnWidths[column] || 'auto' }}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StreamlitDataFrame; 