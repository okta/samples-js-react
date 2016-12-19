var path = require("path");

/**
 * GET /oauth2/v1/authorize?client_id=zYVNoNIeSwul32vpNiOz&redirect_uri=http://localhost:3000/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&sessionToken=20111NzyckD7C72euXwwz0HPznFnbD0jgVtc1VkDW9VPWAHcg5rdbKK&scope=openid email profile
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
  res.setHeader("x-okta-request-id", "reqXAk5QVL9RKenlTLKAhn1ow");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9991");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["JSESSIONID=C10561D3A24E7398A3DB1D6ED2F03D47; Path=/","t=default; Path=/","DT=DI0_knVBtPdT4GW9qh_6ZbaWA; Expires=Sat, 15-Dec-2018 22:10:27 GMT; Path=/","sid=1024cg6k4VeRY6p9fDyhW4ssg; Path=/","proximity_d17ed69a3d8def90a2aa16e240e814bf=\"6FPQu/abqYu5I2ggXbSgQmmHyW1x0yXOgnIU824IxIGhYSbAXXsxqBv359u5SSSqwtVhmbfLV8DZ8YQkyGsNX1bB9Q0PPikk9G2LxGupvMf5FVBnDOqfHb5WuwYwMeXZicLDtBkVmwsffEVbcnIu/91yEX4t1ZwMhHCalZaGvsq1xe4WSMaxziIJoTUoIl7j\"; Version=1; Max-Age=2147483647; Expires=Wed, 03-Jan-2085 01:24:34 GMT; Path=/","JSESSIONID=C10561D3A24E7398A3DB1D6ED2F03D47; Path=/"]);
  res.setHeader("x-okta-backend", "K1104");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://localhost:3000/authorization-code/callback?code=dvF_ImB_RX8KJZhrzV29&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
