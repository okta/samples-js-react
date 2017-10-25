var path = require("path");

/**
 * GET /oauth2/default/v1/authorize?client_id=0oascqmdCbwmPbsRl0g3&redirect_uri=http://localhost:8080/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&sessionToken=20111j12qgR6lU1EeACrx_MCbKPA1XDXUe-qFP4GgdDQPu-l-8o69Ow&scope=openid email profile
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqd3v_e1FhR5mC-mQGzw6f6g");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9992");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("set-cookie", ["JSESSIONID=8BFED26279C8F38D78BB1C57B4F5BBD5; Path=/","t=default; Path=/","DT=DI07N2yI1d_SYy-HACS-Lfnvg; Expires=Fri, 25-Oct-2019 18:32:30 GMT; Path=/","sid=102teyyfkTxSD6wmNwbFh-tfA;Version=1;Path=/;HttpOnly","proximity_8135ea8b9502ea03c264410288a081d6=\"np09mo5CDYXZnGQfr/IY6EhTgU8IxZRpglBIs5cjrTjHnXbGP/1u+mQ81uRZgilIBxtev3/14kbrbp38OG8VPl2hkmkg3MNdgU9EIJwRGLpHI/gGemiAziHaBJ0yZlDSqFi0Hhbu6/bFScQbHPc6jsrl9UIbd2lbTFJCbMVweJOKLPLOH4yem/m56fMTVMwI\"; Version=1; Max-Age=31536000; Expires=Thu, 25-Oct-2018 18:32:30 GMT; Path=/","JSESSIONID=8BFED26279C8F38D78BB1C57B4F5BBD5; Path=/"]);
  res.setHeader("referrer-policy", "no-referrer");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://localhost:8080/authorization-code/callback?code=-H9eqDW-XL1RM4bavf6-&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:30 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
