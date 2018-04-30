#!/usr/bin/env node
const package = require('../package.json');
const aliases = package.aliases;

const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

const myExecSync = (cmd) => execSync(cmd, {
  cwd: join(__dirname, '..'),
  stdio: 'inherit',
});

myExecSync('npm publish');

const writePackage = (package) => writeFileSync(JSON.stringify(package));

aliases.forEach(a => {
  writePackage({
    ...package,
    name: a,
  });

  myExecSync('npm publish');
});

myEexecSync('git checkout package.json');
