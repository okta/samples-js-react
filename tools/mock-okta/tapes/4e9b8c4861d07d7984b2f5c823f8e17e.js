var path = require("path");

/**
 * DELETE /api/v1/sessions/me
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * accept: application/json
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * origin: http://localhost:8080
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: DT=DI0DOJeC-9dRv29AYds6vJ2kA; t=default; sid=102VT_a3f87RW-AtKQk5JA5og; proximity_eacbc3af27d509da295f0332bb4a3144=jiQ3LpL2GJbL3qOlU3+vcOxnuZwKoggulZp623FxfjDH1QhA999hZKv6nyJgUoy+2WGYCo9piGwywE1pawSkoWeWe+ZZ9R94cklzwDRzKMqb5ywSU3hlsJCdJfH2If70rvjV7qVAETruYoEGvLlATnGdwvx2sezlCGYCRriWeQ1JhcA39ZdLnKDT4Ut815eI; JSESSIONID=F1A7914A8C8AEAE83D406039F3C4C74D
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 204;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqv5HRwpIoS5u7DLswj3EV6w");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1198");
  res.setHeader("x-rate-limit-reset", "1508956392");
  res.setHeader("access-control-allow-origin", "http://localhost:8080");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("set-cookie", ["JSESSIONID=F1A7914A8C8AEAE83D406039F3C4C74D; Path=/"]);
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:23 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
