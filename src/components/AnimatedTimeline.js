import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={timelineRef}
      style={{ 
        position: 'relative',
        padding: '4rem 2rem 2rem 2rem',
        backgroundColor: 'var(--ifm-color-emphasis-100)',
        borderRadius: '8px',
        marginTop: '2rem',
        overflowX: 'auto'
      }}
    >
      {/* Jira Logo */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 2
      }}>
        <img src="/img/jira_logo.png" width="40" alt="Jira Logo" />
      </div>

      {/* Thermometer Bar */}
      <div style={{ 
        position: 'absolute',
        top: '50%',
        left: '2rem',
        right: '2rem',
        height: '8px',
        backgroundColor: 'var(--ifm-color-emphasis-200)',
        borderRadius: '4px',
        transform: 'translateY(-50%)'
      }}></div>

      {/* Progress Fill */}
      <div style={{ 
        position: 'absolute',
        top: '50%',
        left: '2rem',
        height: '8px',
        backgroundColor: 'var(--ifm-color-primary)',
        borderRadius: '4px',
        transform: 'translateY(-50%)',
        width: isVisible ? 'calc(100% - 4rem)' : '0%',
        transition: 'width 2s ease-out'
      }}></div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Step 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="/docs/data-ingestion" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--ifm-color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              border: '4px solid var(--ifm-background-color)',
              boxShadow: '0 0 0 4px var(--ifm-color-primary)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s',
              cursor: 'pointer',
              className: 'timeline-circle'
            }}>1</div>
          </a>
          <div style={{ textAlign: 'center', maxWidth: '150px', marginTop: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Data Ingestion</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Raw data collection</p>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="/docs/data-unpacking" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--ifm-color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              border: '4px solid var(--ifm-background-color)',
              boxShadow: '0 0 0 4px var(--ifm-color-primary)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s',
              cursor: 'pointer',
              className: 'timeline-circle'
            }}>2</div>
          </a>
          <div style={{ textAlign: 'center', maxWidth: '150px', marginTop: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Data Unpacking</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Cleaning & structuring</p>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="/docs/bronze-refinement" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--ifm-color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              border: '4px solid var(--ifm-background-color)',
              boxShadow: '0 0 0 4px var(--ifm-color-primary)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease-out 1s, transform 0.5s ease-out 1s',
              cursor: 'pointer',
              className: 'timeline-circle'
            }}>3</div>
          </a>
          <div style={{ textAlign: 'center', maxWidth: '150px', marginTop: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Bronze Refinement</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Basic quality checks</p>
          </div>
        </div>

        {/* Step 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="/docs/silver-enhancement" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--ifm-color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              border: '4px solid var(--ifm-background-color)',
              boxShadow: '0 0 0 4px var(--ifm-color-primary)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease-out 1.4s, transform 0.5s ease-out 1.4s',
              cursor: 'pointer',
              className: 'timeline-circle'
            }}>4</div>
          </a>
          <div style={{ textAlign: 'center', maxWidth: '150px', marginTop: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Silver Enhancement</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Business logic</p>
          </div>
        </div>

        {/* Step 5 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="/docs/gold-production" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--ifm-color-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              border: '4px solid var(--ifm-background-color)',
              boxShadow: '0 0 0 4px var(--ifm-color-primary)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.8)',
              transition: 'opacity 0.5s ease-out 1.8s, transform 0.5s ease-out 1.8s',
              cursor: 'pointer',
              className: 'timeline-circle'
            }}>5</div>
          </a>
          <div style={{ textAlign: 'center', maxWidth: '150px', marginTop: '0.5rem' }}>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Gold Production</h3>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Production-ready</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-circle:hover {
          transform: scale(1.2) !important;
          box-shadow: 0 0 0 6px var(--ifm-color-primary) !important;
          transition: none !important;
        }
      `}</style>
    </div>
  );
} 