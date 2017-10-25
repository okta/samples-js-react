var path = require("path");

/**
 * POST /api/v1/authn
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * content-length: 120
 * accept: application/json
 * x-okta-xsrftoken: 
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * origin: http://localhost:8080
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req2HN2JQFoRXORJErjSftr3g");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=A749472A6768095517519FC5A432A270; Path=/","DT=DI08Y3JSvv6RBKSPA5LpAYZuw; Expires=Fri, 25-Oct-2019 18:32:30 GMT; Path=/"]);
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1197");
  res.setHeader("x-rate-limit-reset", "1508956392");
  res.setHeader("access-control-allow-origin", "http://localhost:8080");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:30 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHBpcmVzQXQiOiIyMDE3LTEwLTI1VDE4OjM3OjMwLjAwMFoiLCJzdGF0dXMiOiJTVUNDRVNTIiwic2Vzc2lvblRva2VuIjoiMjAxMTFqMTJxZ1I2bFUxRWVBQ3J4X01DYktQQTFYRFhVZS1xRlA0R2dkRFFQdS1sLThvNjlPdyIsIl9lbWJlZGRlZCI6eyJ1c2VyIjp7ImlkIjoiMDB1c2lhVjN3bDNGOVg1N08wZzMiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE3LTEwLTI1VDE4OjExOjM2LjAwMFoiLCJwcm9maWxlIjp7ImxvZ2luIjoiam9obkBhY21lLmNvbSIsImZpcnN0TmFtZSI6ImpvaG4iLCJsYXN0TmFtZSI6ImpvaG4iLCJsb2NhbGUiOiJlbiIsInRpbWVab25lIjoiQW1lcmljYS9Mb3NfQW5nZWxlcyJ9fX19", "base64"));
  res.end();

  return __filename;
};
