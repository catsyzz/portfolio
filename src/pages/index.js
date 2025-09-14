import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  // 🧠 This array holds all your featured projects.
  // Each project has a title, description, image, and link to its page.
  const projects = [
    {
      title: 'DD-3',
      description: 'placeholder',
      imageUrl: '/img/deweydd.png', // 📸 Replace with your image path (place images in /static/img/)
      link: '/blog/2021/08/26/vex/high-stakes',    // 🔗 Replace with the actual page you want to link to
    },
    {
      title: 'The Pushbot',
      description: 'palceholder',
      imageUrl: '/img/deweydd.png',
      link: '/projects/pushbot',
    },
    {
      title: 'placeholder',
      description: 'placeholder.',
      imageUrl: '/img/deweydd.png',
      link: '/projects/supernova-awards',
    },
    {
      title: 'placeholder',
      description: 'placeholder',
      imageUrl: '/img/deweydd.png',
      link: '/projects/adaptive-pid',
    },
    {
      title: 'placeholder',
      description: 'placeholder',
      imageUrl: '/img/deweydd.png',
      link: '/projects/ez-template',
    },
    {
      title: 'placeholder',
      description: 'placeholder',
      imageUrl: '/img/deweydd.png',
      link: '/projects/pure-pursuit',
    },
  ];

return (
  <>
   
    {/* 🚩 Full-width banner section */}
    <div className={styles.fullBanner}>
      <h2 className={styles.fullBannerText}>
        <span className={styles.highlight}>DEWEY</span> ROBOTICS
      </h2>
    </div>

    {/* 🧱 Project showcase grid */}
    <div className="container">
      <div className={styles.projectGrid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.projectCard}>
            <Link to={project.link}>
              <img
                src={project.imageUrl}
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={` ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

