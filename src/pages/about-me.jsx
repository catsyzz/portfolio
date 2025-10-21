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


       {/* Divider */}
<hr className={styles.sectionDivider} />
{/* 

<section className={styles.resumeSection}>
  <h2 className={styles.resumeHeading}>Professional Summary</h2>

  <div className={styles.resumeGrid}>
    <div className={styles.resumeColumn}>
     
      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeSubheading}>🎓 Education</h3>
        <ul className={styles.resumeList}>
          <li><strong>UC Berkeley</strong> — B.S. Mechanical Engineering, Regents Scholar (Expected 2028)</li>
          <li><strong>Memberships</strong>: HES - Hispanic Engineers and Scientists, SHPE - Society of Hispanic Professional Engineers, UAVs @ Berkeley, BEAM - Berkeley Engineers and Mentors, Regents and Chancellor's Scholar Association</li>
        </ul>
      </div>

      
      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeSubheading}>🔬 Research</h3>
        <ul className={styles.resumeList}>
          <li><strong>Autonomous Vehicles Lab (UCSD)</strong> — GPS-guided ASV for lake data collection</li>
        </ul>
      </div>
    </div>

 
    <div className={styles.resumeColumn}>
    
      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeSubheading}>🛠 Experience</h3>
        <ul className={styles.resumeList}>
          <li><strong>EZ Robotics</strong> — Co-Founder & Mentor for Vex Mentoring (2023–Present)</li>
          <li><strong>8301D Dewey</strong> — Mechanical + Software Lead, CEO (2015–2025)</li>
          <li><strong>Qualcomm Inc.</strong> — Curriculum Engineer & Program Lead (2021–2024)</li>
          <li><strong>Private Tutor</strong> — AP Math, History, and CS Tutor (2022–2024)</li>
          <li><strong>VEX Mentoring</strong> — CAD & Design Workshops for 50+ teams</li>
          <li><strong>Integrated Sports District Coordinator</strong> — Inclusive sports for students with disabilities (2020-2025)</li>
        </ul>
      </div>

     
      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeSubheading}>🏆 Awards & Honors</h3>
        <ul className={styles.resumeList}>
          <li><strong>Regents & Chancellor’s Scholar</strong> — UC Berkeley</li>
          <li><strong>VEX Design Award</strong> — Highest award for mechanical design and documentation at the World Championships (2022-2024)</li>
          <li><strong>San Diego Robotic Engineer & Science Student of the Year</strong> (2022-2025)</li>
          <li><strong>SHPE Jr. Chapter Founder</strong></li>
          <li><strong>COSMOS Research Recognition</strong> — Autonomous Boat Project</li>
          <li><strong>VEX League Champion</strong> — 2023, 2024</li>
        </ul>
      </div>
    </div>
  </div>
</section> */}
      </div>
    </Layout>
  );
}