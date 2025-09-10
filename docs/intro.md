---
slug: /
---

import AnimatedTimeline from '@site/src/components/AnimatedTimeline';

# Welcome to My Website

<div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
  <img src="/img/rocket_rounded.png" width="180" alt="RND Image" />
  <div>
    The site features a comprehensive exploration of the medallion architecture pattern, demonstrating how data flows through <code className="code-blue">bronze</code>, <code className="code-blue">silver</code>, and <code className="code-blue">gold</code> layers. You'll find detailed examples of data transformations, quality checks, and business logic implementations using modern tools like <code className="code-purple">Spark</code>, <code className="code-purple">Delta Lake</code>, and <code className="code-orange">SQL</code>. The site includes interactive components, data visualizations, and real-world examples of how to implement a robust data pipeline using the medallion pattern. Whether you're new to data engineering or looking to refine your architecture, you'll find valuable insights and practical examples here.
  </div>
</div>

## Medallion Architecture Progression

Our data architecture follows a medallion pattern, represented by different characters that symbolize the stages of data transformation and refinement:

<div className="medallion-progression">
  <div className="medallion-row">
    <img className="medallion-img" src="/img/tree_man.png" alt="Treeman" />
    <div className="medallion-desc">
      <strong>Treeman (Bronze Layer)</strong> - The raw data layer where data is first ingested and stored in its original form. This layer maintains the source data's fidelity and serves as the foundation for all subsequent transformations. Data is stored in <code className="code-blue">parquet</code> format with minimal processing.
    </div>
  </div>
  <div className="medallion-row reverse">
    <img className="medallion-img" src="/img/unpac_man.png" alt="Unpacman" />
    <div className="medallion-desc">
      <strong>Unpacman (Silver Layer)</strong> - The transformed data layer where data is cleaned, validated, and structured. This layer represents the intermediate stage where data is unpacked from its raw form and prepared for analysis. We apply <code className="code-purple">schema validation</code> and <code className="code-purple">data type</code> conversions here.
    </div>
  </div>
  <div className="medallion-row">
    <img className="medallion-img" src="/img/bronze_man.png" alt="Bronze Man" />
    <div className="medallion-desc">
      <strong>Bronze Knight (Bronze Layer)</strong> - The first level of achievement in data quality and structure. This layer represents the initial refinement of data, ensuring basic data quality standards are met. We implement <code className="code-orange">data quality</code> checks and <code className="code-orange">error handling</code> at this stage.
    </div>
  </div>
  <div className="medallion-row reverse">
    <img className="medallion-img" src="/img/silver_surfer.png" alt="Silver Man" />
    <div className="medallion-desc">
      <strong>Silver Surfer (Silver Layer)</strong> - The second level of achievement, representing enhanced data quality and enrichment. This layer adds business logic and transformations to create more valuable data assets. We apply <code className="code-green">business rules</code> and <code className="code-green">data enrichment</code> here.
    </div>
  </div>
  <div className="medallion-row">
    <img className="medallion-img" src="/img/dr_midas.png" alt="Gold Man" />
    <div className="medallion-desc">
      <strong>Dr. Midas (Gold Layer)</strong> - The highest level of achievement, representing the most refined and valuable data. This layer contains the final, production-ready data that powers analytics and business intelligence. We ensure <code className="code-red">data consistency</code> and <code className="code-red">performance optimization</code> at this stage.
    </div>
  </div>
</div>

## Data Processing Timeline

<AnimatedTimeline />

## Features

- 📚 Comprehensive documentation of medallion architecture
- 🔍 Built-in search functionality
- 🌙 Dark mode support
- 📱 Mobile responsive
- 🎨 Customizable theme
- 📊 Interactive data examples
- 🔄 Real-time data pipeline visualizations

## Get Started

To get started with this website, you can:

1. Explore the medallion architecture documentation
2. Review the data transformation examples
3. Check out the interactive timeline
4. Use the search bar to find specific content
5. Switch between light and dark mode using the theme toggle

## Contact

Feel free to reach out to me through:
- [GitHub](https://github.com/your-username)
- [Twitter](https://twitter.com/your-username)
- [Email](mailto:your-email@example.com)
