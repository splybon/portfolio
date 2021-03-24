import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { allPosts } from "../../utils";
import styles from "./index.module.css";

export async function getStaticProps() {
  const posts = await allPosts();
  return {
    props: {
      posts,
    },
  };
}

const PostIndex = ({ posts }) => (
  <Layout title="All Posts">
    <section className={styles.index}>
      <h1>All My Posts</h1>
      {posts.map((post) => (
        <div key={post.title}>
          <span>{post.date}</span> &nbsp;
          <Link href={"/" + post.path}>
            <a>
              <span>{post.title}</span>
            </a>
          </Link>
          <br />
          <br />
        </div>
      ))}
    </section>
  </Layout>
);

export default PostIndex;
