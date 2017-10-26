var path = require("path");

/**
 * DELETE /api/v1/sessions/me
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: application/json
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * origin: http://localhost:8080
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: t=default; DT=DI07N2yI1d_SYy-HACS-Lfnvg; sid=102teyyfkTxSD6wmNwbFh-tfA; proximity_8135ea8b9502ea03c264410288a081d6="np09mo5CDYXZnGQfr/IY6EhTgU8IxZRpglBIs5cjrTjHnXbGP/1u+mQ81uRZgilIBxtev3/14kbrbp38OG8VPl2hkmkg3MNdgU9EIJwRGLpHI/gGemiAziHaBJ0yZlDSqFi0Hhbu6/bFScQbHPc6jsrl9UIbd2lbTFJCbMVweJOKLPLOH4yem/m56fMTVMwI"; JSESSIONID=8BFED26279C8F38D78BB1C57B4F5BBD5
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req4oKNiIMYR3W6tIeA0o32EA");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1196");
  res.setHeader("x-rate-limit-reset", "1508956392");
  res.setHeader("access-control-allow-origin", "http://localhost:8080");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=8BFED26279C8F38D78BB1C57B4F5BBD5; Path=/"]);
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:34 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
