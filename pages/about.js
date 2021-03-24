import React from "react";
import Layout from "../components/Layout";
import styles from "./about.module.css";

const About = () => (
  <Layout title="About Me">
    <section className={styles.about}>
      <h1>About me</h1>
      <p>I'm a full stack engineer from Charlotte, NC</p>
      <p>
        I devloped my interest for programming when taking an offhand MatLab
        course at UNC Chapel Hill in 2012, and I've been coding ever since. My
        first love was Ruby on Rails, and my primary focus is still full stack
        work. I enjoy being able to trace the data all the way from the database
        structure through to the user experience.
      </p>
      <p>
        Since you asked, here are some technologies I have worked with in a
        production environment: Ruby on Rails, React, React Native, Vue, Node,
        GraphQL, Postgres, AWS, Docker, Kubernetes, Gitlab CI, Firebase,
        Serverless
      </p>
      <p>
        I'm a very collaborative worker. I love working on teams that
        communicate early and often so that everyone's voice can be heard.
      </p>
      <p>
        Also if there is a ping pong table at your working space I will work
        tirelessly until I conquer the office.
      </p>
    </section>
  </Layout>
);

export default About;
