---
date: "2020-12-07"
title: "Netflix clone using React Native"
text: "To learn a new library, framework, or language, it is often useful to clone an existing app. I'll guide you through the steps of cloning Netflix in order to learn the basics of React Native."
---

To learn a new library, framework, or language, it is often useful to clone an existing app. I'll guide you through the steps of cloning Netflix in order to learn the basics of React Native.

![NextJS logo](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/440px-Nextjs-logo.svg.png "NextJS Logo")

You will want to use the next/image component to do this and it's not very easy using remark. This is where react-markdown comes to the rescue.

Firstly, install react-markdown using your favorite package manager:

```bash
# npm
npm install react-markdown
# yarn
yarn add react-markdown
```

Once installed, you can now parse the markdown content and pass chunks to your components:

```js
import rmd from "react-markdown";

const parseContent = (content) => {
  return {
    something: "here"
  };
};
```
