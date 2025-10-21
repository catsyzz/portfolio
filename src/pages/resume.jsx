import React from 'react';
import Layout from '@theme/Layout';
import styles from './resume.module.css';

const experiences = [
  {
    title: 'Mechanical + Software Lead, CEO at 8301D Dewey',
    summary: 'Led engineering and branding for a competitive robotics team. Oversaw CAD, codebase, and team operations from 2015–2025.',
  },
  {
    title: 'Co-Founder & Mentor at EZ Robotics',
    summary: 'Built curriculum and mentored VEX teams in CAD, design, and strategy. Helped scale outreach and technical depth.',
  },
  {
    title: 'Curriculum Engineer & Program Lead at Qualcomm Inc.',
    summary: 'Designed inclusive STEM programs and led workshops for underserved students. Developed hands-on hardware kits and lesson plans.',
  },
  {
    title: 'Private Tutor — AP Math, History, and CS',
    summary: 'Tutored high school students in advanced coursework with a focus on conceptual clarity and exam strategy.',
  },
  {
    title: 'Integrated Sports Referee',
    summary: 'Facilitated inclusive sports events for students with disabilities, promoting teamwork and accessibility.',
  },
];

export default function ResumePage() {
  return (
    <Layout title="Resume">
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <h2>Experience Highlights</h2>
          <ul>
            {experiences.map((exp, index) => (
              <li key={index}>
                <strong>{exp.title}</strong>
                <p>{exp.summary}</p>
              </li>
            ))}
          </ul>
        </aside>
        <main className={styles.viewer}>
          <iframe
            src="/files/resume.pdf"
            title="Dom's Resume"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </main>
      </div>
    </Layout>
  );
}