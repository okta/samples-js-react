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
 * cookie: t=default; DT=DI0_knVBtPdT4GW9qh_6ZbaWA; sid=1024cg6k4VeRY6p9fDyhW4ssg; proximity_d17ed69a3d8def90a2aa16e240e814bf="6FPQu/abqYu5I2ggXbSgQmmHyW1x0yXOgnIU824IxIGhYSbAXXsxqBv359u5SSSqwtVhmbfLV8DZ8YQkyGsNX1bB9Q0PPikk9G2LxGupvMf5FVBnDOqfHb5WuwYwMeXZicLDtBkVmwsffEVbcnIu/91yEX4t1ZwMhHCalZaGvsq1xe4WSMaxziIJoTUoIl7j"; JSESSIONID=C10561D3A24E7398A3DB1D6ED2F03D47
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req2XxqeToYQv657vQHk87kNg");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1196");
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
  res.setHeader("set-cookie", ["JSESSIONID=C10561D3A24E7398A3DB1D6ED2F03D47; Path=/"]);
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:28 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
