const { readFileSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const semver = require('semver');

for (const sampleName of ['custom-login', 'okta-hosted-login']) {
  const packageJson = JSON.parse(readFileSync(path.join(__dirname, `../${sampleName}/package.json`)));

  packageJson.dependencies = {
    ...packageJson.dependencies,
    ...updateVersions(packageJson.dependencies),
  };

  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    ...updateVersions(packageJson.devDependencies),
  };

  writeFileSync(path.join(__dirname, `../${sampleName}/package.json`), JSON.stringify(packageJson, null, 2));
}

function updateVersions(dependencyGroup) {
  return Object.keys(dependencyGroup).filter(is3PPackage).reduce((packageVersions, packageName) => {
    const currentVersion = dependencyGroup[packageName];
    const currentMajorVersion = new semver.Range('').parseRange(currentVersion)[0].semver.major;
    return {
      ...packageVersions,
      [packageName]: getLatestNonBreakingVersion(packageName, currentMajorVersion),
    };
  }, {});
}

function is3PPackage(packageName) {
  return !packageName.includes('@okta');
}

function getLatestNonBreakingVersion(packageName, currentMajorVersion) {
  try {
    const versions = JSON.parse(execSync(`npm show --json ${packageName}@${currentMajorVersion} version`));
    return Array.isArray(versions) ? versions.pop().split(' ').pop() : versions; // [packageName@4.0.0 '4.0.0', packageName@4.1.0 '4.1.0'] || 4.0.0
  } catch (err) {
    console.warn(`failed to get latest version for package ${packageName}@${currentMajorVersion}`);
  }
}
