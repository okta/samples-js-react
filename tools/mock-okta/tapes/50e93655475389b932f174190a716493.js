var path = require("path");

/**
 * POST /oauth2/default/v1/token?grant_type=authorization_code&code=fNs58jXbaKtce5SLLD5Q&redirect_uri=http://localhost:3000/authorization-code/callback
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
  res.setHeader("x-okta-request-id", "reqrE1wesXFSmSJSUOf5bY_lg");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=0FB5D1A9BF080EC2D962C3FFA8D92DBF; Path=/"]);
  res.setHeader("x-rate-limit-limit", "10000");
  res.setHeader("x-rate-limit-remaining", "9995");
  res.setHeader("x-rate-limit-reset", "1502406948");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:51 GMT");
  res.setHeader("connection", "close");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJhY2Nlc3NfdG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SWxZd2VIZExaMjB0YUhKdlNFMUJZV0ZUTVRKTlYxUkRWM1JRVUVRMFVYQm9TRmxEU0dZNFdFb3hXbXNpZlEuZXlKMlpYSWlPakVzSW1wMGFTSTZJa0ZVTG5Oc2JUVXhOa05tUlY5R2VUTTJTRUZzTkZGTU4wcGpkbWQzYmxsNlIyNXZiSEpHWmxGbWQwTnZjamdpTENKcGMzTWlPaUpvZEhSd09pOHZjbUZwYmk1dmEzUmhNUzVqYjIwNk1UZ3dNaTl2WVhWMGFESXZaR1ZtWVhWc2RDSXNJbUYxWkNJNkltaDBkSEE2THk5c2IyTmhiR2h2YzNRNk16QXdNQzhpTENKcFlYUWlPakUxTURJME1EWTRPVEVzSW1WNGNDSTZNVFV3TWpReE1EUTVNU3dpWTJsa0lqb2lNRzloYjIwNFIyVk1lbHBsV0RkdldWb3daek1pTENKMWFXUWlPaUl3TUhWdmJuWnlTM1pMVW1oQ1ZFUk1kekJuTXlJc0luTmpjQ0k2V3lKdmNHVnVhV1FpTENKbGJXRnBiQ0pkTENKemRXSWlPaUpuWlc5eVoyVkFZV050WlM1amIyMGlmUS5PRks3SVVEaVZwbThndmZSVUxGMFVzWlBUV2pZeFZFaDE1NGRiRXluemdsN3ZiRFZQOU9SbGYtX1IteTdBakp2cG5vT29YVlJHdjJwUElYcklSdWROc19aM0tuSW9GdXBEeHY5eGFGZzA4RGU2X1lnMHRwUlJHYVhoTVdKRXIxMGZHOXFLcGtRMV9uQURlZndCVTZ6UFhTcmFvc184bElpSWZiSXhYREM4LWxiVEduLXlSNnJ3U045SUk4ZjVVbkJWcThDa3lwaE5xYzVqcUFGZUJnMXZIZ3NaTVBFVEgtN1JJbnBhb3pIdHh4cWl1bDNaWmlQME4xNVczcjBlbFVLc0ZGZlRZQXlHVzFQY2d1Rml4TGRJakxiNzlNblpkRDczeXFXcWtjQUV1SzlQcGJ0NkZWWGhrSVhIUjZNUTc5ZjRYdlRHMjZ6SWQxb0p3UTdzM200WWciLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJlc19pbiI6MzYwMCwic2NvcGUiOiJvcGVuaWQgZW1haWwiLCJpZF90b2tlbiI6ImV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJbFl3ZUhkTFoyMHRhSEp2U0UxQllXRlRNVEpOVjFSRFYzUlFVRVEwVVhCb1NGbERTR1k0V0VveFdtc2lmUS5leUp6ZFdJaU9pSXdNSFZ2Ym5aeVMzWkxVbWhDVkVSTWR6Qm5NeUlzSW1WdFlXbHNJam9pWjJWdmNtZGxRR0ZqYldVdVkyOXRJaXdpZG1WeUlqb3hMQ0pwYzNNaU9pSm9kSFJ3T2k4dmNtRnBiaTV2YTNSaE1TNWpiMjA2TVRnd01pOXZZWFYwYURJdlpHVm1ZWFZzZENJc0ltRjFaQ0k2SWpCdllXOXRPRWRsVEhwYVpWZzNiMWxhTUdjeklpd2lhV0YwSWpveE5UQXlOREEyT0RreExDSmxlSEFpT2pFMU1ESTBNVEEwT1RFc0ltcDBhU0k2SWtsRUxsSkVZVzlRTUVSVmVVZHNkR2w0TmsxR2VtaERRelUxYkd4NU0yTnRhalJoVG1oc1EwMDNYMmRhYWxVaUxDSmhiWElpT2xzaWNIZGtJbDBzSW1sa2NDSTZJakF3YjI4MmFrNURSRTVxTnpWWWRsYzNNR2N6SWl3aWJtOXVZMlVpT2lKT1QwNURSU0lzSW1GMWRHaGZkR2x0WlNJNk1UVXdNalF3TmpnNU1Dd2lZWFJmYUdGemFDSTZJbEpxVVRNMmIwd3laRWhCVDB0R1IzWllTM1ZpWkZFaWZRLmR5U0tFNVktNElBMng2enlSVWNmZlZnanFYM0ViSDlOdUdvdVBrb014MVE5SVBUc2V0eGZ6TmloLXVzTDhreHhaSjF5SXRlVkRCTm1mRVliTm9lQnZxZFBxaTdVZmV6VkpyUEc1akZFQUtpaXhEUDk0SmNrNzVKTFFaa2J4alhmaElMSjU1cTcwVDZkbllNTGdzelVXRU5Gek4zbEI3c25VTFpEdjU4VjVjcEMxQVJTdU5zLUZiNnFnNnFaVjFia3JrYzh5Mkk0X0JBNk1oMURsczdvTEFDSXBCS2lDbzdLbjIzbGVuMEd5Z0J3UmFtZVVUOGdDcm1pZV9ROWI5Tml1SExSVUxYdVpJaXV5elFtNGF5cUM1Z2VYNEFBc1c4QkdMaVhaNVRrQ05nWlBHbmF5TnpRc3BKdzdZdEt2RTl0TnUzbmNNOEx1TlF5NmZhZ0VNYVladyJ9", "base64"));
  res.end();

  return __filename;
};
