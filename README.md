# My Website

This is my personal website built with Docusaurus.

## Features

- 📚 Documentation
- 🔍 Built-in search functionality
- 🌙 Dark mode support
- 📱 Mobile responsive
- 🎨 Customizable theme

## DocDataFrame Component

The DocDataFrame component is a powerful and interactive table component for displaying data in your documentation. It supports sorting, pagination, and responsive design.

### Installation

The component is already included in the project. You can import it in any MDX file:

```jsx
import DocDataFrame from '@site/src/components/DocDataFrame';
```

### Usage

Basic usage with required props:

```jsx
<DocDataFrame
  data={[
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 }
  ]}
  columns={['id', 'name', 'age']}
  rowsPerPage={5}
/>
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | Array | Yes | Array of objects containing the data to display |
| `columns` | Array | Yes | Array of strings specifying which columns to display |
| `rowsPerPage` | Number | No | Number of rows to display per page (default: 10) |

### Features

- **Sortable Columns**: Click on column headers to sort the data
- **Pagination**: Navigate through pages of data
- **Responsive Design**: Tables adapt to different screen sizes
- **Dark Mode Support**: Automatically matches your documentation theme
- **Column Resizing**: Drag column edges to adjust widths
- **Tooltips**: Hover over cells to see full content
- **Even/Odd Row Styling**: Alternating row colors for better readability

### Examples

See the [DataFrame Examples](/docs/dataframe-example) page for detailed examples of different use cases.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start
```

3. Build for production:
```bash
npm run build
```

4. Serve the production build:
```bash
npm run serve
```

## Customization

### Adding GitHub Icon

1. Open `docusaurus.config.js`
2. Add the GitHub link to the navbar items:
```javascript
{
  href: 'https://github.com/your-username/your-repo',
  position: 'right',
  className: 'header-github-link',
  'aria-label': 'GitHub repository',
}
```

3. Add custom CSS for the GitHub icon in `src/css/custom.css`:
```css
.header-github-link {
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
  transition: opacity 0.2s ease;
}

.header-github-link:hover {
  opacity: 0.8;
}

.header-github-link::before {
  content: '';
  width: 24px;
  height: 24px;
  display: flex;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' fill='%23626262'/%3E%3C/svg%3E") no-repeat;
  transition: background 0.2s ease;
}

.header-github-link:hover::before {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' fill='black'/%3E%3C/svg%3E") no-repeat;
}

[data-theme='dark'] .header-github-link::before {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' fill='white'/%3E%3C/svg%3E") no-repeat;
}

[data-theme='dark'] .header-github-link:hover::before {
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' fill='black'/%3E%3C/svg%3E") no-repeat;
}
```

### Adding Search Bar

1. Install the search plugin:
```bash
npm install docusaurus-lunr-search
```

2. Add the plugin to `docusaurus.config.js`:
```javascript
plugins: [
  require.resolve('docusaurus-lunr-search'),
],
```

3. Add the search bar to the navbar in `docusaurus.config.js`:
```javascript
{
  type: 'search',
  position: 'right',
}
```

## Documentation Structure

The documentation is organized in the following structure:
- `docs/` - Main documentation directory
  - `intro.md` - Introduction page
  - `tutorial-basics/` - Basic tutorial pages
  - `tutorial-extras/` - Additional tutorial pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Adding Top and Bottom Announcement Bars

### Top Bar
1. Add the announcement bar configuration to `docusaurus.config.js`:
```js
themeConfig: {
  announcementBar: {
    id: 'new-website',
    content: 'New Website',
    backgroundColor: '#ff8c00',
    textColor: '#ffffff',
    isCloseable: false,
  },
  // ... rest of your config
}
```

2. Add the following CSS to `src/css/custom.css`:
```css
/* Make announcement bar sticky */
div[class*='announcementBar_'] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  height: 24px;
  line-height: 24px;
}

/* Make navbar fixed and position it below announcement bar */
.navbar {
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: 0;
}

/* Ensure the main content starts below both fixed elements */
main {
  padding-top: 50px !important;
  margin-left: 300px !important;
  position: relative;
  min-height: calc(100vh - 74px);
}

/* Adjust the main wrapper to account for fixed elements */
.main-wrapper {
  padding-top: 50px !important;
  position: relative;
  min-height: 100vh;
}
```

### Bottom Bar
1. Create a new component at `src/components/BottomBar/index.js`:
```jsx
import React from 'react';
import styles from './styles.module.css';

export default function BottomBar() {
  return (
    <div className={styles.container}>
      <div className={styles.bottomBar}>
        <div className={styles.content}>
          Bottom Bar
        </div>
      </div>
    </div>
  );
}
```

2. Create the styles at `src/components/BottomBar/styles.module.css`:
```css
.container {
  position: relative;
  width: 100%;
  margin-top: auto;
  padding-top: 40px;
}

.bottomBar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24px;
  line-height: 24px;
  background-color: #ff8c00;
  color: #ffffff;
  z-index: 1001;
}

.content {
  font-size: 0.85em;
  padding: 0 1rem;
  text-align: center;
}
```

3. Create a custom layout at `src/theme/Layout/index.js`:
```jsx
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
```

### Notes
- The top bar is fixed to the viewport and will always be visible
- The bottom bar is positioned at the bottom of the content and will only be visible when scrolled to the bottom
- Both bars use the same orange color (#ff8c00) and white text
- The height of both bars is 24px
- The main content is pushed down by 50px to account for the top bar and navbar
- The sidebar is fixed and starts 84px from the top (24px for top bar + 60px for navbar)
