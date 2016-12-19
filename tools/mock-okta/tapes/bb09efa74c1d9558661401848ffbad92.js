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
 * cookie: DT=DI0L5Xl5vMSSO-UbFrul__KIg; proximity_830330aec6d014b0519e86c291366f89="gql/bqRmKbsykoPNcivX/Pufo5bD3UzmVmzz5x6/8Ga0GTgprjoxwTvnnrtJYQRANwQdDAxdFn5txJNz4UOS7Rv1T0CNMpkTWspK7gzjEaryQUEjDGHsUZFqnLe0vN/1jJgSFrunXlDQZ36TdLpZPhEjSN30cFdv+WoJm5nC9iB39AM0bOErfXxQosPJwMvv"; t=default; sid=102DSZZxZx8TcW6iIMTwYPA9g; JSESSIONID=E6BC6FB23F18B2DE47F87D8CA1313E89
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqSnFNyetPT9mzA0Gwv7G5iA");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1198");
  res.setHeader("x-rate-limit-reset", "1481839884");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=E6BC6FB23F18B2DE47F87D8CA1313E89; Path=/"]);
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:25 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
