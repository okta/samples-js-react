var path = require("path");

/**
 * GET /login/getimage?username=george
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: * / *
 * x-okta-xsrftoken: 
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * x-requested-with: XMLHttpRequest
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: DT=DI0EkmlTG6BRuCK-KmuzEW1tw; t=default; JSESSIONID=32318D9749E47BC65D54C4524953822B
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqgkYAri2gSTmi6Dj9ozZ5QA");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=32318D9749E47BC65D54C4524953822B; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9998");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("content-type", "application/json;charset=utf-8");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "79");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:10 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJyZXN1bHQiOiJzdWNjZXNzIiwicHdkSW1nIjoiL2ltZy9zZWN1cml0eS91bmtub3duLnBuZyIsImltYWdlRGVzY3JpcHRpb24iOiIifQ==", "base64"));
  res.end();

  return __filename;
};
