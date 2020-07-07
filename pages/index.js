import styles from "./index.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import { allPosts, allProjects } from "../utils";

export async function getStaticProps() {
  const posts = await allPosts();
  const projects = await allProjects();
  return {
    props: {
      posts: posts.slice(0, 3),
      projects,
    },
  };
}

export default function Home({ posts, projects }) {
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
        <h2 className={styles.sectionHeader}>Recent Posts</h2>
        <section className={styles.posts}>
          {posts.map((post) => (
            <div key={post.title} className={styles.post}>
              <Link href={"/" + post.path}>
                <a className={styles.postLink}>
                  <img src={"/" + post.image} />
                  <div className={styles.postFooter}>
                    <h4>{post.title}</h4>
                    <br />
                    <div>{post.date}</div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </section>
        <h2 className={styles.sectionHeader}>Projects</h2>
        <section className={styles.projects} ref={projects}>
          {projects.map((project) => (
            <div key={project.title} className={styles.project}>
              <div className={styles.thumbnailContainer}>
                <div className={styles.thumbnail}>
                  <iframe src={project.preview} frameBorder="0"></iframe>
                </div>
              </div>
              <a
                href={project.link}
                className={styles.projectLink}
                target="_blank"
              >
                <div className={styles.projectFooter}>
                  <h4>{project.title}</h4>
                  <ul className={styles.bullets}>
                    {project.bullets.map((bullet) => (
                      <li>
                        <small>{bullet}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}
