var path = require("path");

/**
 * GET /login/getimage?username=george
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: * / *
 * x-requested-with: XMLHttpRequest
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * x-okta-xsrftoken: 
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: DT=DI0AiqSdmTsRRWLJFiLSVLh9A; t=default; JSESSIONID=DE91D8A5B95F99B29CAF187E262F232E
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqNFgoVJCtSSuUpDw42uiLrg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9997");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=DE91D8A5B95F99B29CAF187E262F232E; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("content-type", "application/json;charset=utf-8");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "57");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:24 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJyZXN1bHQiOiJzdWNjZXNzIiwicHdkSW1nIjoiL2ltZy9zZWN1cml0eS91bmtub3duLnBuZyJ9", "base64"));
  res.end();

  return __filename;
};
