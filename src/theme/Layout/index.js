import React from 'react';
import Layout from '@theme-original/Layout';
import BottomBar from '@site/src/components/BottomBar';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <BottomBar />
    </>
  );
} 