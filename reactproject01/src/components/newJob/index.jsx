import JobCard from "../jobCard";
import styles from "./styles.module.css";

const jobs = [
  {
    category: "Finance",
    title: "Finance Manager in a large company",
    location: "Osaka, Japan",
    company: "Sony",
    logo: "src/assets/images/sonyLogoImage.svg",
    daysAgo: 3,
    color: "#5182FF",
  },
  {
    category: "Sales",
    title: "Sales Specialist",
    location: "Kyoto, Japan",
    company: "Facebook",
    logo: "src/assets/images/facebookLogoImage.svg",
    daysAgo: 7,
    color: "#FF51EE",
  },
  {
    category: "Support",
    title: "Call Center Operator",
    location: "Tokyo, Japan",
    company: "CocaCola",
    logo: "src/assets/images/colaLogoImage.svg",
    daysAgo: 1,
    color: "#58D94D",
  },
  {
    category: "Multimedia",
    title: "System Administrator",
    location: "Tokyo, Japan",
    company: "Sony",
    logo: "src/assets/images/sonyLogoImage.svg",
    daysAgo: 3,
    color: "#FF9051",
  },
  {
    category: "Design",
    title: "Interior Designer for studio in city center",
    location: "Yokohama, Japan",
    company: "Facebook",
    logo: "src/assets/images/facebookLogoImage.svg",
    daysAgo: 7,
    color: "#F84242",
  },
  {
    category: "Transport",
    title: "Long-distance truck driver",
    location: "Kobe, Japan",
    company: "CocaCola",
    logo: "src/assets/images/colaLogoImage.svg",
    daysAgo: 1,
    color: "#383838",
  },
];

function Jobs() {
  return (
    <section className={styles.jobsSection}>
      <div className={styles.header}>
        <h2>New Jobs</h2>
        <p>Find your dream job right now</p>
      </div>
      <div className={styles.grid}>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <button className={styles.allJobsBtn}>All Jobs</button>
    </section>
  );
}

export default Jobs;
