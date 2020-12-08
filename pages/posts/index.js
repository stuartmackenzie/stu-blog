import { getPage, getShortPosts } from "../../lib/cms";

import Page from "../../components/Page/Page";
import Posts from "../../sections/Posts/Posts";

export default function PostsPage({ page, posts }) {
  return (
    <Page page={page}>
      <Posts items={posts} />
    </Page>
  );
}

export async function getStaticProps() {
  const page = await getPage("posts");
  const posts = await getShortPosts({ limit: 10 });
  return {
    props: {
      page,
      posts
    }
  };
}
