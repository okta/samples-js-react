var path = require("path");

/**
 * GET /oauth2/default/v1/authorize?client_id=0oascqmdCbwmPbsRl0g3&redirect_uri=http://localhost:8080/authorization-code/callback&response_type=code&response_mode=query&state=STATE&nonce=NONCE&scope=openid email
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
  res.setHeader("x-okta-request-id", "reqpheoD-8rTUuMHOCcT-XQ1w");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=32318D9749E47BC65D54C4524953822B; Path=/","t=default; Path=/","DT=DI0EkmlTG6BRuCK-KmuzEW1tw; Expires=Fri, 25-Oct-2019 18:32:07 GMT; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=32318D9749E47BC65D54C4524953822B; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9999");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("referrer-policy", "no-referrer");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("location", "http://rain.okta1.com:1802/login/login.htm;jsessionid=32318D9749E47BC65D54C4524953822B?fromURI=%2Foauth2%2Fv1%2Fauthorize%2Fredirect%3Fokta_key%3DL9cmd_0MZffKVFtelguYPqGDDWjQuO1d-OMrwpoqmHo");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:07 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
