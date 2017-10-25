var path = require("path");

/**
 * POST /oauth2/default/v1/token?grant_type=authorization_code&code=khYcMWOzl7wKJo_SJPHN&redirect_uri=http://localhost:8080/authorization-code/callback
 *
 * authorization: Basic MG9hc2NxbWRDYndtUGJzUmwwZzM6SWZndkk2RlJhYi1qSzE4T3ZCX1B6MUI2NzI4TXdtVEVEQTRPU05vSg==
 * content-type: application/x-www-form-urlencoded
 * host: rain.okta1.com:1802
 * accept: application/json
 * content-length: 0
 * connection: close
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept-language: en-US
 * accept-encoding: gzip
 * cookie: 
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req3t0xtD6aRoS3G9QUumbPhg");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=A5EF4A6BE3C46B787C2BF75C142F9AB8; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9995");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:13 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWtSak5IVnhNREE1ZVVweU1ISXdSMHQwY0hsSU5UZ3RkRzVmUWxRMVNIaFBNa1pDVW10SVdHNXZaRkVpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTGtVNFJVbDROVU4yWjA1NE16ZzJPVzh3V1MxSWFEQklTa2RIVW5wTVlWSlRjWFpmWDBaaVJGWjNTa0VpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZaR1ZtWVhWc2RDSXNJbUYxWkNJNkltRndhVG92TDJSbFptRjFiSFFpTENKcFlYUWlPakUxTURnNU5UWXpNek1zSW1WNGNDSTZNVFV3T0RrMU9Ua3pNeXdpWTJsa0lqb2lNRzloYzJOeGJXUkRZbmR0VUdKelVtd3daek1pTENKMWFXUWlPaUl3TUhWelozbzNNVWhqUzNsMlFVZElSakJuTXlJc0luTmpjQ0k2V3lKdmNHVnVhV1FpTENKbGJXRnBiQ0pkTENKemRXSWlPaUpuWlc5eVoyVkFZV050WlM1amIyMGlmUS5YX3N2d1VkQWQ0anZ0dURhVUNPSDVMN2NpU3Y0RFdiZ0sxeExWU2luQ3V1QlpfYlNSVVZfUDY1c1ZZZXRldzdyeGJXRXJHWnRvQjU2STJydFlmd182d1pKd2M5UHVySnNOVjlIWWJ2QXZGTS1hNnUwOHBQdV9panVhSVBYREp4bUg1OGw1ZDFlRVFnUDYybjZzaVhBX1RnN1JTZU8yWGdsM0VxTjhSQVFMLTVpRUpaUnhLSVhpdElURlhrYV8xTEdOMmt3TldtcGRVVnlVZ3NQUkFRSzBhUkxUSUYxck0yMUl3QXRWUXNON3UyZmNtb21PNGpPeXVjWXl0MmxvR3U0c0gzUzMyTFJvLWFkMzIzWnV5RmhQano0LVBfa2FJc0xXZ0g5RElseTREX0xVSW1yUEpmalVadW1VdDdUcTlsSkhsNUNfNGd3NjFVY29kcDRPN2J1LXciLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJlc19pbiI6MzYwMCwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJpZF90b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJa1JqTkhWeE1EQTVlVXB5TUhJd1IwdDBjSGxJTlRndGRHNWZRbFExU0hoUE1rWkNVbXRJV0c1dlpGRWlmUS5leUp6ZFdJaU9pSXdNSFZ6WjNvM01VaGpTM2wyUVVkSVJqQm5NeUlzSW1WdFlXbHNJam9pWjJWdmNtZGxRR0ZqYldVdVkyOXRJaXdpZG1WeUlqb3hMQ0pwYzNNaU9pSm9kSFJ3T2k4dmNtRnBiaTV2YTNSaE1TNWpiMjA2TVRnd01pOXZZWFYwYURJdlpHVm1ZWFZzZENJc0ltRjFaQ0k2SWpCdllYTmpjVzFrUTJKM2JWQmljMUpzTUdjeklpd2lhV0YwSWpveE5UQTRPVFUyTXpNekxDSmxlSEFpT2pFMU1EZzVOVGs1TXpNc0ltcDBhU0k2SWtsRUxrZzVNMGR6VldNM04zTkpTVVJKVlVGRWNtVkRVMDlJVXpGVWNsQlNaM05CV2pOSE5UQlVia0Z6TTJNaUxDSmhiWElpT2xzaWNIZGtJbDBzSW1sa2NDSTZJakF3YjI5bGRuVjNZVFpIYkdsQ2JVOTRNR2N6SWl3aWJtOXVZMlVpT2lKT1QwNURSU0lzSW1GMWRHaGZkR2x0WlNJNk1UVXdPRGsxTmpNek1pd2lZWFJmYUdGemFDSTZJbGRQTjIxTFUyaDFiSFJHUjB0cVJYQTVNbEZuWDFFaWZRLlVBQWxaQVZsOWJBUlQ4TmpjVWx6WW1qcTJDTHlqN2hJQ1Q3SHN2NGhNcVQ5ajRWaWFmeEFTVEwzN3Jiem1wck82THM3cDhfNWE0XzBDZ0RmLWZDcG1ZT2NGa0dPcjNUaFdKOGpxdXFVTEZTQVZjNmVVX0xFNlFkb0tNemZDV1RwN25RUFJqLWtjMlNIMG80U2ZyMU1uYm13ZVBVZVNNMkV6OW85VHRqVmVuR2l3Z3FRTkhhYmxIamdVbS1BRkhMTXM0ZkhsNFJTeUFzcGhLMThVUGpXYnlRUmJ3RlVoRER1RWJra1BubWkyTERLVlIweThSWVI4dGE0azlrWGFMSlBpa21HTGd1UHc5eUVjckNiNkItamJobkJ3LXVycVM4Um95QmRZTVZxbU9SdUFrYmI1bUJOMzFXWnZWc25fcGp1NVotQmJjd18zOEpucEtSczhXNWYzQSJ9", "base64"));
  res.end();

  return __filename;
};
