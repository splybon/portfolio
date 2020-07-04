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
