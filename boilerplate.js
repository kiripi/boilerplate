// module require
const fs = require("fs");
const folderName = process.argv[2] || "newProject";

// making folder
fs.mkdirSync(folderName);
// making files
fs.writeFileSync(`${folderName}/index.html`, "");
fs.writeFileSync(`${folderName}/styles.css`, "");
fs.writeFileSync(`${folderName}/app.js`, "");
