import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import styles from "./Blog.module.css";

export async function getStaticPaths() {
  const posts = fs.readdirSync("./data/posts/");
  return {
    paths: posts.map((post) => `/blog/${post.replace(".md", "")}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const content = await import(`../../data/posts/${params.id}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

const PostTemplate = (props) => (
  <Layout title={props.frontmatter.title}>
    <article className={styles.blog}>
      <h1>{props.frontmatter.title}</h1>
      <img className={styles.img} src={"/" + props.frontmatter.image} />
      <div>{props.frontmatter.date}</div>
      <div>
        <ReactMarkdown source={props.markdownBody} />
      </div>
    </article>
  </Layout>
);

export default PostTemplate;
