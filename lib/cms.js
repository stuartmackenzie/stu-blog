import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export const GA_TRACKING_ID = "G-PRP0HSEM1D";

/* Constants */

const cmsDirectory = path.join(process.cwd(), "cms");
const pagesDirectory = path.join(cmsDirectory, "pages");
const postsDirectory = path.join(cmsDirectory, "posts");

/* Helpers */

const getJson = async (filePath) => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const getMarkdown = async (src) => {
  const fullPath = path.join(cmsDirectory, src);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the content
  return {
    contentHtml,
    ...matterResult.data
  };
};

/* Site */

export async function getSite() {
  const filePath = path.join(cmsDirectory, "site.json");
  const result = await getJson(filePath);
  const { theme, md, fontSize, images } = result.ogImage;
  result.ogImage = `https://og-image.now.sh/${encodeURI(
    result.title
  )}.png?theme=${theme}&md=${md}&fontSize=${fontSize}&images=${encodeURI(
    images
  )}`;
  return result;
}

/* Google Analytics */

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

export function getGAScriptSrc() {
  return `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
}

export function getGAScript() {
  return `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}',{page_path: window.location.pathname,});`;
}

/* Pages */

export async function getPage(name) {
  const filePath = path.join(pagesDirectory, `${name}.json`);
  const site = await getSite();
  const page = await getJson(filePath);
  return Object.assign(site, page);
}

/* Posts */

export async function getPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}

export async function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const items = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    items.push({
      id,
      html: contentHtml,
      ...matterResult.data
    });
  }
  return items.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getShortPosts({ limit = 4 } = {}) {
  const fileNames = fs.readdirSync(postsDirectory);
  const items = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    items.push({
      id,
      ...matterResult.data
    });
  }
  const sorted = items.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  return sorted.slice(0, limit - 1);
}

export async function getPostById(id) {
  const fileName = `${id}.md`;
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  };
}
