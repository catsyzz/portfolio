import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './ProjectShowcase.module.css';
import CodeBlock from '@theme/CodeBlock';

function DropdownCode({ title, language, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.gridBlock}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <span className={styles.dropdownArrow}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className={styles.dropdownContent}>
          <CodeBlock language={language} className={styles.sectionText}>
            {children}
          </CodeBlock>
        </div>
      )}
    </div>
  );
}

export default function vexRobots() {
  return (
    <Layout title="Vex Robots Project">
      <main className={styles.pageWrapper}>
        <h1 className={styles.heading}>Vex Robots</h1>
        <p className={styles.bio}></p>

        {/* 📘 Summary Block */}
        <div className={styles.gridBlock}>
          <p className={styles.sectionText}>
            Some of the designs and code come from my time in VEX Robotics competitions. I participated in the VEX Robotics program from 2018 to 2024, competing in various regional and state competitions. Below are some of the CAD models and code snippets from the robots I helped design and build.
          </p>
        </div>

        {/* 🖼 Modelo Viewer */}
        <div className={styles.modeloWrapper}>
          <div className={styles.modeloContainer}>
            <iframe
              src="https://www.modelo.io/embedded/1978200423860047872?viewport=true&autoplay=true&autorotate=true&hideTools=true&showBIM=false&showBBoxSize=false&showKooRender=false&showSettings=false&showFullScreen=false&showLogo=false&showUploadModels=false&c_at0=-23.538842247558595&c_at1=121.10949225561524&c_at2=25.159453345703124&c_theta=-1.5734649108683605&c_phi=1.5393804002589986&c_dis=894.7856815552586"
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

        <div style={{ height: '2rem' }}></div>

        {/* 🧠 Code Snippets */}
        <DropdownCode title="ODOM.cpp — Live position updating function()" language="cpp">
{`void Odom::update_position(float ForwardTracker_position, float SidewaysTracker_position, float orientation_deg){
  float Forward_delta = ForwardTracker_position - this->ForwardTracker_position;
  float Sideways_delta = SidewaysTracker_position - this->SideWaysTracker_position;
  this->ForwardTracker_position = ForwardTracker_position;
  this->SideWaysTracker_position = SidewaysTracker_position;

  float orientation_rad = to_rad(orientation_deg);
  float prev_orientation_rad = to_rad(this->orientation_deg);
  float orientation_delta_rad = orientation_rad - prev_orientation_rad;
  this->orientation_deg = orientation_deg;

  float local_X_position, local_Y_position;
  if (orientation_delta_rad == 0) {
    local_X_position = Sideways_delta;
    local_Y_position = Forward_delta;
  } else {
    local_X_position = 2 * sin(orientation_delta_rad / 2) * ((Sideways_delta / orientation_delta_rad) + SidewaysTracker_center_distance);
    local_Y_position = 2 * sin(orientation_delta_rad / 2) * ((Forward_delta / orientation_delta_rad) + ForwardTracker_center_distance);
  }

  float local_polar_angle, local_polar_length;
  if (local_X_position == 0 && local_Y_position == 0){
    local_polar_angle = 0;
    local_polar_length = 0;
  } else {
    local_polar_angle = atan2(local_Y_position, local_X_position);
    local_polar_length = sqrt(pow(local_X_position, 2) + pow(local_Y_position, 2));
  }

  float global_polar_angle = local_polar_angle - prev_orientation_rad - (orientation_delta_rad / 2);
  float X_position_delta = local_polar_length * cos(global_polar_angle);
  float Y_position_delta = local_polar_length * sin(global_polar_angle);

  X_position += X_position_delta;
  Y_position += Y_position_delta;
}`}
        </DropdownCode>

        <DropdownCode title="PID.h — PID controller class header file" language="cpp">
{`#pragma once
#include "vex.h"

class PID {
public:
  float error = 0;
  float kp = 0;
  float ki = 0;
  float kd = 0;
  float starti = 0;
  float settle_error = 0;
  float settle_time = 0;
  float timeout = 0;
  float accumulated_error = 0;
  float previous_error = 0;
  float output = 0;
  float time_spent_settled = 0;
  float time_spent_running = 0;
  float update_period = 10;

  PID(float error, float kp, float ki, float kd, float starti);
  PID(float error, float kp, float ki, float kd, float starti, float settle_error, float settle_time, float timeout);
  PID(float error, float kp, float ki, float kd, float starti, float settle_error, float settle_time, float timeout, float update_period);

  float compute(float error);
  bool is_settled();
};`}
        </DropdownCode>

        {/* 📸 Photo Albums */}
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