import styles from './page.module.css';

export default function ResumeAnalyzer(params) {
  return (
    <div className={styles.analyzerPage}>
      <div className={styles.jdAnalyzer}>
        <h1>Analyze Your Resume</h1>
        <textarea className={styles.jobDescriptionArea} placeholder="Enter the job description" />
        <button type="submit">Analyze</button>
        <ol></ol>
      </div>

      <div className={styles.resumeAnalyzer}>
        <p>Resume</p>
      </div>
    </div>
  );
}
