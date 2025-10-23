import React from 'react';
import Layout from '@theme/Layout';
import styles from './GliderSummary.module.css';

export default function GliderSummary() {
  return (
    <Layout title="Unmanned Glider Design">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Unmanned Glider Design</h1>
        {/* <p className={styles.bio}>
          Lightweight glider built from balsa, foam, and 3D printed components — optimized for stability, modularity, and hand-launch testing.
        </p> */}

        {/* 📘 Summary Block */}
        <div className={styles.centeredBlock}>
          <p className={styles.sectionText}>
            This project explores the design and fabrication of a lightweight unmanned glider using balsa sticks for the frame,
            foam for aerodynamic shaping, and custom 3D printed parts for mounting and modularity. The goal was to create a
            stable, hand-launchable platform for testing passive flight characteristics and structural durability under real-world conditions.
          </p>
        </div>

        {/* 🖼 CAD Viewer */}
        <div className={styles.modeloWrapper}>
          <div style={{ width: '100%', paddingBottom: '56.25%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
              <iframe
                src="https://www.modelo.io/embedded/1980702263075966976?viewport=true&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false&c_at0=-298.7323283214191&c_at1=223.81620184741223&c_at2=70.47848622164929&c_theta=-1.1606981633974398&c_phi=0.20693292519943385&c_dis=950.1280293119571"
                title="Glider CAD / 3D"
                frameBorder="0"
                allowFullScreen
                style={{ width: '100%', height: '100%', border: 0 }}
                className={styles.modeloIframe}
              />
            </div>
          </div>
        </div>

        <p className={styles.modeloCaption}>
          <em>Finalized Glider Design using Fusion 360</em>
        </p>

        {/* 🖼 Progress Images */}
        <div className={styles.progressRow}>
          <div className={styles.progressCard}>
            <img src="/img/gliderV1.png" alt="Initial frame assembly" className={styles.progressImage} />
            <div className={styles.smallMuted}>Initial balsa frame and wing layout in cad</div>
          </div>

          <div className={styles.progressCard}>
            <img src="/img/build-02.jpg" alt="Final glider with foam shaping" className={styles.progressImage} />
            <div className={styles.smallMuted}>Final glider with foam shaping and 3D printed mounts</div>
          </div>
        </div>

        {/* 🔧 Highlights / 🧠 Commitments / 🤝 Collaborators */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Highlights</h2>
              <p className={styles.listText}>
                • Balsa stick frame with foam shaping using 3D Printed Airfoil ribs for wing shaping;<br />
                • 3D printed mounts for modular tail to test different iterations;<br />
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>My Commitments</h2>
              <p className={styles.listText}>
                • Designed and fabricated components ;<br />
                • Iterated wing geometry for stable glide ratio;<br />
                • Documented build process and flight results.
              </p>
            </div>
          </div>

          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Collaborators</h2>
              <ul className={styles.collabList}>
                <li className={styles.listText}>Cherry - Collaborated with design and manufacturing (both our times using Fusion 360)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}