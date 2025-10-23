import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './projects.module.css';


export default function Projects() {
  return (
    <Layout title="Projects">
      <main className={styles.main}>
        <div className={styles.pageTitle}>Projects</div>

        <div className={styles.grid}>
          {/* Creative Projects */}
          <div className={styles.column}>
            <h2 className={styles.columnHeading}>Creative Projects</h2>
            <div className={styles.cardGrid}>
  
                <Link to="/projects/vex-robots" className={styles.card}>
                <img src="/img/highstakesbot.jpg" alt="Vex" className={styles.cardImage} />
                <div className={styles.title}>Vex Robots</div>
                <div className={styles.description}>
                  Designs of Vex Robotics competition robots, including CAD models, advanced motion profiling code, and achievement results through the program.
                </div>
                <div className={styles.dates}>March 2024 – July 2024</div>
              </Link>

             <Link to="/projects/unmanned-glider" className={styles.card}>
                <img src="/img/gliderV1.png" alt="Glider Design" className={styles.cardImage} />
                <div className={styles.title}>Glider Design</div>
                <div className={styles.description}>
                  Learned aerodynamics and flight mechanics by designing and building an unmanned glider from scratch, including CAD modeling, structural analysis, and flight testing.
                </div>
                <div className={styles.dates}>August 2025 – October 2025</div>
              </Link>

          
               <Link to="/projects/guitar-hero-modding" className={styles.card}>
                <img src="/img/ghs1.jpg" alt="Guitar Hero Modding" className={styles.cardImage} />
                <div className={styles.title}>Guitar Hero Modding</div>
                <div className={styles.description}>
                  Custom controller shell and firmware tweaks for rhythm game performance.
                </div>
                <div className={styles.dates}>June 2023 – Present</div>
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}></div>

          {/* Research Projects */}
          <div className={styles.column}>
            <h2 className={styles.columnHeading}>Research/Professional Projects</h2>
            <div className={styles.cardGrid}>
            
              <Link to="/projects/formula-1-car-wings" className={styles.card}>
                <img src="/img/williamsWing.jpg" alt="Formula 1 Wing iterations" className={styles.cardImage} />
                <div className={styles.title}>Formula 1 Car Front Wing</div>
                <div className={styles.description}>
                  Designed and tested front and back wings for a mock Formula 1 car and tested aerodynamics using FEA and Ansys.
                </div>
                <div className={styles.dates}>January 2023 – May 2023</div>
              </Link>

               <Link to="/projects/wind-turbine" className={styles.card}>
                <img src="/img/windturbineExample1.jpg" alt="NREL-Turbine" className={styles.cardImage} />
                <div className={styles.title}>Wind Turbine Design</div>
                <div className={styles.description}>
                  Scaled down a NREL wind turbine model to design and test a small-scale wind turbine for energy generation using the NREL S807 airfoil.
                </div>
                <div className={styles.dates}>August 2025 – September 2025</div>
              </Link>

              <Link to="/projects/usv-design" className={styles.card}>
                <img src="/img/cosmosUSV.jpg" alt="USV Design" className={styles.cardImage} />
                <div className={styles.title}>USV Design</div>
                <div className={styles.description}>
                  Designed autonomous data collection device to measure water quality and impact of local invasive species on native populations.
                </div>
                <div className={styles.dates}>May 2024 – August 2024</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}