const { series, src, dest, parallel } = require('gulp');
const clean = require('gulp-clean');
const shell = require('shelljs');

const cleanDir = dir => () => {
  return src(dir, { read: false, allowEmpty: true })
    .pipe(clean({ force: true }));
}

const cloneAuthJS = (done) => {
  shell.exec('git clone --single-branch --branch sw-generate-react-samples-OKTA-405811 https://github.com/okta/okta-auth-js.git');
  done();
}

const copySample = sample =>() => {
  return src(`okta-auth-js/generated/react/${sample}/**/*`)
    .pipe(dest(`${sample}/`));
}

module.exports = {
  default: series(
    parallel(
      cleanDir('okta-auth-js'),
      cleanDir('custom-login'),
      cleanDir('okta-hosted-login')
    ),
    cloneAuthJS,
    parallel(
      copySample('okta-hosted-login'),
      copySample('custom-login')
    ),
    cleanDir('okta-auth-js')
  )
};
