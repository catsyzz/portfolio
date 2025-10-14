import React from 'react';
import Layout from '@theme/Layout';
import styles from './ProjectShowcase.module.css';

export default function vexRobots() {
  return (
    <Layout title="Vex Robots Project">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Vex Robots</h1>
        <p className={styles.bio}></p>

        {/* 📘 Summary Block — styled like other glowing blocks */}
        <div className={styles.gridBlock}>
          <p className={styles.sectionText}>
            Some of the designs and code come from my time in VEX Robotics competitions. I participated in the VEX Robotics program from 2018 to 2024, competing in various regional and state competitions. Below are some of the CAD models and code snippets from the robots I helped design and build.
          </p>
        </div>

        {/* 🖼 Modelo Viewer */}
        <div className={styles.modeloWrapper}>
          <div className={styles.modeloContainer}>
            <iframe
              src="https://www.modelo.io/embedded/1977931214094688256?viewport=false&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false"
              title="Modelo Viewer"
              frameBorder="0"
              allowFullScreen
              className={styles.modeloIframe}
            />
          </div>
         
        </div>
         <p className={styles.modeloCaption}>
        <em>Example of a fully designed CAD robot I designed using Inventor</em>
      </p>

       <div className={styles.gridBlock}>
          <p className={styles.sectionText}>
            Here are some google photos albums of the robots I built and competed with over the years.<br />
            <a href="https://photos.app.goo.gl/LcjJyR2y14UPvnTc6" target="_blank" rel="noopener noreferrer">VEX IQ - 2015-2020</a><br />
            <a href="https://photos.app.goo.gl/r3WCAA22tLft5pPe8" target="_blank" rel="noopener noreferrer">VEX VRC - 2021-2022</a><br />
            <a href="https://photos.app.goo.gl/RBLASxhf9kDQT6HdA" target="_blank" rel="noopener noreferrer">VEX VRC - 2022-2023</a><br />
            <a href="https://photos.app.goo.gl/RBLASxhf9kDQT6HdA" target="_blank" rel="noopener noreferrer">VEX VRC - 2023-2024</a><br />
            <a href="https://photos.app.goo.gl/3cXoG7y8m4nYk3bU6" target="_blank" rel="noopener noreferrer">VEX VRC - 2024-2025</a><br />

             </p>
        </div>

        {/* 🔧 Highlights, 🧠 Commitments, 🤝 Collaborators */}
        <div className={styles.gridSection}>
          <div className={styles.gridBlock}>
            <h2 className={styles.subheading}>🔧 Highlights</h2>
            <p className={styles.sectionText}>
              • Integrated CAD modeling with Autodesk Fusion 360<br />
              • Scroll-triggered animations and graffiti-inspired branding<br />
              • Responsive layout optimized for desktop and mobile
            </p>
          </div>

          <div className={styles.gridBlock}>
            <h2 className={styles.subheading}>🧠 My Commitments</h2>
            <p className={styles.sectionText}>
              • Led mechanical + software integration<br />
              • Prioritized accessibility and beginner-friendly documentation<br />
              • Iterated on design based on user feedback and testing
            </p>
          </div>

          <div className={styles.gridBlock}>
            <h2 className={styles.subheading}>🤝 Collaborators</h2>
            <p className={styles.sectionText}>
              • All ex teammates from VEX Robotics competitions<br />
              • Shoutout to Matt, Gabur, and everyone from VLA for all the help and support!<br />
              • Coaches: Mr Braito, Mrs. Northum, Mama Renslow
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}