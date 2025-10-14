import React from 'react';
import Layout from '@theme/Layout';
import styles from './ProjectSummary.module.css';

export default function ASVSummary() {
  return (
    <Layout title="Autonomous Surface Vehicle — COSMOS Cluster 7">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Autonomous Surface Vehicle with DAQ</h1>
        

        {/* Centered summary block pulled from poster abstract + purpose */}
        <div className={styles.centeredBlock}>
          <p className={styles.sectionText}>
            The project developed an autonomous surface vehicle (ASV) to survey water health by collecting
            real-time temperature, pH, and redox potential data, transmitting telemetry to a base station
            for storage and analysis. The ASV integrates GPS, telemetry radios, and a Metro M4 microcontroller,
            enabling autonomous waypoint navigation and environmental mapping.
          </p>
        </div>

        {/* CAD viewer placeholder (replace src with your modelo/embed link) */}
            <div className={styles.modeloWrapper}>
        <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            <iframe
                src="https://www.modelo.io/embedded/1978199812340015104?viewport=false&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                allowFullScreen
                title="Modelo / 3D CAD"
            />
            </div>
        </div>
        </div>
        <p className={styles.modeloCaption}>
          <em>Baseplate I designed to house all electronics for the USV</em>
        </p>

        {/* Progress images / build photos with actual img elements */}
        <div className={styles.progressRow}>
          <div className={styles.progressCard}>
            <img
              src="/img/usvPlate1.png"
              alt="Initial CAD and mounting plate iterations"
              className={styles.progressImagePlaceholder}
            />
            <div className={styles.smallMuted}>Initial CAD & mounting plate iterations</div>
          </div>

          <div className={styles.progressCard}>
            <img
              src="/img/usvDesign1.png"
              alt="Electronics layout and sensor integration"
              className={styles.progressImagePlaceholder}
            />
            <div className={styles.smallMuted}>Electronics layout and sensor integration</div>
          </div>

          <div className={styles.progressCard}>
            <img
              src="/img/usvIteration2.png"
              alt="Field testing and telemetry snapshots"
              className={styles.progressImagePlaceholder}
            />
            <div className={styles.smallMuted}>Field testing & telemetry snapshots</div>
          </div>
        </div>

            {/* 📄 PDF Viewer */}
            <div className={styles.pdfWrapper}>
            <iframe
                src="/files/COSMOS 2024 C7 Poster - Team C (1).pdf"
                title="COSMOS ASV Research Poster"
                className={styles.pdfViewer}
            />
            </div>

            <p className={styles.modeloCaption}>
            <em>Full research poster outlining our COSMOS ASV project</em>
            </p>


        {/* Highlights / Commitments / Collaborators — left-aligned blocks with inner glowing card */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>🔧 Highlights</h2>
              <p className={styles.listText}>
                • Real-time telemetry to base station;<br />
                • Integrated Metro M4, GPS, pH, temperature, redox sensors;<br />
                • Autonomous waypoint navigation and environmental mapping.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>My Commitments</h2>
              <p className={styles.listText}>
                • Designed CAD mounts and streamlined electronics packaging;<br />
                • Focused on reproducible data collection and database logging;<br />
                • Prioritized ease-of-debugging and modular sensor integration.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Collaborators</h2>
              <ul className={styles.collabList}>
                <li className={styles.listText}>David Leschensky — Team Member</li>
                <li className={styles.listText}>Caitlin Lien — Team Member</li>
                <li className={styles.listText}>Mariia Maliar — Team Member</li>
                <li className={styles.listText}>Dr. Silberman — Professor Advisor</li>
                <li className={styles.listText}>Mike Trichtler — Mentor</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}