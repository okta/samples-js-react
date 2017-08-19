var path = require("path");

/**
 * GET /oauth2/default/v1/authorize?client_id=0oaom8GeLzZeX7oYZ0g3&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&sessionToken=20111pUE2rGJJfC2DQgS2n4sTTRVre4Toz8WI-CIOOfWwWQPOqYA9qP&scope=openid email profile
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
  res.setHeader("x-okta-request-id", "reqQXMDoDszTBe1dpFz0AgkHA");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9992");
  res.setHeader("x-rate-limit-reset", "1502406948");
  res.setHeader("set-cookie", ["JSESSIONID=98680AA08CE619D19152E783B9BDAF14; Path=/","t=default; Path=/","DT=DI0Th486vMbQ6-VAmN3hP718g; Expires=Sat, 10-Aug-2019 23:14:55 GMT; Path=/","sid=1022j3_yByeTEGmrFWx7pP7Mw;Version=1;Path=/;HttpOnly","proximity_d4dd602c90af7d1337c3fa1f2b137fb9=\"n5QJ848PUZb8wwMH1iRd53XhbIqA+d+QI1WodbpSZiHRPsLhoRAwHXMFnrgmm/PVvxUDB/TdU2BnDXJTCCuGWI/WTC0dOdTf/8uVUXVr01QFH/TxptlLvr8ky4+egtHuY7pEYsypZpmT1baxO4vzLX5BqCZTJ0ygmRvEWL7qr0xZxFRhx5ArV2RbE60E0rHh\"; Version=1; Max-Age=31536000; Expires=Fri, 10-Aug-2018 23:14:55 GMT; Path=/","JSESSIONID=98680AA08CE619D19152E783B9BDAF14; Path=/"]);
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://localhost:3000/authorization-code/callback?code=VtPtP7Tpm4hQR1ivnqb0&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:55 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
