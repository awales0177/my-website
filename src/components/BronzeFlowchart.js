import React, { useMemo } from 'react';
import { MarkerType } from 'reactflow';
import Flowchart from './Flowchart';

const BronzeFlowchart = () => {
  const initialNodes = useMemo(() => [
    // Row 1
    {
      id: '1',
      type: 'custom',
      position: { x: 0, y: 0 },
      data: { 
        number: '1',
        title: 'Raw Data Ingestion',
        description: 'Data arrives from various sources'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '2',
      type: 'custom',
      position: { x: 250, y: 0 },
      data: { 
        number: '2',
        title: 'Data Source Validation',
        description: 'Verify source authenticity'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '3',
      type: 'custom',
      position: { x: 500, y: 0 },
      data: { 
        number: '3',
        title: 'Initial Schema Check',
        description: 'Basic structure validation'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '4',
      type: 'custom',
      position: { x: 750, y: 0 },
      data: { 
        number: '4',
        title: 'Data Format Detection',
        description: 'Identify file formats'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    // Row 2
    {
      id: '5',
      type: 'custom',
      position: { x: 0, y: 200 },
      data: { 
        number: '5',
        title: 'Encoding Validation',
        description: 'Ensure proper encoding'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '6',
      type: 'custom',
      position: { x: 250, y: 200 },
      data: { 
        number: '6',
        title: 'Data Type Inference',
        description: 'Detect data types'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '7',
      type: 'custom',
      position: { x: 500, y: 200 },
      data: { 
        number: '7',
        title: 'Null Value Analysis',
        description: 'Identify missing values'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '8',
      type: 'custom',
      position: { x: 750, y: 200 },
      data: { 
        number: '8',
        title: 'Duplicate Detection',
        description: 'Find duplicate records'
      },
      style: {
        background: 'var(--ifm-background-color)',
        border: '2px solid var(--ifm-color-emphasis-300)',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    // Row 3
    {
      id: '9',
      type: 'custom',
      position: { x: 0, y: 400 },
      data: { 
        number: '9',
        title: 'Data Range Validation',
        description: 'Check value ranges'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '10',
      type: 'custom',
      position: { x: 250, y: 400 },
      data: { 
        number: '10',
        title: 'Format Standardization',
        description: 'Convert to consistent formats'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '11',
      type: 'custom',
      position: { x: 500, y: 400 },
      data: { 
        number: '11',
        title: 'Schema Enforcement',
        description: 'Apply strict validation'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '12',
      type: 'custom',
      position: { x: 750, y: 400 },
      data: { 
        number: '12',
        title: 'Data Quality Scoring',
        description: 'Calculate quality metrics'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    // Row 4
    {
      id: '13',
      type: 'custom',
      position: { x: 0, y: 600 },
      data: { 
        number: '13',
        title: 'Error Logging',
        description: 'Record all issues'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '14',
      type: 'custom',
      position: { x: 250, y: 600 },
      data: { 
        number: '14',
        title: 'Data Partitioning',
        description: 'Organize by date/time'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '15',
      type: 'custom',
      position: { x: 500, y: 600 },
      data: { 
        number: '15',
        title: 'Storage Optimization',
        description: 'Optimize format & compression'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
    {
      id: '16',
      type: 'custom',
      position: { x: 750, y: 600 },
      data: { 
        number: '16',
        title: 'Metadata Generation',
        description: 'Create data lineage'
      },
      style: {
        background: 'transparent',
        border: 'none',
        padding: '0',
        minWidth: '160px',
      },
    },
  ], []);

  const initialEdges = useMemo(() => [
    // Row 1 connections - horizontal flow (right to left)
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e2-3', 
      source: '2', 
      target: '3', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e3-4', 
      source: '3', 
      target: '4', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 1 to Row 2 - vertical connection (bottom to top)
    { 
      id: 'e4-5', 
      source: '4', 
      target: '5', 
      sourceHandle: 'bottom',
      targetHandle: 'top',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 2 connections - horizontal flow (right to left)
    { 
      id: 'e5-6', 
      source: '5', 
      target: '6', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e6-7', 
      source: '6', 
      target: '7', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e7-8', 
      source: '7', 
      target: '8', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 2 to Row 3 - vertical connection (bottom to top)
    { 
      id: 'e8-9', 
      source: '8', 
      target: '9', 
      sourceHandle: 'bottom',
      targetHandle: 'top',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 3 connections - horizontal flow (right to left)
    { 
      id: 'e9-10', 
      source: '9', 
      target: '10', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e10-11', 
      source: '10', 
      target: '11', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e11-12', 
      source: '11', 
      target: '12', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 3 to Row 4 - vertical connection (bottom to top)
    { 
      id: 'e12-13', 
      source: '12', 
      target: '13', 
      sourceHandle: 'bottom',
      targetHandle: 'top',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    
    // Row 4 connections - horizontal flow (right to left)
    { 
      id: 'e13-14', 
      source: '13', 
      target: '14', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e14-15', 
      source: '14', 
      target: '15', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-emphasis-600)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-emphasis-600)', width: 20, height: 20 }
    },
    { 
      id: 'e15-16', 
      source: '15', 
      target: '16', 
      sourceHandle: 'right',
      targetHandle: 'left',
      type: 'straight', 
      animated: true, 
      style: { stroke: 'var(--ifm-color-success)', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--ifm-color-success)', width: 20, height: 20 }
    },
  ], []);


  return (
    <Flowchart
      nodes={initialNodes}
      edges={initialEdges}
      height="600px"
      startNodeId="1"
      endNodeId="16"
    />
  );
};

export default BronzeFlowchart;
