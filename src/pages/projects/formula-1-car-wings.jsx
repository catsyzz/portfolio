import React from 'react';
import Layout from '@theme/Layout';
import styles from './WingSummary.module.css';

export default function WingSummary() {
  return (
    <Layout title="Formula 1 Wing Development">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Formula 1 Front Wing Development</h1>
       
        {/* Centered summary block */}
        <div className={styles.centeredBlock}>
          <p className={styles.sectionText}>
            This project documents the development of a Formula 1 front wing: concept ideas, CAD iterations, CFD-driven
            shape tweaks, and FEA analysis for structural stiffness and load paths. The goal was to maximize downforce
            for cornering while controlling drag and ensuring structural integrity under peak aerodynamic loads.
          </p>
        </div>

        {/* CAD / 3D viewer (replace src with your embed) */}
        <div className={styles.modeloWrapper}>
          <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
              <iframe
                src="about:blank"
                title="Wing CAD / 3D"
                frameBorder="0"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0 }}
                className={styles.modeloIframe}
              />
            </div>
          </div>
        </div>

        <p className={styles.modeloCaption}>
          <em>Front Wing Design</em>
        </p>

        <div className={styles.modeloWrapper}>
          <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
              <iframe
                src="about:blank"
                title="Wing CAD / 3D"
                frameBorder="0"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0 }}
                className={styles.modeloIframe}
              />
            </div>
          </div>
        </div>

        <p className={styles.modeloCaption}>
          <em>Back Wing Design</em>
        </p>

        {/* Iteration thumbnails and FEA snapshots */}
        <div className={styles.progressRow}>
          <div className={styles.progressCard}>
            <img src="/img/wing/iteration-01.jpg" alt="Wing iteration 1" className={styles.progressImage} />
            <div className={styles.smallMuted}>Concept geometry and initial profile</div>
          </div>

          <div className={styles.progressCard}>
            <img src="/img/wing/iteration-02.jpg" alt="Wing iteration 2" className={styles.progressImage} />
            <div className={styles.smallMuted}>Refined section shapes and endplate experiments</div>
          </div>
        </div>


        {/* Highlights / Commitments / Collaborators */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Highlights</h2>
              <p className={styles.listText}>
                • Used Solidworkds to develop design;<br />
                • Gained exprience in surface modeling and FEA Analaysis;<br />
                • Tested multiple iterations and made decisions based on data.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>My Commitments</h2>
              <p className={styles.listText}>
                • Same as highlights;<br />
                • Designed and tested the front and back wing designs based on popular Formula 1 Car design trends;<br />
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Collaborators</h2>
              <ul className={styles.collabList}>
                <li className={styles.listText}>Just me, heh — Lead Designer</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}