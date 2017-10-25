var path = require("path");

/**
 * POST /oauth2/default/v1/token?grant_type=authorization_code&code=-H9eqDW-XL1RM4bavf6-&redirect_uri=http://localhost:8080/authorization-code/callback
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
  res.setHeader("x-okta-request-id", "reqlyJWIJUoQGm5MCfF8c4tsA");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=30C57C14B8F83D2E9256BBD9ADDF5FD8; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9991");
  res.setHeader("x-rate-limit-reset", "1508956387");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Wed, 25 Oct 2017 18:32:30 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWtSak5IVnhNREE1ZVVweU1ISXdSMHQwY0hsSU5UZ3RkRzVmUWxRMVNIaFBNa1pDVW10SVdHNXZaRkVpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTGpkdmMySTVRV1ZZTVZsWUxXVkdUek14VTNvdFVUVnpNbHBQYlZGcWJWRm5SVFJhVVRVMk5FcGxYMWtpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZaR1ZtWVhWc2RDSXNJbUYxWkNJNkltRndhVG92TDJSbFptRjFiSFFpTENKcFlYUWlPakUxTURnNU5UWXpOVEVzSW1WNGNDSTZNVFV3T0RrMU9UazFNU3dpWTJsa0lqb2lNRzloYzJOeGJXUkRZbmR0VUdKelVtd3daek1pTENKMWFXUWlPaUl3TUhWemFXRldNM2RzTTBZNVdEVTNUekJuTXlJc0luTmpjQ0k2V3lKdmNHVnVhV1FpTENKd2NtOW1hV3hsSWl3aVpXMWhhV3dpWFN3aWMzVmlJam9pYW05b2JrQmhZMjFsTG1OdmJTSjkuVVpfZ0JBQTR3N0hfV1dhTXB6eUNuSUVILUNtMnZkQVQ3bEtXeENjUWZtbGRVdGZmYTBRcTNZeWF2MlZLTUhYcGFrOXNfa1lJNkppNWlIWmFFOVo5dGlDelN6MGxxVDZmZThoMDF6aTRiVDFUV1JpQ05ZSVF3NThzRl9oeU9rMm9qeURwNXJCWWhfNk9qYTlpVC13dzFubjNPVTMtSzlfbElqQXNYUkV3STY1X3ZWenlXYmRvejdsLW1iU1QzTFBZLW1wZEM1TloxR015QTZDU2ZSU0xBbnZIeTVmQl9nV1U2YlRNUXV0VXNhQnBxcWFlY1ZiUGVORGZPRlZQcUVqRU1mRmRaeTNPeTNXVHFDODE2MTdnc0E4SEt6ZlgyOGNvMUR2dl9ncjN1dXFPQlJqNHNmcVhpOWNUcXR3czlTTXAwSjc2ek5UV2NuRDVFTXFNZTEzZ1B3IiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImV4cGlyZXNfaW4iOjM2MDAsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJpZF90b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJa1JqTkhWeE1EQTVlVXB5TUhJd1IwdDBjSGxJTlRndGRHNWZRbFExU0hoUE1rWkNVbXRJV0c1dlpGRWlmUS5leUp6ZFdJaU9pSXdNSFZ6YVdGV00zZHNNMFk1V0RVM1R6Qm5NeUlzSW01aGJXVWlPaUpxYjJodUlHcHZhRzRpTENKbGJXRnBiQ0k2SW1wdmFHNUFZV050WlM1amIyMGlMQ0oyWlhJaU9qRXNJbWx6Y3lJNkltaDBkSEE2THk5eVlXbHVMbTlyZEdFeExtTnZiVG94T0RBeUwyOWhkWFJvTWk5a1pXWmhkV3gwSWl3aVlYVmtJam9pTUc5aGMyTnhiV1JEWW5kdFVHSnpVbXd3WnpNaUxDSnBZWFFpT2pFMU1EZzVOVFl6TlRFc0ltVjRjQ0k2TVRVd09EazFPVGsxTVN3aWFuUnBJam9pU1VRdVdrTnVUekZ5YW1sMExUVk1ZVVE1YXpoc1ExVTRUSHA0WVdGWFNrbHhha1oyVkZwd1YzWm9iWE4wT0NJc0ltRnRjaUk2V3lKd2QyUWlYU3dpYVdSd0lqb2lNREJ2YjJWMmRYZGhOa2RzYVVKdFQzZ3daek1pTENKdWIyNWpaU0k2SWs1UFRrTkZJaXdpY0hKbFptVnljbVZrWDNWelpYSnVZVzFsSWpvaWFtOW9ia0JoWTIxbExtTnZiU0lzSW1GMWRHaGZkR2x0WlNJNk1UVXdPRGsxTmpNMU1Dd2lZWFJmYUdGemFDSTZJblJUUlZWaFNsUjVaM1owTjBKbE1WSndNREZtWTNjaWZRLkNXa01sNE9jYmJnSVR5OVI5dFoxZnFYVmJ1R2c0V3lOdWdOMEdEZVhoaUY0ME52NjRhdmdfUU5WVWRjSWRpV1hVU3otX09CbndJYW41am9UTko0OEh1Mm1XaF94OU1EYzM2aUY5anowT2g3YzBsdUR0dlVfRmJ0R0VVWTZmZE1BTE1qRlQxVlpqVFRLVWdqckVOem1aQThFNGhLZWZBbTlVdkdtMmlrYjZmb01jXy1RWFJPXzRQMEItdXV6VWpBemZ1eWJuOEtpSHROWXdKNlZ2cmtuOGhEQmJwYUE5ZEZoNVB4YzNvN05WbGtZeFB2SlIwdmZPRFNidW5hbWFTdUVPaVc2SGJPQXloSWtIX1BrQWhIOXRJcVQtU3pBT3FlTzNlQXZMLTNpZXJUb2t4cEFQWTNaeHp0VHIyN2l0cHlxNnVZazZzSzhDbnRiWk9iTEJTZVNwQSJ9", "base64"));
  res.end();

  return __filename;
};
