---
date: "2020-12-06"
title: "Rome Project Overview"
text: "I breadown the reasoning behind the Rome Project brought to you buy the creator of Babel and Yarn."
---

I breadown the reasoning behind the Rome Project brought to you buy the creator of Babel and Yarn.

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
