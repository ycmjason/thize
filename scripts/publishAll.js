#!/usr/bin/env node
const package = require('../package.json');
const aliases = package.aliases;

const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

const myExecSync = (cmd) => {
  try {
    execSync(cmd, {
      cwd: join(__dirname, '..'),
      stdio: 'inherit',
    });
  } catch (e) {
    console.error('Something wrong when running `' + cmd + '`');
  }
};

myExecSync('npm publish');

const writePackage = (package) => writeFileSync(
  join(__dirname, '../package.json'),
  JSON.stringify(package)
);

aliases.forEach(a => {
  writePackage({
    ...package,
    name: a,
  });

  myExecSync('npm publish');
});

myExecSync('git checkout package.json');
