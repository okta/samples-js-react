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
 * cookie: t=default; DT=DI0Th486vMbQ6-VAmN3hP718g; sid=1022j3_yByeTEGmrFWx7pP7Mw; proximity_d4dd602c90af7d1337c3fa1f2b137fb9="n5QJ848PUZb8wwMH1iRd53XhbIqA+d+QI1WodbpSZiHRPsLhoRAwHXMFnrgmm/PVvxUDB/TdU2BnDXJTCCuGWI/WTC0dOdTf/8uVUXVr01QFH/TxptlLvr8ky4+egtHuY7pEYsypZpmT1baxO4vzLX5BqCZTJ0ygmRvEWL7qr0xZxFRhx5ArV2RbE60E0rHh"; JSESSIONID=98680AA08CE619D19152E783B9BDAF14
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqtNsIMqQbTo69IwsK3g_r0g");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1196");
  res.setHeader("x-rate-limit-reset", "1502406950");
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=98680AA08CE619D19152E783B9BDAF14; Path=/"]);
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:56 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
