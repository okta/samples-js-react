var path = require("path");

/**
 * GET /oauth2/v1/authorize/redirect?okta_key=8bvEcTRtJDuDx8zG1deaIePbIDNBauZFGX5jz5Xl7UE
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: DT=DI0Kza2bFBrQpykuI_5e6JA4Q; t=default; sid=1022yepL_neRpyj0bbdArOSEw; proximity_f6a75e9d0f383e46ca776024464537b6="AOPvYRM59+6Y3H13no7dYD2c9oh0cExfNKHH4tFeqZpciy45pYNiu3c/gJ+v5LLKP5nh/46S4+gPKXPSztaSzq6rKC+sFv8Sq7xy+gRte6hFayQIP/i/i6BG1OFS0yuYMfhlEeBn+bA4Y6dGsr57izDqDzzMfP4tUaXnCrLDNEZzdhad99prchisfWlQZP5z"; JSESSIONID=93B6B237A5286CDC60743BEB0A0720D0
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 302;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqAj1y8_zqQm-9CUdnVdYIbQ");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9996");
  res.setHeader("x-rate-limit-reset", "1502406948");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("set-cookie", ["t=default; Path=/","sid=1022yepL_neRpyj0bbdArOSEw;Version=1;Path=/;HttpOnly","proximity_f6a75e9d0f383e46ca776024464537b6=\"AOPvYRM59+6Y3H13no7dYD2c9oh0cExfNKHH4tFeqZpciy45pYNiu3c/gJ+v5LLKP5nh/46S4+gPKXPSztaSzq6rKC+sFv8Sq7xy+gRte6hFayQIP/i/i6BG1OFS0yuYMfhlEeBn+bA4Y6dGsr57izDqDzzMfP4tUaXnCrLDNEZzdhad99prchisfWlQZP5z\"; Version=1; Max-Age=31536000; Expires=Fri, 10-Aug-2018 23:14:51 GMT; Path=/","JSESSIONID=93B6B237A5286CDC60743BEB0A0720D0; Path=/"]);
  res.setHeader("location", "http://localhost:3000/authorization-code/callback?code=fNs58jXbaKtce5SLLD5Q&state=STATE");
  res.setHeader("content-language", "en");
  res.setHeader("content-length", "0");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:51 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.end();

  return __filename;
};
