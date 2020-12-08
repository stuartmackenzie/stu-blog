---
date: "2020-12-05"
title: "3D Periodic Table using Three JS"
text: "Three JS is a fun library to play with. I'll show you how to create a 3D Periodic Table using React."
---

Three JS is a fun library to play with. I'll show you how to create a 3D Periodic Table using React.

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
