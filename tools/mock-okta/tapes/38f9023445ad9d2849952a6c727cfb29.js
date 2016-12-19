var path = require("path");

/**
 * OPTIONS /api/v1/sessions/me
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * access-control-request-method: DELETE
 * origin: http://localhost:3000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * access-control-request-headers: content-type, x-okta-user-agent-extended
 * accept: * / *
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: 
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req4-dGKcxJSNmIHdMcItQMlg");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9993");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=D0AFD806775BCCFBD6F4284091B9B6FB; Path=/","DT=DI05mOprQB1RIu3TptdM4TkVA; Expires=Sat, 15-Dec-2018 22:10:25 GMT; Path=/","JSESSIONID=D0AFD806775BCCFBD6F4284091B9B6FB; Path=/"]);
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-methods", "GET, DELETE, OPTIONS");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-max-age", "3600");
  res.setHeader("access-control-allow-headers", "content-type, x-okta-user-agent-extended,Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("allow", "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:25 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
