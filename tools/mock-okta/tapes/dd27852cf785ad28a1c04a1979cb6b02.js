var path = require("path");

/**
 * DELETE /api/v1/sessions/me
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: application/json
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * origin: http://localhost:3000
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: DT=DI0Kza2bFBrQpykuI_5e6JA4Q; t=default; sid=1022yepL_neRpyj0bbdArOSEw; proximity_f6a75e9d0f383e46ca776024464537b6="AOPvYRM59+6Y3H13no7dYD2c9oh0cExfNKHH4tFeqZpciy45pYNiu3c/gJ+v5LLKP5nh/46S4+gPKXPSztaSzq6rKC+sFv8Sq7xy+gRte6hFayQIP/i/i6BG1OFS0yuYMfhlEeBn+bA4Y6dGsr57izDqDzzMfP4tUaXnCrLDNEZzdhad99prchisfWlQZP5z"; JSESSIONID=93B6B237A5286CDC60743BEB0A0720D0
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqXQC-wblnSL-OKlrijrOo_w");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1198");
  res.setHeader("x-rate-limit-reset", "1502406950");
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=93B6B237A5286CDC60743BEB0A0720D0; Path=/"]);
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:53 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
