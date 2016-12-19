var path = require("path");

/**
 * POST /api/v1/authn
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * content-length: 120
 * accept: application/json
 * origin: http://localhost:3000
 * x-okta-xsrftoken: 
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqEVP2RuUTSdq5BHCCF_W4uQ");
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1197");
  res.setHeader("x-rate-limit-reset", "1481839884");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=8A3942F864E1E9C558CEA849FDEB12F6; Path=/","DT=DI0y-dQdKO1SEG4uRVNYou4Vw; Expires=Sat, 15-Dec-2018 22:10:27 GMT; Path=/"]);
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:26 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHBpcmVzQXQiOiIyMDE2LTEyLTE2VDAwOjEwOjI3LjAwMFoiLCJzdGF0dXMiOiJTVUNDRVNTIiwic2Vzc2lvblRva2VuIjoiMjAxMTFOenlja0Q3QzcyZXVYd3d6MEhQem5GbmJEMGpnVnRjMVZrRFc5VlBXQUhjZzVyZGJLSyIsIl9lbWJlZGRlZCI6eyJ1c2VyIjp7ImlkIjoiMDB1bGd4TzcwUG9PVEZrYkEwZzMiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE2LTEyLTA1VDAwOjMzOjA3LjAwMFoiLCJwcm9maWxlIjp7ImxvZ2luIjoiam9obkBhY21lLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkFkYW1zIiwibG9jYWxlIjoiZW4iLCJ0aW1lWm9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMifX19fQ==", "base64"));
  res.end();

  return __filename;
};
