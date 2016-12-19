var path = require("path");

/**
 * POST /oauth2/v1/token?grant_type=authorization_code&code=dvF_ImB_RX8KJZhrzV29&redirect_uri=http://localhost:3000/authorization-code/callback
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
  res.setHeader("x-okta-request-id", "req2GC36dNMRBGYv23aEnVgmQ");
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9990");
  res.setHeader("x-rate-limit-reset", "1481839882");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=3916BE7A03349F05E924C170E4B4220B; Path=/"]);
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 15 Dec 2016 22:10:26 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWxCbFdrRjZkemhIVkRrMVdFcHBaMkpWZUhaWGQxbHdhbGRmVTFCeFJIQkJOWEJzY0hSNFgzRTBhRGdpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTGpFeWJsQXRSVE5vU2xGMFZEbE5lRkp6TFRGclEydEhPWGwxWjBrMGRuSmFVVWwwYjFwZk1GRkRhVTBpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW1GMVpDSTZJbWgwZEhBNkx5OXlZV2x1TG05cmRHRXhMbU52YlRveE9EQXlJaXdpYzNWaUlqb2lhbTlvYmtCaFkyMWxMbU52YlNJc0ltbGhkQ0k2TVRRNE1UZ3pPVGd5Tnl3aVpYaHdJam94TkRneE9EUXpOREkzTENKamFXUWlPaUo2V1ZaT2IwNUpaVk4zZFd3ek1uWndUbWxQZWlJc0luVnBaQ0k2SWpBd2RXeG5lRTgzTUZCdlQxUkdhMkpCTUdjeklpd2ljMk53SWpwYkltVnRZV2xzSWl3aWIzQmxibWxrSWl3aWNISnZabWxzWlNKZGZRLllSbERqUFp0MTRjVU9FQ28yV1QzRnJ4aHpsLTloWHNUWmtMWTlTaElaRjBTSXRqZWVFbUFKdlVnWERpNjVLeUF2eGlNWENqM1BkU2V2ZERkQXF6VDRqNkVsdktUcnV6Q0NGZHFWYnk4aHoyZ29aYWEyX09xTWN5Mk1tLURfeGtrcVVVTjdBZXVRYnIyXzZaNkZUeE5ESTZINTNZSE43dHdqQnZZaHlhRkFZbGRfaGRvc2piRFoyZEt2dlMtWFBWVkk2TWJLMEN5UHlJQnRJR0NsNTUtY3B0cl9LQzc0XzRRRUVWb0M0Rk1lRGRibmZoS0EwT2JvNHhEbFZiZm1sWlZXNXAzNmtYUHNsU1pOR25QdUFyQ2xNNnA0UDN0ak4zd21ZUnQ1TFhBSnNNT3RfSVA4Xy14MnY0d2pIQlR3SE95MmFjRl9KU3dJLWliRnhHQ0VhUDcydyIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcmVzX2luIjozNjAwLCJzY29wZSI6ImVtYWlsIG9wZW5pZCBwcm9maWxlIiwiaWRfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWxoblRXcGxNR016Y0VnekxVazNkblJxT1hCYWNEZFFUa0pVZVRaR2FsVk5XbGhhWlc1d1QzZzNWVGdpZlEuZXlKemRXSWlPaUl3TUhWc1ozaFBOekJRYjA5VVJtdGlRVEJuTXlJc0ltNWhiV1VpT2lKS2IyaHVJRUZrWVcxeklpd2laVzFoYVd3aU9pSnFiMmh1UUdGamJXVXVZMjl0SWl3aWRtVnlJam94TENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaUlzSW1GMVpDSTZJbnBaVms1dlRrbGxVM2QxYkRNeWRuQk9hVTk2SWl3aWFXRjBJam94TkRneE9ETTVPREkzTENKbGVIQWlPakUwT0RFNE5ETTBNamNzSW1wMGFTSTZJa2xFTGpaaWExVXlSREF5YURSSFdFRnNMVnBJVVUxeWVrbEliMkp2UldsUlpFNWFPV3REZERaeU5GZHpVR01pTENKaGJYSWlPbHNpY0hka0lsMHNJbWxrY0NJNklqQXdiMncyYVZOWVFVSTJURUkxV21seE1HY3pJaXdpYm05dVkyVWlPaUpPVDA1RFJTSXNJbkJ5WldabGNuSmxaRjkxYzJWeWJtRnRaU0k2SW1wdmFHNUFZV050WlM1amIyMGlMQ0poZFhSb1gzUnBiV1VpT2pFME9ERTRNems0TWpjc0ltRjBYMmhoYzJnaU9pSkJZMHh0VXpjeFdWWTNaVkZCVDBONWFtRnRPREpCSW4wLkJydy1WYW9GSC01OW1BMzViVnEzNjl3eW0wNHZSWGF5Rm4zajgxb3NtbzFDdUI0Vmw0Y2JqSU1MYWlfYXBCeDJXNkVod0VNMTZ3RHZuajBtRlRjYkpCWHNNV2E5ZVNOOGJVVUVuS1lET2NlS1B0clF1bGo1NXRTZUNORnJqTkpKV1o1LWI1a21RanpmbHNIeURVaDMwNFlJX3VRdDZweW5YVTU4Ni1aaVlPSG5mNUZFQ0VnMFYtMlNnQzJmXy1YZWsta2pKNTNWZ2dDM1hlNHQ5b2llaDl3VGRaeGMzV2IwYzNFOWpXQTlkOG42Y2U3Tjd6VVJMN0JKQTZmVEd4eVZPckFWNUdfdXNjUkhEcTZXQndFWThvNk9EVmpzdUR4enFnNkpVUWp2NVVBelAtWEZ2NHhWdVNkZnRWRlZlU1R5MzR4djAyUTJ0NHdfbXBURGdnRy1mdyJ9", "base64"));
  res.end();

  return __filename;
};
