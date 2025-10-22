import React from 'react';
import Layout from '@theme/Layout';
//import styles from './WindTurbineSummary.module.css';

export default function WindTurbineSummary() {
  return (
    <Layout title="Wind Turbine Design">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Wind Turbine Design</h1>
        

        {/* 📘 Summary Block */}
        <div className={styles.centeredBlock}>
          <p className={styles.sectionText}>
            This project explores the design and development of a small-scale wind turbine optimized for low wind conditions. Blade geometry was modeled using NACA airfoils, and the system included a custom gearbox and Arduino-based monitoring. The goal was to balance theoretical modeling with real-world testing and iterative refinement.
          </p>
        </div>

                {/* 🖼 CAD Viewer Section */}
            <div className={styles.modeloWrapper}>
            {/* Uncomment this block when ready to embed the real CAD viewer */}
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
          <em>Finalized Turbine Assembly modeled in Fusion 360</em>
        </p>

        {/* 🖼 Progress Images */}
        <div className={styles.progressRow}>
          <div className={styles.progressCard}>
            <img src="/img/wind-turbine/build-01.jpg" alt="Blade prototype" className={styles.progressImage} />
            <div className={styles.smallMuted}>Initial blade prototype with NACA profile</div>
          </div>

          <div className={styles.progressCard}>
            <img src="/img/wind-turbine/build-02.jpg" alt="Assembled turbine" className={styles.progressImage} />
            <div className={styles.smallMuted}>Assembled turbine with gearbox and sensors</div>
          </div>
        </div>

        {/* 📄 Research PDF Viewer */}
            <div className={styles.pdfWrapper}>
            <iframe
               
            src="/files/Glider Project Group 15 (2).pdf"
            title="Dom's Resume"
            className={styles.pdfViewer}          
            />
            </div>

            <p className={styles.pdfCaption}>
            <em>Research and design rationale for aerodynamic modeling, mechanical tolerances, and energy optimization</em>
            </p>

        {/* 🔧 Highlights / 🧠 Commitments / 🤝 Collaborators */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Highlights</h2>
              <p className={styles.listText}>
                • Blade design based on NACA 4412 airfoil;<br />
                • Custom planetary gearbox for torque amplification;<br />
                • Arduino-based RPM and voltage monitoring system.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>My Commitments</h2>
              <p className={styles.listText}>
                • Modeled blade geometry and hub assembly;<br />
                • Fabricated and tested multiple prototypes;<br />
                • Logged performance data and iterated design.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Collaborators</h2>
              <ul className={styles.collabList}>
                <li className={styles.listText}>Cherry — Assisted with CAD modeling and sensor integration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}