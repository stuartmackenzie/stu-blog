import { getPage } from "../../lib/cms";

import Page from "../../components/Page/Page";

export default function Projects({ page }) {
  return (
    <Page page={page}>
      <h1>Projects</h1>
    </Page>
  );
}

export async function getStaticProps() {
  const page = await getPage("projects");
  return {
    props: {
      page
    }
  };
}
