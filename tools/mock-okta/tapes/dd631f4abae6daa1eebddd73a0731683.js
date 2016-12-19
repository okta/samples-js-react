var path = require("path");

/**
 * GET /oauth2/v1/authorize/redirect;jsessionid=DE91D8A5B95F99B29CAF187E262F232E?okta_key=7seCwWUbJj3W-LpKJkF3o2bMNPrmxbMrUCnlhse_v-o
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: t=default; DT=DI0AiqSdmTsRRWLJFiLSVLh9A; JSESSIONID=DE91D8A5B95F99B29CAF187E262F232E
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqa5vRtcoGS7iT4CD1pRs_lA");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9998");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/"]);
  res.setHeader("location", "http://rain.okta1.com:1802/login/login.htm?fromURI=%2Foauth2%2Fv1%2Fauthorize%2Fredirect%3Bjsessionid%3DDE91D8A5B95F99B29CAF187E262F232E%3Fokta_key%3D7seCwWUbJj3W-LpKJkF3o2bMNPrmxbMrUCnlhse_v-o");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:22 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
