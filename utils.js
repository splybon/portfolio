import matter from "gray-matter";
import fs from "fs";

export const allPosts = async () => {
  const promArray = fs
    .readdirSync("./data/posts/")
    .map((post) => import(`./data/posts/${post}`));
  return await Promise.all(promArray).then((postFiles) =>
    postFiles
      .map((postFile) => matter(postFile.default).data)
      .sort((a, b) => new Date(b) - new Date(a))
  );
};

export const allProjects = async () => {
  const promArray = fs
    .readdirSync("./data/projects/")
    .map((project) => import(`./data/projects/${project}`));
  return await Promise.all(promArray).then((projectFiles) =>
    projectFiles
      .map((project) => matter(project.default).data)
      .sort((a, b) => a.title - b.title)
  );
};
