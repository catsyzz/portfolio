import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';



// AI version of function


function HomepageHeader() {
  const projects = [
    {
      title: 'High Stakes Bots',
      description: 'My robot designs for the High Stakes VEX competition season.',
      imageUrl: '/img/highstakesbot.jpg',
      link: '/projects/high-stakes',
    },
    {
      title: 'Notebook Progression',
      description: 'Progression of my engineering notebook over the years.',
      imageUrl: '/img/notebookcover.png',
      link: '/projects/notebook-progression',
    },
    {
      title: 'Over Under Bots',
      description: 'My robot designs for the Over Under VEX competition season.',
      imageUrl: '/img/overunderbot.jpg',
      link: '/projects/over-under',
    },
    {
      title: 'UCSD USV Design',
      description: 'UCSD Autonomous Surface Vehicle design project.',
      imageUrl: '/img/cosmosUSV.jpg',
      link: '/projects/USV-design',
    },
    {
      title: 'Custom Plastic Parts',
      description: 'Documentation of custom plastic parts I designed for VRC robots.',
      imageUrl: '/img/highstakesplrs.jpg',
      link: '/projects/custom-plastic',
    },
    {
      title: 'Engin26 Labs',
      description: 'Collection of my projects from Engin26 Labs.',
      imageUrl: '/img/deweydd.png',
      link: '/projects/E26-labs',
    },
  ];

  return (
    <>
      <div className={styles.fullBanner}>
        <h2 className={styles.fullBannerText}>
          <span className={styles.highlight}>Hi, I'm </span> Dominic Lopez
        </h2>
      </div>

      <div className="container">
        <div className={styles.projectGrid}>
          {projects.map((project, idx) => (
            <div key={idx} className={styles.projectCard}>
              <Link to={project.link}>
                <img
                  src={useBaseUrl(project.imageUrl)}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </Link>
              <h3>
                <Link to={project.link} className={styles.projectTitle}>
                  {project.title}
                </Link>
              </h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}





// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();

//   // 🧠 This array holds all your featured projects.
//   // Each project has a title, description, image, and link to its page.
// const projects = [
//   {
//     title: 'High Stakes Bot',
//     description: 'My robot designs for the High Stakes VEX competition season.',
//     imageUrl: '/img/highstakesbot.png',
//     link: '/blog/high-stakes',
//   },
//   {
//     title: 'Notebook Progression',
//     description: 'Progression of my engineering notebook over the years.',
//     imageUrl: '/img/notebookcover.png',
//     link: '/blog/notebook-progression',
//   },
//   {
//     title: 'Over Under Bot',
//     description: ' ',
//     imageUrl: '/img/overunderbot.jpg',
//     link: '/blog/over-under',
//   },
//   {
//     title: 'UCSD USV Design',
//     description: 'UCSD Autonomous Surface Vehicle design project.',
//     imageUrl: '/img/cosmosUSV.jpg',
//     link: '/blog/USV-design',
//   },
//   {
//     title: 'Custom Plastic Parts',
//     description: 'Documentation of custom plastic parts I designed for VRC robots.',
//     imageUrl: '/img/deweyd.png',
//     link: '/blog/custom-plastic',
//   },
//   {
//     title: 'Engin26 Labs',
//     description: 'Collection of my projects from Engin26 Labs.',
//     imageUrl: '/img/deweydd.png',
//     link: '/blog/E26-labs',
//   },
// ];

// }

// export default function ProjectGrid() {
//   return (
//     <>
//       <div className={styles.fullBanner}>
//         <h2 className={styles.fullBannerText}>
//           <span className={styles.highlight}>DOMINIC </span> LOPEZ
//         </h2>
//       </div>

//       <div className="container">
//         <div className={styles.projectGrid}>
//           {projects.map((project, idx) => (
//             <div key={idx} className={styles.projectCard}>
//               <Link to={project.link}>
//                 <img
//                   src={useBaseUrl(project.imageUrl)}
//                   alt={project.title}
//                   className={styles.projectImage}
//                 />
//               </Link>
//               <h3>
//                 <Link to={project.link} className={styles.projectTitle}>
//                   {project.title}
//                 </Link>
//               </h3>
//               <p className={styles.projectDescription}>{project.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={` ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }
