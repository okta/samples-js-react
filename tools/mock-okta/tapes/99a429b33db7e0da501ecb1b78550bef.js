var path = require("path");

/**
 * POST /oauth2/v1/token?grant_type=authorization_code&code=oM3wnJTZuTq2Kt2UEb_P&redirect_uri=http://localhost:3000/authorization-code/callback
 *
 * authorization: Basic ellWTm9OSWVTd3VsMzJ2cE5pT3o6OFV4UXFyZVp1NFdRQkstS0lxS1FJdHF2dHY1VWxXUmxxSTM2bDRzYg==
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
  res.setHeader("x-okta-request-id", "req-Uvi4k5DRnCFwHNEj20EPQ");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9994");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=F8EA38554E208703BD9465EE0F3E2020; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:24 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWxCbFdrRjZkemhIVkRrMVdFcHBaMkpWZUhaWGQxbHdhbGRmVTFCeFJIQkJOWEJzY0hSNFgzRTBhRGdpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTG5OVE4yWmtSVVZuYWtvemFYVTVhWGxEY0Y5c1pqRnhaREE1ZUhsTFdIRXhORk5yV1Y4emRYZ3RaRmtpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW1GMVpDSTZJbWgwZEhBNkx5OXlZV2x1TG05cmRHRXhMbU52YlRveE9EQXlJaXdpYzNWaUlqb2laMlZ2Y21kbFFHRmpiV1V1WTI5dElpd2lhV0YwSWpveE5EZ3hPRE01T0RJMExDSmxlSEFpT2pFME9ERTRORE0wTWpRc0ltTnBaQ0k2SW5wWlZrNXZUa2xsVTNkMWJETXlkbkJPYVU5Nklpd2lkV2xrSWpvaU1EQjFiR2QyZEdGdldqWlNXbFozVDBRd1p6TWlMQ0p6WTNBaU9sc2laVzFoYVd3aUxDSnZjR1Z1YVdRaVhYMC5kRkwteWtmS3JVTkRqaUxfVDVFUG14clFIQThRSTVYRi13Sklqc2Vlby1zbG1oWkJRbHZxOG5hNWlTSmhjeFJIbE93QjJuS2txX2JFeGVSYlZCNTgxYVFUNVozWVZYT0ZHWldaSHpoOURhRFJCQ25VTTEybnZFSU1ySEk4d1VhREZ4cUQ1WmRqMlBCMGlub3hSZkdWQkVMQ0pQcXh4a1VXN0pscjhrcHRKVnNoRlc3TzZaWENaME0wc24xUndlRnJrbU1IcVZvdnZKYmE5TzBQUXRuRjFIOWtIQ1NBYzNsNC1tZnZQQ1M3YUVIbVdQeEgtTmFFVWZIWi1Mb1NIcC1CdVg0SU5qWGt6bGFRQS12YTB6VTdJUEdPQ2dxRHlXemJ5eVBIQkdibjB4cnBkclRPZDJUVmVjdHJJUkpEZzFRWjc3cUtUb0l3aDFXeFZvY0MwYjNwQlEiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJlc19pbiI6MzYwMCwic2NvcGUiOiJlbWFpbCBvcGVuaWQiLCJpZF90b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbGhuVFdwbE1HTXpjRWd6TFVrM2RuUnFPWEJhY0RkUVRrSlVlVFpHYWxWTldsaGFaVzV3VDNnM1ZUZ2lmUS5leUp6ZFdJaU9pSXdNSFZzWjNaMFlXOWFObEphVm5kUFJEQm5NeUlzSW1WdFlXbHNJam9pWjJWdmNtZGxRR0ZqYldVdVkyOXRJaXdpZG1WeUlqb3hMQ0pwYzNNaU9pSm9kSFJ3T2k4dmNtRnBiaTV2YTNSaE1TNWpiMjA2TVRnd01pSXNJbUYxWkNJNklucFpWazV2VGtsbFUzZDFiRE15ZG5CT2FVOTZJaXdpYVdGMElqb3hORGd4T0RNNU9ESTBMQ0psZUhBaU9qRTBPREU0TkRNME1qUXNJbXAwYVNJNklrbEVMblExUjA4MlNYSjFTSFZtWjNnMVUzbE9XazlPVm0xUVMySm1OM0JtWDJ0SGVHZFRNak10TUZoSU0wMGlMQ0poYlhJaU9sc2ljSGRrSWwwc0ltbGtjQ0k2SWpBd2IydzJhVk5ZUVVJMlRFSTFXbWx4TUdjeklpd2libTl1WTJVaU9pSk9UMDVEUlNJc0ltRjFkR2hmZEdsdFpTSTZNVFE0TVRnek9UZ3lOQ3dpWVhSZmFHRnphQ0k2SWtGWlJXSkxZV3BuWDJWV1luaEJhVXBzZUU1U01YY2lmUS5JcExDRjk0cGxXVXVXclBrSGZlUnktaTdIMGJHSGpxOTNrS09zbGxYZlZwUXFRR0c3UFgtbmVRYklhLWQzVmhCZ2pxQ0lrRndMVWQxWDNzQVB6QUJGRzdrLVhJSzZtekdPeDdvLVFSdTFOOHFPUzl1ZmR4eGpLRDE5TjdKRlQ5YW5IUjNaM2NzbFFKSlEtSWRhQUxzYm93YW9IUTZTY2NEUXhkWmdIUUpBUmk3YXJadkVzUnRmQWNHaGctcXBYVTZONkZDSDFSNnVFLWFKUUo1WU1RcUx1VzcydnVpdHpIMmpMZjdGMW9xODBqNWFnd1kzRlc4VkhMdUhsS0o1XzBRLUpwWW51THVoRGFBMkpSWHN5TUZoTk1RQkdfSE1fNk0tWWNlSHhhY2I1eWxFMmw5VVZadEN4SjZURW1LSjRIXzAwR2VqSlZyUWZMM3hjNzV6b0ZMZkEifQ==", "base64"));
  res.end();

  return __filename;
};
