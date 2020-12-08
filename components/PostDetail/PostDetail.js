import cx from "classnames";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./PostDetail.module.sass";
import ustyles from "../../styles/utils.module.sass";
import { vscDarkPlus as hlTheme } from "../../node_modules/react-syntax-highlighter/dist/esm/styles/prism";

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_STYLES_PRISM.MD

import Date from "../Date/Date";

const renderers = {
  image: (image) => {
    return <Image src={image.src} alt={image.alt} height="200" width="355" />;
  },
  paragraph: (paragraph) => {
    const { node } = paragraph;
    const el = node.children[0];
    if (el.type === "image") {
      return (
        <div className={ustyles.mdImageWrap}>
          <Image src={el.url} alt={el.alt} height="200" width="355" />
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter language={language} children={value} style={hlTheme} />
    );
  }
};

export default function PostDetail({ item }) {
  const { title, text, date, content } = item;
  return (
    <article className={styles.article}>
      <h1 className={cx(styles.title, ustyles.gradientText)}>{title}</h1>
      <Date className={styles.date} text={date} />
      <div className={styles.content}>
        <ReactMarkdown
          className={ustyles.md}
          children={content}
          renderers={renderers}
        />
      </div>
    </article>
  );
}
