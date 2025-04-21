---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:
- a **sidebar**
- **previous/next navigation**
- **versioning**

## Create your first Doc

Create a markdown file at `docs/1.0.0/tutorial-basics/create-a-document.md`:

```mdx title="docs/1.0.0/tutorial-basics/create-a-document.md"
---
sidebar_position: 2
---

# Create a Document

Documents are **groups of pages** connected through:
- a **sidebar**
- **previous/next navigation**
- **versioning**
```

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder structure.

Add metadata to customize the sidebar label and position:

```mdx title="docs/1.0.0/tutorial-basics/create-a-document.md"
---
sidebar_position: 2
---
```

## Add your Doc to the Sidebar

Add your new doc to `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: '1.0.0/intro',
    },
    {
      type: 'category',
      label: 'Tutorial Basics',
      items: [
        '1.0.0/tutorial-basics/create-a-document',
        // ... other items
      ],
    },
  ],
};
``` 