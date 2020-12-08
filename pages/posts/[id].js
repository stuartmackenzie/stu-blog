import Head from "next/head";

import { getPage, getPostIds, getPostById } from "../../lib/cms";

import Page from "../../components/Page/Page";
import PostDetail from "../../components/PostDetail/PostDetail";

export default function Post({ page, post }) {
  const { title } = post;
  return (
    <Page page={page}>
      <Head>
        <title>{title}</title>
      </Head>
      <PostDetail item={post} />
    </Page>
  );
}

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = await getPostIds();
  return {
    paths,
    fallback: false
  };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
  const id = params.id;
  const page = await getPage("post");
  const post = await getPostById(id);
  return {
    props: {
      page,
      post
    }
  };
}
