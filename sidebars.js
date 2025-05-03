// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Database Schemas',
      items: [
        {
          type: 'doc',
          id: 'database-schemas/car-schema',
          label: 'Car Database Schema'
        }
      ]
    },
    {
      type: 'doc',
      id: 'dataframe-example',
      label: 'DataFrame Example'
    },
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction'
    }
  ]
};
