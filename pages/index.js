import styles from "./index.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Scott Plybon">
      <div className={styles.home}>
        <h1 className={styles.title}>I'm Scott</h1>

        <p className={styles.description}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a. This site is built using{" "}
          <a href="https://reactjs.org/">React</a>,{" "}
          <a href="https://nextjs.org/">Next.js</a>,{" "}
          <a href="https://www.netlify.com/">Netlify</a>. And I like bears
        </p>
        <ul className={styles.socialList}>
          <li className={styles.linkedin}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/scott-plybon-0b923786"
              className={styles.socialLink}
            >
              <img src="/LinkedIn.svg" className={styles.socialImage} />
              LinkedIn
            </a>
          </li>
          <li className={styles.github}>
            <a
              href="https://github.com/splybon"
              target="_blank"
              className={styles.socialLink}
            >
              <img src="/Github.png" className={styles.socialImage} />
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
