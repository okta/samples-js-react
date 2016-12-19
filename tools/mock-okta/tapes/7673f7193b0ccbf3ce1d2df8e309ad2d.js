var path = require("path");

/**
 * GET /oauth2/v1/authorize?client_id=zYVNoNIeSwul32vpNiOz&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&scope=openid email
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
  res.setHeader("x-okta-request-id", "reqSoMQFzpIRsmBhO297WPvQg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9999");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=DE91D8A5B95F99B29CAF187E262F232E; Path=/","t=default; Path=/","DT=DI0AiqSdmTsRRWLJFiLSVLh9A; Expires=Sat, 15-Dec-2018 22:10:22 GMT; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=DE91D8A5B95F99B29CAF187E262F232E; Path=/"]);
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://rain.okta1.com:1802/oauth2/v1/authorize/redirect;jsessionid=DE91D8A5B95F99B29CAF187E262F232E?okta_key=7seCwWUbJj3W-LpKJkF3o2bMNPrmxbMrUCnlhse_v-o");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:22 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
