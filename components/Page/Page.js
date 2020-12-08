import { useState } from "react";
import Head from "next/head";
import styles from "./Page.module.sass";

import Nav from "../Nav/Nav";
import Container from "../Container/Container";

export default function Page({ page, children }) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.page}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{page.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="description" content={page.description} />
        <meta property="og:image" content={page.ogImage} />
        <meta name="og:title" content={page.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="shortcut icon"
          sizes="16x16 24x24 32x32 48x48 64x64"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
      </Head>
      <header className={styles.header}>
        <Container>
          <Nav page={page} open={open} onMenuClick={handleMenuClick} />
        </Container>
      </header>
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
