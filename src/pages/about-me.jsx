import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function AboutMePage() {
  const skills = [
  // Software & Programming
  'Autodesk Inventor',
  'Fusion 360',
  'Onshape',
  'RobotC',
  'SOLIDWORKS',

  // Hardware & Fabrication
  'Arduino',
  'CNC',
  'FDM 3D Printing',
  'SLA 3D Printing',
  'Hand Tools',
  'Laser-cutter',
  'Power tools',
  
  // Skills & Processes
  'Fabrication',
  'Rapid Prototyping',
  'Technical Writing',

  // Communication & Leadership
  'Mentoring',
  'Project Management',
  'Public Speaking',
  'Team Leadership',

  // Languages
  'English',
  'Spanish'
];

  return (
    <Layout title="About Me" description="Dom's background, skills, and experience">
      <div className={styles.pageWrapper}>
        <h2 className={styles.resumeHeading}>About Me ฅ^•ﻌ•^ฅ</h2>
        <div className={styles.mainContent}>
          {/* Left Column – Intro + Skills */}
          <div className={styles.leftColumn}>
            <h1 className={styles.heading}>Hi! I'm Dom</h1>
            <p className={styles.bio}>
              I'm a Mechanical Engineering student at UC Berkeley, passionate about engineering and research.
              I thrive at the intersection of mechanical applications, robotics, and real-world impact.
            </p>
            <p className={styles.bio}>
              I love to work on things that move and interact with the world in new ways :D
            </p>

            <div className={styles.skillsSection}>
              <h2 className={styles.subheading}>Skills</h2>
              <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <li key={index} className={styles.skillItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column – Image + Location + Buttons */}
          <div className={styles.rightColumn}>
            <img
              src="https://github.com/catsyzz.png"
              alt="Dom's profile"
              className={styles.profileImage}
            />
            <p className={styles.location}>📍 San Diego / Berkeley, CA</p>

            <div className={styles.buttonGroup}>
              <a href="https://www.linkedin.com/in/dominic-lopez-39715527a/" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>🔗 LinkedIn</a>
              <a href="./resume" className={styles.actionButton}>📄 Resume</a>
              <a href="mailto:catsyzz@berkeley.edu" className={styles.actionButton}>📧 Academic Email: catsyzz@berkeley.edu</a>
              <a href="mailto:dominicflopez413@gmail.com" className={styles.actionButton}>📬 Personal Email: dominicflopez413@gmail.com</a>
              <a href="tel:+16198695624" className={styles.actionButton}>
              📱 Call Me +1(619) 869- 5624 (if you really want to I guess)
            </a>
            </div>
          </div>
        </div>

<hr className={styles.sectionDivider} />
      </div>
    </Layout>
  );
}