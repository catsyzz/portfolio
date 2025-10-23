import React from 'react';
import Layout from '@theme/Layout';
import styles from './WindTurbineSummary.module.css';

export default function WindTurbineSummary() {
  return (
    <Layout title="Wind Turbine Design">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Wind Turbine Design</h1>
        

        {/* 📘 Summary Block */}
        <div className={styles.centeredBlock}>
          <p className={styles.sectionText}>
            Explored aerodynamic principles through the design of a small-scale wind turbine for low-wind environments. Researched NREL airfoil families to understand how blade geometry affects lift, drag, and stall behavior. Applied insights from academic studies and NASA resources to select and model an efficient blade profile, deepening my understanding of airfoil performance, twist angles, and rotational stability.   </p>
        </div>

                {/* 🖼 CAD Viewer Section */}
            <div className={styles.modeloWrapper}>
            {/* Uncomment this block when ready to embed the real CAD viewer */}
            <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                <iframe
                    src="https://www.modelo.io/embedded/1981388616441880576?viewport=true&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false&c_at0=62.88646657112986&c_at1=3.5560000621808285&c_at2=54.56614262703806&c_theta=-1.4630981633974494&c_phi=-0.060367074800567876&c_dis=164.74970977400494"
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
            <img src="/img/Screenshot 2025-10-23 025837.png" alt="Blade prototype" className={styles.progressImage} />
            <div className={styles.smallMuted}>Initial blade prototype with NREL profile</div>
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
            title="Dom's research paper"
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
                • Blade design based on NREL S807 airfoil;<br />
                • Custom Tower design for turbine with flow testing through SOLIDWORKS<br />
                • Static electricity generation testing under variable wind conditions (under a fan).
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
                <li className={styles.listText}>Rowan</li>
                <li className={styles.listText}>Nicole</li>
                <li className={styles.listText}>Nick</li>
                <li className={styles.listText}>Josh</li>
                <li className={styles.listText}>Wendy</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}