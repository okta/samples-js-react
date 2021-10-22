const { series, src, dest, parallel } = require('gulp');
const clean = require('gulp-clean');
const fs = require('fs');
const shell = require('shelljs');

const cleanDir = dir => () => {
  return src(dir, { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
};

const cloneOktaReact = (done) => {
  shell.exec('git clone --single-branch --branch master https://github.com/okta/okta-react.git');
  done();
};

const copySample = sample => () => {
  return src(['*', '.*'].map(regex => `okta-react/generated/samples/${sample}/**/${regex}`))
    .pipe(dest(`${sample}/`));
};

const getPublishedModuleVersion = (module, cb) => {
  const stdout = shell.exec(`yarn info ${module} dist-tags --json`, { silent: true });
  const distTags = JSON.parse(stdout);
  const version = distTags.data.latest;
  console.log(`Last published ${module} version: `, version);
  cb && cb();
  return version;
};


const updateOktaReactVersion = sample => (done) => {
  const oktaReactVersion = getPublishedModuleVersion('@okta/okta-react');
  console.log(oktaReactVersion);
  const packageJSON = JSON.parse(fs.readFileSync(`./${sample}/package.json`));
  packageJSON.dependencies['@okta/okta-react'] = `^${oktaReactVersion}`;
  fs.writeFileSync(`./${sample}/package.json`, JSON.stringify(packageJSON, null, 2));
  console.log(packageJSON);
  done();
};

module.exports = {
  'pull-samples': series(
    parallel(
      cleanDir('okta-react'),
      cleanDir('custom-login'),
      cleanDir('okta-hosted-login')
    ),
    cloneOktaReact,
    parallel(
      copySample('okta-hosted-login'),
      copySample('custom-login')
    ),
    parallel(
      updateOktaReactVersion('okta-hosted-login'),
      updateOktaReactVersion('custom-login')
    ),
    cleanDir('okta-react')
  )
};
