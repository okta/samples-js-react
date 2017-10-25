var path = require("path");

/**
 * GET /login/sessionCookieRedirect?checkAccountSetupComplete=true&token=20111TQ9Erz7lIMRqOph8NGPncHdNkkWFnugml0xKhC4n7Ll8IRx7pB&redirectUrl=http://127.0.0.1:7777/oauth2/v1/authorize/redirect?okta_key=L9cmd_0MZffKVFtelguYPqGDDWjQuO1d-OMrwpoqmHo
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: JSESSIONID=F1A7914A8C8AEAE83D406039F3C4C74D; DT=DI0DOJeC-9dRv29AYds6vJ2kA
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqJnmiN4LhQF69oagGt85URg");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=102VT_a3f87RW-AtKQk5JA5og;Version=1;Path=/;HttpOnly","proximity_eacbc3af27d509da295f0332bb4a3144=jiQ3LpL2GJbL3qOlU3+vcOxnuZwKoggulZp623FxfjDH1QhA999hZKv6nyJgUoy+2WGYCo9piGwywE1pawSkoWeWe+ZZ9R94cklzwDRzKMqb5ywSU3hlsJCdJfH2If70rvjV7qVAETruYoEGvLlATnGdwvx2sezlCGYCRriWeQ1JhcA39ZdLnKDT4Ut815eI; Expires=Thu, 25-Oct-2018 18:32:13 GMT; Path=/","JSESSIONID=F1A7914A8C8AEAE83D406039F3C4C74D; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9997");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("location", "http://127.0.0.1:7777/oauth2/v1/authorize/redirect?okta_key=L9cmd_0MZffKVFtelguYPqGDDWjQuO1d-OMrwpoqmHo");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:13 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
