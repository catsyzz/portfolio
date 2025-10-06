import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <Layout title="Projects">
      <main className={styles.main}>
        <div className={styles.pageTitle}>Projects</div>

        <div className={styles.grid}>
          {/* Creative Projects */}
          <div className={styles.column}>
            <h2 className={styles.columnHeading}>Creative Projects</h2>

            <Link to="/projects/guitar-hero-modding" className={styles.card}>
              <div className={styles.title}>Guitar Hero Modding</div>
              <div className={styles.description}>
                Custom controller shell and firmware tweaks for rhythm game performance.
              </div>
              <div className={styles.dates}>June 2023 – Present</div>
            </Link>

            <Link to="/projects/high-stakes" className={styles.card}>
              <div className={styles.title}>High Stakes</div>
              <div className={styles.description}>
                Experimental game controller with pressure-sensitive input and haptic feedback.
              </div>
              <div className={styles.dates}>March 2024 – July 2024</div>
            </Link>

            <Link to="/projects/notebook-progression" className={styles.card}>
              <div className={styles.title}>Notebook Progression</div>
              <div className={styles.description}>
                Visual design system for tracking creative and technical growth across projects.
              </div>
              <div className={styles.dates}>January 2023 – May 2023</div>
            </Link>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Research Projects */}
          <div className={styles.column}>
            <h2 className={styles.columnHeading}>Research Projects</h2>

            <Link to="/projects/over-under" className={styles.card}>
              <div className={styles.title}>Over-Under</div>
              <div className={styles.description}>
                Dual-environment robot designed for seamless transition between land and water.
              </div>
              <div className={styles.dates}>August 2024 – Present</div>
            </Link>

            <Link to="/projects/usv-design" className={styles.card}>
              <div className={styles.title}>USV Design</div>
              <div className={styles.description}>
                Unmanned surface vehicle with modular hull and sensor integration for field deployment.
              </div>
              <div className={styles.dates}>May 2023 – August 2023</div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}