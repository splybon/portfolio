import matter from "gray-matter";

export const allPosts = async () => {
  const content = await import(`./data/posts/${params.id}.md`);
  return matter(content.default);
};
