import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/JobListings.module.css';

function JobListings() {
  const { t } = useTranslation();
  const jobs = [
    { title: 'Develop a Website', tt: 15, skills: 'Web Development' },
    { title: 'Graphic Design', tt: 5, skills: 'Design' },
    { title: 'Smart Contract Audit', tt: 20, skills: 'Blockchain' },
  ];

  return (
    <section id="jobs" className={styles.section}>
      <h2>{t('jobListings.title')}</h2>
      <div className={styles.grid}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.card}>
            <h3>{job.title}</h3>
            <p>{job.tt} TT - {job.skills}</p>
            <button className={styles.cta}>{t('jobListings.apply')}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JobListings;