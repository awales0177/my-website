---
sidebar_position: 1
---

# About the Effort

<div className="logo-row">
  <div className="logo-container">
    <img src="/img/lot-graph.png" alt="Models" className="logo-image" />
    <div className="image-label">Models</div>
  </div>
  <div className="logo-container">
    <img src="/img/rounded-domain.png" alt="Domains" className="logo-image" />
    <div className="image-label">Domains</div>
  </div>
  <div className="logo-container">
    <img src="/img/ref.png" alt="Reference Data" className="logo-image" />
    <div className="image-label">Reference Data</div>
  </div>
  <div className="logo-container">
    <img src="/img/rounded-orange-rocket.png" alt="Rocket" className="logo-image" />
    <div className="image-label">ETL SOP</div>
  </div>
  <div className="logo-container">
    <img src="/img/rounded-orange-code.png" alt="Code" className="logo-image" />
    <div className="image-label">Code</div>
  </div>
    <div className="logo-container">
    <img src="/img/rounded-agree.png" alt="Code" className="logo-image" />
    <div className="image-label">Agreements</div>
  </div>
</div>

## Our Mission

We are dedicated to creating a comprehensive and accessible documentation platform that empowers developers and users to understand and work with our systems effectively. Our logo, with its clean and modern design, reflects our commitment to clarity and professionalism.

## What We Do

- **Documentation**: We maintain detailed, up-to-date documentation for all our systems and processes
- **Database Schemas**: We provide clear explanations of our database structures and relationships
- **Reference Data**: We offer comprehensive reference materials for all our data models
- **Examples**: We include practical examples to help users understand implementation details

## Our Approach

Our documentation is built with the following principles in mind:

- **Clarity**: Clear, concise explanations that are easy to understand
- **Completeness**: Comprehensive coverage of all relevant topics
- **Accessibility**: Information is organized in a way that's easy to navigate
- **Maintenance**: Regular updates to ensure accuracy and relevance

## Get Started

<div className="cta-buttons">
  <a href="/docs/intro" className="cta-button">
    Read the Introduction
  </a>
  <a href="/docs/er-diagram" className="cta-button">
    View ER Diagram
  </a>
</div>

<style>{`
  .logo-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: var(--ifm-background-color);
    border-radius: 8px;
    transition: transform 0.3s ease;
    gap: 0.5rem;
  }

  .logo-container:hover {
    transform: translateY(-4px);
  }

  .logo-image {
    max-width: 150px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .logo-image:hover {
    transform: scale(1.05);
  }

  .image-label {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--ifm-color-emphasis-700);
    text-align: center;
    margin-top: 0.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background-color: var(--ifm-color-primary);
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .cta-button:hover {
    background-color: var(--ifm-color-primary-darker);
    color: white;
    text-decoration: none;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .logo-row {
      flex-direction: column;
      gap: 1rem;
    }

    .logo-container {
      width: 100%;
    }

    .logo-image {
      max-width: 100%;
    }

    .cta-buttons {
      flex-direction: column;
    }
    
    .cta-button {
      text-align: center;
      justify-content: center;
    }
  }
`}</style> 