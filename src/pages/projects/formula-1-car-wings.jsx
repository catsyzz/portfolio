import React from 'react';
import Layout from '@theme/Layout';
import styles from './WingSummary.module.css';

export default function WingSummary() {
  return (
    <Layout title="Formula 1 Wing Development">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Formula 1 Wing Development</h1>
       
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
                src="https://www.modelo.io/embedded/1981264768290557952?viewport=true&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false&c_at0=903.4184681177139&c_at1=367.8487663269043&c_at2=1894.2820434570312&c_theta=1.0236018366025486&c_phi=0.3884195997410013&c_dis=2954.8036005873005"
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
                src="https://www.modelo.io/embedded/1981286042057400320?viewport=true&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false&c_at0=375.0000110351575&c_at1=663.7474365234375&c_at2=321.49995000000126&c_theta=2.835301836602552&c_phi=-1.366580400258999&c_dis=1773.466194323021"
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
            <img src="/img/Flow Trajectories Front Wing.png" alt="Wing iteration 1" className={styles.progressImage} />
            <div className={styles.smallMuted}>Flow Simulation using Solidworks for front wing</div>
          </div>

          <div className={styles.progressCard}>
            <img src="/img/Flow Trajectories Back Wing.gif" alt="Wing iteration 2" className={styles.progressImage} />
            <div className={styles.smallMuted}>Flow Simulation using Solidworks for back wing</div>
          </div>
        </div>


        {/* Highlights / Commitments / Collaborators */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <div className={styles.gridBlockInner}>
              <h2 className={styles.subheading}>Highlights</h2>
              <p className={styles.listText}>
                • Used Solidworks to develop design based on Williams F1 front and back wings;<br />
                • Gained exprience in surface modeling and flow trajectories and flow simulation through solidworks<br />
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