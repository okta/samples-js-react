const { series, src, dest, parallel } = require('gulp');
const clean = require('gulp-clean');
const shell = require('shelljs');

const cleanDir = dir => () => {
  return src(dir, { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
}

const cloneOktaReact = (done) => {
  shell.exec('git clone --single-branch --branch master https://github.com/okta/okta-react.git');
  done();
}

const copySample = sample =>() => {
  return src(`okta-react/generated/samples/${sample}/**/*`)
    .pipe(dest(`${sample}/`));
}

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
    cleanDir('okta-react')
  )
};
