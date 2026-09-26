import { FiBookOpen, FiAward, FiBarChart2, FiCode, FiShield, FiTarget } from "react-icons/fi";
import { certifications } from "@/components/data";
import styles from "./CertificationDetails.module.css";

const categories = [
  ["Marketing", FiTarget], ["Marketing", FiTarget],
  ["Analytics", FiBarChart2], ["Analytics", FiBarChart2],
  ["Cyber security", FiShield], ["Marketing", FiAward],
  ["Development", FiCode], ["Development", FiCode],
];

export default function CertificationDetails() {
  const [degree, institution] = certifications[0].split(" — ");

  return (
    <div className={styles.layout}>
      <article className={styles.education}>
        <div className={styles.educationTop}>
          <span className={styles.educationIcon}><FiBookOpen aria-hidden="true" /></span>
          <span className={styles.educationLabel}>Education</span>
        </div>
        <div>
          <p className={styles.eyebrow}>Academic foundation</p>
          <h3>{degree}</h3>
          <p className={styles.institution}>{institution}</p>
        </div>
        <div className={styles.educationFooter}>
          <span className={styles.educationLine} />
          <span>Computer Science &amp; Engineering</span>
        </div>
      </article>

      <div className={styles.training}>
        <div className={styles.trainingHeading}>
          <h3>Certifications &amp; training</h3>
          <span>{certifications.length - 1} courses &amp; programs</span>
        </div>
        <ul className={styles.grid}>
          {certifications.slice(1).map((item, index) => {
            const [title, provider] = item.split(" — ");
            const [category, Icon] = categories[index] ?? ["Training", FiAward];
            return (
              <li key={item} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}><Icon aria-hidden="true" /></span>
                  <span className={styles.category}>{category}</span>
                </div>
                <h4>{title}</h4>
                {provider && <p className={styles.provider}>{provider}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
