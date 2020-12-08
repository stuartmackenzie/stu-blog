/**
 * yarn gen:c <component-name>
 * yarn gen:c container
 */
const path = require("path");
const fs = require("fs-extra");

const main = async () => {
  const result = { js: null, style: null };
  const fileDirectory = path.join(process.cwd(), "components");

  const args = process.argv;
  if (args.length < 3)
    throw Error("Please provide a name for the component to generate");

  let name = args[2];
  name = name.charAt(0).toUpperCase() + name.slice(1);

  const jsPath = path.join(fileDirectory, name, `${name}.js`);
  const stylePath = path.join(fileDirectory, name, `${name}.module.sass`);

  try {
    await fs.access(jsPath);
  } catch (err) {
    const jsData = componentTemplate({ name });
    await fs.outputFile(jsPath, jsData);
    result.js = jsPath;
  }

  try {
    await fs.access(stylePath);
  } catch (err) {
    const styleData = styleTemplate({ name });
    await fs.outputFile(stylePath, styleData);
    result.style = stylePath;
  }

  return result;
};

const componentTemplate = ({ name = "" }) => {
  const nameL = name.toLowerCase();
  return `import styles from "./${name}.module.sass";
  
export default function ${name}({ }) {
  return (
    <div className={styles.${nameL}}>
      <div></div>
    </div>
  );
}`;
};

const styleTemplate = ({ name = "" }) => {
  const nameL = name.toLowerCase();
  return `.${nameL}
  position: relative`;
};

main()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
