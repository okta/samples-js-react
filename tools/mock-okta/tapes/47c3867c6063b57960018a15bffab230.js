var path = require("path");

/**
 * POST /oauth2/default/v1/token?grant_type=authorization_code&code=VtPtP7Tpm4hQR1ivnqb0&redirect_uri=http://localhost:3000/authorization-code/callback
 *
 * authorization: Basic MG9hb204R2VMelplWDdvWVowZzM6WElaUG9HdHV5aHUwVjhNc1F6R09zT1NuNm9TZmYzdk84VnAybm1MWQ==
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
  res.setHeader("x-okta-request-id", "reqGGSNPoTTQnmH1dYZ8SKq8A");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=E437B6C86B68A4F08926BC7E81444C84; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9991");
  res.setHeader("x-rate-limit-reset", "1502406948");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:55 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWxZd2VIZExaMjB0YUhKdlNFMUJZV0ZUTVRKTlYxUkRWM1JRVUVRMFVYQm9TRmxEU0dZNFdFb3hXbXNpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTG1oNlMwbE5ORzVFZDJkWlRIbGlVWEpGWlY5dVRIZGlSRGRmUVMxMllWOWthak51TVRkR05sRlRiMEVpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZaR1ZtWVhWc2RDSXNJbUYxWkNJNkltaDBkSEE2THk5c2IyTmhiR2h2YzNRNk16QXdNQzhpTENKcFlYUWlPakUxTURJME1EWTRPVFVzSW1WNGNDSTZNVFV3TWpReE1EUTVOU3dpWTJsa0lqb2lNRzloYjIwNFIyVk1lbHBsV0RkdldWb3daek1pTENKMWFXUWlPaUl3TUhWdmJ6TktibTFUWVhoRVdYWnBlREJuTXlJc0luTmpjQ0k2V3lKd2NtOW1hV3hsSWl3aWIzQmxibWxrSWl3aVpXMWhhV3dpWFN3aWMzVmlJam9pYW05b2JrQmhZMjFsTG1OdmJTSjkuRDcydEhGMTB2UUZDLTh0Z0REb2FESzEyX2c0LXNQZkNhRE5ib3FGYU1CcFhiQ202c3JaU24teEhBQXpIbEwxeDMyOG54SE5EeDE5bFVibklBcml1T08yOTJad1k4T3NyYUVlbl9mUG8zWHJwYUNnTGpzUzdCbXlhS2lONVp2WURVajVtTTMwNHFPNm0tSzJqZkZNc3N0bFZFdGZyaFdMVXJhd0JwU2ZoeXNrUmZyd2xuZERsbDBOOXVoSFJHMVpTcWlxbTUyR0RLN0RYUEhSZlRFMVhld0RLaVpxM1hPbUdtR1hXVnBlT19WaTh4RVhGSV9wQ0lfRnFfZWFhaE9VbGY4WE5jcFdkNGVKWWhjZk1ldVVzUG92aWVkVjdMdFVaZXhMYVc1Q2kya3RIUTNpdFluR3NVLVJRckk4TjdRMEVNdElvbWpYMm53YWk2dzhzYjdBS2V3IiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyZXNfaW4iOjM2MDAsInNjb3BlIjoicHJvZmlsZSBvcGVuaWQgZW1haWwiLCJpZF90b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbFl3ZUhkTFoyMHRhSEp2U0UxQllXRlRNVEpOVjFSRFYzUlFVRVEwVVhCb1NGbERTR1k0V0VveFdtc2lmUS5leUp6ZFdJaU9pSXdNSFZ2YnpOS2JtMVRZWGhFV1hacGVEQm5NeUlzSW01aGJXVWlPaUpLYjJodUlFRmtZVzF6SWl3aVpXMWhhV3dpT2lKcWIyaHVRR0ZqYldVdVkyOXRJaXdpZG1WeUlqb3hMQ0pwYzNNaU9pSm9kSFJ3T2k4dmNtRnBiaTV2YTNSaE1TNWpiMjA2TVRnd01pOXZZWFYwYURJdlpHVm1ZWFZzZENJc0ltRjFaQ0k2SWpCdllXOXRPRWRsVEhwYVpWZzNiMWxhTUdjeklpd2lhV0YwSWpveE5UQXlOREEyT0RrMUxDSmxlSEFpT2pFMU1ESTBNVEEwT1RVc0ltcDBhU0k2SWtsRUxqSlFURk13YkVONmRIZHVNVzExYUY5c1N6WlpZVmQwWW00dFptdEtOSEkyVDI1M1QxcDRiR0pvYldjaUxDSmhiWElpT2xzaWNIZGtJbDBzSW1sa2NDSTZJakF3YjI4MmFrNURSRTVxTnpWWWRsYzNNR2N6SWl3aWJtOXVZMlVpT2lKT1QwNURSU0lzSW5CeVpXWmxjbkpsWkY5MWMyVnlibUZ0WlNJNkltcHZhRzVBWVdOdFpTNWpiMjBpTENKaGRYUm9YM1JwYldVaU9qRTFNREkwTURZNE9UVXNJbUYwWDJoaGMyZ2lPaUpNVFd0WFUyUjFVVUUwYmtScmFIQmpUeTF4YVhOM0luMC5HYWJneDdMUE1nQ01SejExa0p5NzFKb0JMLWlHb3lyOEZBemNtQTlHU2NrRnBFRlNSYmU1SGRiQmlrX2ZiT2Ixc1dRbHk4dk50T3ZTSHM2RFhlaEdLa1AwczJKTVllblA0VThNWmZ0NVRhRDBCSDFpUzlqTTFIdE92NWRKWUNOdjh4RGxaNlQ0eHRsTWlBWUdGVkd4QkFYZHgyamtjWXNIanEzd3N6UlZGTGNqRGlhWUNGLXVGbTkzYUdoT0JoQXByeXFPbVNnYU9mNDM2Z0ZHRENmWGdLem5RZmdhR2ZIX0Zvd1RfZXZ4WGw5RXQ4MWxlU3I5NHl5UHZtU20tTkNkdDFWT0dhYV9fS2hBY1I1ZmJOWXVrdm0wX3hxWWJVeUptcGhkN0VXZHZHSk56VHVBLTBiYm5neEpKQWMycTJMZkg5RV9VdWxGV2s4eU1DOVBqc2J0TEEifQ==", "base64"));
  res.end();

  return __filename;
};
