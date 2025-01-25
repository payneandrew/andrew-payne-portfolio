import { Metadata } from "next";
import Container from "../components/blog/container";
import { HeroPost } from "../components/blog/hero-post";
import { Intro } from "../components/blog/intro";
import { MoreStories } from "../components/blog/more-stories";
import { getAllPosts } from "../lib/api";

export const metadata: Metadata = {
  title: "Blog | Andrew Payne",
  description:
    "Explore Andrew Payne's blog for insights on software development and his other interests.",
};

export default function Blog() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
