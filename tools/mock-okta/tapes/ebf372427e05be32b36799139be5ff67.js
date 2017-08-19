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
 * origin: http://localhost:3000
 * content-type: application/json
 * accept-encoding: gzip
 * accept-language: en-US
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqTQHJuN_jRE2AwptBFWiqCg");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=3C62FE49C7C98B26011795EB6CF7B278; Path=/","DT=DI0EHQm0Qj4R4Kjx-Jg7nja5g; Expires=Sat, 10-Aug-2019 23:14:55 GMT; Path=/"]);
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1197");
  res.setHeader("x-rate-limit-reset", "1502406950");
  res.setHeader("access-control-allow-origin", "http://localhost:3000");
  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "Content-Type");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:55 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJleHBpcmVzQXQiOiIyMDE3LTA4LTEwVDIzOjE5OjU1LjAwMFoiLCJzdGF0dXMiOiJTVUNDRVNTIiwic2Vzc2lvblRva2VuIjoiMjAxMTFwVUUyckdKSmZDMkRRZ1MybjRzVFRSVnJlNFRvejhXSS1DSU9PZld3V1FQT3FZQTlxUCIsIl9lbWJlZGRlZCI6eyJ1c2VyIjp7ImlkIjoiMDB1b28zSm5tU2F4RFl2aXgwZzMiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE3LTA4LTA5VDIyOjM5OjA4LjAwMFoiLCJwcm9maWxlIjp7ImxvZ2luIjoiam9obkBhY21lLmNvbSIsImZpcnN0TmFtZSI6IkpvaG4iLCJsYXN0TmFtZSI6IkFkYW1zIiwibG9jYWxlIjoiZW4iLCJ0aW1lWm9uZSI6IkFtZXJpY2EvTG9zX0FuZ2VsZXMifX19fQ==", "base64"));
  res.end();

  return __filename;
};
