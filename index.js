#!/usr/bin/env node
const { execSync } = require("child_process");
const projectName = process.argv[2] || "MyLextProject";
const repoUrl = "git@github.com:yunus-acar/lext-demo.git";

// Create a new project
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

// Change directory to the project
process.chdir(projectName);

// Remove the .git folder
execSync("rm -rf .git", { stdio: "inherit" });

// Install the package
execSync("npm install", { stdio: "inherit" });

console.log(
  `Project created and lext package installed. Project directory: ${projectName}`
);
