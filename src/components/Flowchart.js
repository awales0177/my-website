import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  Handle,
  Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import './Flowchart.css';

// Custom node component with handles on all sides
const CustomNode = ({ data, isStart = false, isEnd = false }) => {
  return (
    <div className={`flowchart-node ${isStart ? 'start-node' : ''} ${isEnd ? 'end-node' : ''}`}>
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      
      <div className="node-number">{data.number}</div>
      <div className="node-title">{data.title}</div>
      <div className="node-desc">{data.description}</div>
    </div>
  );
};

const Flowchart = ({ 
  nodes = [], 
  edges = [], 
  height = '600px',
  startNodeId = '1',
  endNodeId = null,
  className = ''
}) => {
  const [flowNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [flowEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(() => ({
    custom: ({ data, id }) => {
      const isStart = id === startNodeId;
      const isEnd = endNodeId ? id === endNodeId : false;
      return <CustomNode data={data} isStart={isStart} isEnd={isEnd} />;
    },
  }), [startNodeId, endNodeId]);

  return (
    <div style={{ width: '100%', height, margin: '2rem 0' }} className={className}>
      <ReactFlow
        nodes={flowNodes}
        edges={flowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnPinch={false}
        panOnPinch={false}
      >
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
