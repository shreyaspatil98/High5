'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Tooltip } from 'react-tooltip'; // ✅ Correct import

const Tree = dynamic(
  () => import('react-d3-tree').then(mod => mod.default || mod),
  { ssr: false }
);

export default function MindMap({ publication }) {
  const [treeData, setTreeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!publication) return;

    const fetchMindMap = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/mindmap', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pubTitle: publication.title,
            pubAbstract: publication.abstract,
            source_url: publication.source_url
          })
        });
        const data = await res.json();
        setTreeData(data);
      } catch (err) {
        console.error(err);
        setTreeData({ name: publication.title || "Publication", children: [] });
      } finally {
        setLoading(false);
      }
    };

    fetchMindMap();
  }, [publication]);

  if (loading) return (
    <div className="w-full h-[600px] flex items-center justify-center text-white animate-pulse">
      Generating mind map...
    </div>
  );

  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-xl p-4 overflow-auto shadow-lg">
      {treeData && (
        <Tree
          data={treeData}
          collapsible={true}
          orientation="vertical"
          translate={{ x: 300, y: 50 }}
          nodeSvgShape={{ shape: 'circle', shapeProps: { r: 10, fill: '#0ff' } }}
          nodeLabelComponent={{
            render: <NodeLabel />,
            foreignObjectWrapper: { x: 10, y: -10, width: 150, height: 40 }
          }}
        />
      )}
      <Tooltip />
    </div>
  );
}

function NodeLabel({ nodeDatum }) {
  return (
    <div data-tooltip-id="tooltip" data-tooltip-content={nodeDatum.name} className="bg-black/60 text-white px-2 py-1 rounded-lg shadow-md">
      {nodeDatum.name}
    </div>
  );
}
