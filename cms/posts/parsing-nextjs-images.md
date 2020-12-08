---
date: "2020-12-03"
title: "Parsing NextJS images from markdown"
text: "NextJS suggests to use the remark library for parsing markdown, however, it simply is not good enough. If you want to convert markdown content into componts, react-markdown is the better approach. I'll show you why."
---

Trying to load the image below.

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
