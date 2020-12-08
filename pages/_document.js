import Document, { Html, Head, Main, NextScript } from "next/document";
import { getGAScriptSrc, getGAScript } from "../lib/cms";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src={getGAScriptSrc()} />
          <script dangerouslySetInnerHTML={{ __html: getGAScript() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
