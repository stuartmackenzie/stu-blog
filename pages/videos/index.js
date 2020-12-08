import { getPage } from "../../lib/cms";

import Page from "../../components/Page/Page";

export default function Videos({ page }) {
  return (
    <Page page={page}>
      <h1>Videos</h1>
    </Page>
  );
}

export async function getStaticProps() {
  const page = await getPage("videos");
  return {
    props: {
      page
    }
  };
}
