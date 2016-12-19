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
 * cookie: DT=DI0L5Xl5vMSSO-UbFrul__KIg; t=default; sid=102DSZZxZx8TcW6iIMTwYPA9g; proximity_830330aec6d014b0519e86c291366f89="gql/bqRmKbsykoPNcivX/Pufo5bD3UzmVmzz5x6/8Ga0GTgprjoxwTvnnrtJYQRANwQdDAxdFn5txJNz4UOS7Rv1T0CNMpkTWspK7gzjEaryQUEjDGHsUZFqnLe0vN/1jJgSFrunXlDQZ36TdLpZPhEjSN30cFdv+WoJm5nC9iB39AM0bOErfXxQosPJwMvv"; JSESSIONID=E6BC6FB23F18B2DE47F87D8CA1313E89
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqL8byCfECSwWKcAUCpcHL2A");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9995");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("set-cookie", ["t=default; Path=/","sid=102DSZZxZx8TcW6iIMTwYPA9g; Path=/","JSESSIONID=E6BC6FB23F18B2DE47F87D8CA1313E89; Path=/"]);
  res.setHeader("location", "http://localhost:3000/authorization-code/callback?code=oM3wnJTZuTq2Kt2UEb_P&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:24 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
