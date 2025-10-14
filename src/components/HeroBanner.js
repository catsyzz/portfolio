import React from 'react';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <>
      {/* Intro Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.imageBox}>
            <img
              src="https://github.com/catsyzz.png"
              alt="Dom"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.textBox}>
            <h1 className={styles.title}>Hi, I'm Dom {'\u207D^ >⩊< ^\u207EⳊ'}</h1>
            <p className={styles.description}>
              I'm a Mechanical Engineering student passionate about merging technical rigor with bold creative expression.
            </p>
            <p className={styles.description}> 
             𓆝 𓆟 𓆞 𓆝 𓆟 Welcome to my portfolio 𓆝 𓆟 𓆞 𓆝 𓆟
            </p>
            <div className={styles.buttons}>
              <a href="files/resume.pdf" className={styles.button}>📄 Resume</a>
              <a
                href="https://www.linkedin.com/in/dominic-lopez-39715527a/"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn
              </a>
            </div>
            <div className={styles.emails}>
              <p><strong>Personal:</strong> dominiclopez413@gmail.com</p>
              <p><strong>Academic:</strong> catsyzz@berkeley.edu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & About Me Section */}
      <section className={styles.projectsAboutWrapper}>
        <div className={styles.splitLinks}>
          <a href="/projects" className={styles.splitCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: 'url(/img/projects.jpg)' }}
            />
            <div className={styles.cardOverlay}>
              <h2 className={styles.cardTitle}>Projects</h2>
              <p className={styles.cardText}>
                Explore robotics, engineering, and research projects in aquatic, terrestrial, and soft robotics—with interactive 3D models and media.
              </p>
            </div>
          </a>

          <a href="/about-me" className={styles.splitCard}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: 'url(/img/aboutme.jpg)' }}
            />
            <div className={styles.cardOverlay}>
              <h2 className={styles.cardTitle}>About Me</h2>
              <p className={styles.cardText}>
                Learn about my background, skills, awards, and experience in robotics, mechanical design, and creative engineering.
              </p>
            </div>
          </a>
           <div>
          <p> </p>
           </div>
        </div>
      </section>
    </>
  );
}
