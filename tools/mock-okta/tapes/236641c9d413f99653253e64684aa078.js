var path = require("path");

/**
 * GET /login/login.htm;jsessionid=69C1B054FE222DF6D4657F037DB1CFFF?fromURI=/oauth2/v1/authorize/redirect?okta_key=8bvEcTRtJDuDx8zG1deaIePbIDNBauZFGX5jz5Xl7UE
 *
 * host: rain.okta1.com:1802
 * connection: keep-alive
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:48.0) Gecko/20100101 Firefox/48.0
 * accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,* / *;q=0.8
 * accept-encoding: gzip
 * accept-language: en-US
 * cookie: t=default; DT=DI09dwIAl6ESbSY9ZSYutykqA; JSESSIONID=69C1B054FE222DF6D4657F037DB1CFFF
 * cache-control: no-cache, no-store
 * pragma: no-cache
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "reqPf8Y1fRCSxyEpl1zaNDBfQ");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","t=default; Path=/","sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=69C1B054FE222DF6D4657F037DB1CFFF; Path=/"]);
  res.setHeader("x-rate-limit-limit", "850");
  res.setHeader("x-rate-limit-remaining", "849");
  res.setHeader("x-rate-limit-reset", "1502406948");
  res.setHeader("x-okta-backend", "albatross");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("x-frame-options", "SAMEORIGIN");
  res.setHeader("x-ua-compatible", "IE=edge");
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.setHeader("content-language", "en");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Thu, 10 Aug 2017 23:14:48 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PCFET0NUWVBFIGh0bWw+CjwhLS1baWYgSUUgN10+PGh0bWwgY2xhc3M9Imx0LWllMTAgbHQtaWU5IGx0LWllOCI+PCFbZW5kaWZdLS0+CjwhLS1baWYgSUUgOF0+PGh0bWwgY2xhc3M9Imx0LWllMTAgbHQtaWU5Ij4gPCFbZW5kaWZdLS0+CjwhLS1baWYgSUUgOV0+PGh0bWwgY2xhc3M9Imx0LWllMTAiPjwhW2VuZGlmXS0tPgo8IS0tW2lmIGd0IElFIDldPjxodG1sPjwhW2VuZGlmXS0tPgo8IS0tW2lmICFJRV0+PCEtLT48aHRtbD48IS0tPCFbZW5kaWZdLS0+CjxoZWFkPgoKICAgIDxzY3JpcHQ+aWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7d2luZG93Lm1vZHVsZSA9IG1vZHVsZTsgbW9kdWxlID0gdW5kZWZpbmVkO308L3NjcmlwdD4KCiAgICA8dGl0bGU+UmFpbi1DbG91ZDU5IC0gU2lnbiBJbjwvdGl0bGU+CiAgICAgICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgICA8bWV0YSBuYW1lPSJyb2JvdHMiIGNvbnRlbnQ9Im5vbmUiIC8+CgogICAgPGxpbmsgaHJlZj0iaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXNzZXRzL2xvZ2lucGFnZS9jc3Mvb2t0YS1zaWduLWluLm1pbi4xNGM2NzU2MGI3NWI3OGEzYjMyOGVmZTc5ZmEyOTBlMi5jc3MiIHR5cGU9InRleHQvY3NzIiByZWw9InN0eWxlc2hlZXQiLz48bGluayBocmVmPSJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hc3NldHMvbG9naW5wYWdlL2Nzcy9sb2dpbnBhZ2UtdGhlbWUuNWY4YjkzMTcwOTYwZDJjMGNmNTM2ZWFiOTk5ZjgzMWUuY3NzIiB0eXBlPSJ0ZXh0L2NzcyIgcmVsPSJzdHlsZXNoZWV0Ii8+PHNjcmlwdD4KICAgICAgICB2YXIgb2t0YSA9IHsKICAgICAgICAgICAgbG9jYWxlOiAnZW4nCiAgICAgICAgfTsKICAgIDwvc2NyaXB0PgogICAgPHNjcmlwdD53aW5kb3cub2t0YSB8fCAod2luZG93Lm9rdGEgPSB7fSk7IG9rdGEuY2RuVXJsSG9zdG5hbWUgPSAiIjsgb2t0YS5jZG5QZXJmb3JtQ2hlY2sgPSBmYWxzZTs8L3NjcmlwdD48c2NyaXB0PndpbmRvdy5va3RhIHx8ICh3aW5kb3cub2t0YSA9IHt9KTt3aW5kb3cub2t0YS5taXhwYW5lbCA9IHRydWU7PC9zY3JpcHQ+PHNjcmlwdD5pZiAod2luZG93Lm1vZHVsZSkgbW9kdWxlID0gd2luZG93Lm1vZHVsZTs8L3NjcmlwdD4KCjwvaGVhZD4KPGJvZHkgY2xhc3M9ImF1dGgiPgoKPCEtLVtpZiBndGUgSUUgOF0+CiAgPCFbaWYgbHRlIElFIDldPgoKICAgIDxzdHlsZT4KICAgIC51bnN1cHBvcnRlZC1icm93c2VyLWJhbm5lci13cmFwIHsKICAgICAgcGFkZGluZzogMjBweDsKICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDsKICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmJmZjsKICAgIH0KICAgIC51bnN1cHBvcnRlZC1icm93c2VyLWJhbm5lci1pbm5lciB7CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsKICAgICAgd2lkdGg6IDczNXB4OwogICAgICBtYXJnaW46IDAgYXV0bzsKICAgICAgdGV4dC1hbGlnbjogbGVmdDsKICAgIH0KICAgIC51bnN1cHBvcnRlZC1icm93c2VyLWJhbm5lci1pbm5lciAuaWNvbiB7CiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7CiAgICAgIG1hcmdpbi1yaWdodDogMjBweDsKICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOwogICAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7CiAgICB9CiAgICAudW5zdXBwb3J0ZWQtYnJvd3Nlci1iYW5uZXItaW5uZXIgYSB7CiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOwogICAgfQogICAgPC9zdHlsZT4KCiAgICA8ZGl2IGNsYXNzPSJ1bnN1cHBvcnRlZC1icm93c2VyLWJhbm5lci13cmFwIj4KICAgICAgPGRpdiBjbGFzcz0idW5zdXBwb3J0ZWQtYnJvd3Nlci1iYW5uZXItaW5uZXIiPgogICAgICAgIDxzcGFuIGNsYXNzPSJpY29uIGljb24tMTYgaWNvbi1vbmx5IHdhcm5pbmctMTYteWVsbG93Ij48L3NwYW4+WW91IGFyZSB1c2luZyBhbiB1bnN1cHBvcnRlZCBicm93c2VyLiBGb3IgdGhlIGJlc3QgZXhwZXJpZW5jZSwgdXBkYXRlIHRvIDxhIGhyZWY9Imh0dHBzOi8vc3VwcG9ydC5va3RhLmNvbS9oZWxwL2FydGljbGVzL0tub3dsZWRnZV9BcnRpY2xlLzI0NTMyOTUyLVBsYXRmb3Jtcy0tLUJyb3dzZXItYW5kLU9TLVN1cHBvcnQiPmEgc3VwcG9ydGVkIGJyb3dzZXI8L2E+LjwvZGl2PgogICAgPC9kaXY+CgogIDwhW2VuZGlmXT4KPCFbZW5kaWZdLS0+CjwhLS1baWYgSUUgOF0+IDxkaXYgY2xhc3M9ImxvZ2luLWJnLWltYWdlIiBkYXRhLXNlPSJsb2dpbi1iZy1pbWFnZSIgc3R5bGU9IiI+PC9kaXY+IDwhW2VuZGlmXS0tPgo8IS0tW2lmIChndCBJRSA4KXwhKElFKV0+PCEtLT4gPGRpdiBjbGFzcz0ibG9naW4tYmctaW1hZ2UiIGRhdGEtc2U9ImxvZ2luLWJnLWltYWdlIiBzdHlsZT0iYmFja2dyb3VuZC1pbWFnZTogbm9uZSI+PC9kaXY+IDwhLS08IVtlbmRpZl0tLT4KCjxkaXYgY2xhc3M9ImNvbnRlbnQiPgogIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAubm9zY3JpcHQtbXNnIHsKICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwogICAgICAgIGJvcmRlci1jb2xvcjogI2RkZCAjZGRkICNkOGQ4ZDg7CiAgICAgICAgYm94LXNoYWRvdzowIDJweCAwIHJnYmEoMTc1LCAxNzUsIDE3NSwgMC4xMik7CiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICAgIHdpZHRoOiAzOThweDsKICAgICAgICBtaW4td2lkdGg6IDMwMHB4OwogICAgICAgIG1hcmdpbjogMjAwcHggYXV0bzsKICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7CiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7CiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsKICAgIH0KCiAgICAubm9zY3JpcHQtY29udGVudCB7CiAgICAgICAgcGFkZGluZzogNDJweDsKICAgIH0KCiAgICAubm9zY3JpcHQtY29udGVudCBoMiB7CiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7CiAgICB9CgogICAgLm5vc2NyaXB0LWNvbnRlbnQgaDEgewogICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4OwogICAgfQoKICAgIC5ub3NjcmlwdC1jb250ZW50IGEgewogICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OwogICAgICAgIGJveC1zaGFkb3c6IG5vbmU7CiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDsKICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOwogICAgICAgIHdpZHRoOiAzMTRweDsKICAgICAgICBoZWlnaHQ6IDUwcHg7CiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7CiAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwMDdkYzEsICMwMDczYjIpLCAjMDA3ZGMxOwogICAgICAgIGJvcmRlcjogMXB4IHNvbGlkOwogICAgICAgIGJvcmRlci1jb2xvcjogIzAwNGI3NTsKICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDA0NTZhOwogICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMCAxcHggMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAgMXB4IDAgMCBpbnNldDsKICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDsKICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7CiAgICB9CgogICAgLm5vc2NyaXB0LWNvbnRlbnQgYTpob3ZlciB7CiAgICAgICAgYmFja2dyb3VuZDogIzAwN2RjMTsKICAgICAgICBjdXJzb3I6IGhhbmQ7CiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOwogICAgfQo8L3N0eWxlPgo8bm9zY3JpcHQ+CiAgICA8ZGl2IGlkPSJub3NjcmlwdC1tc2ciIGNsYXNzPSJub3NjcmlwdC1tc2ciPgogICAgICAgIDxkaXYgY2xhc3M9Im5vc2NyaXB0LWNvbnRlbnQiPgogICAgICAgICAgICA8aDI+SmF2YXNjcmlwdCBpcyByZXF1aXJlZDwvaDI+CiAgICAgICAgICAgIDxoMT5KYXZhc2NyaXB0IGlzIGRpc2FibGVkIG9uIHlvdXIgYnJvd3Nlci4mbmJzcFBsZWFzZSBlbmFibGUgSmF2YXNjcmlwdCBhbmQgcmVmcmVzaCB0aGlzIHBhZ2UuPC9oMT4KICAgICAgICAgICAgPGEgaHJlZj0iLiI+UmVmcmVzaDwvYT4KICAgICAgICA8L2Rpdj4KICAgIDwvZGl2Pgo8L25vc2NyaXB0Pgo8ZGl2IGlkPSJzaWduaW4tY29udGFpbmVyIj48L2Rpdj4KICA8ZGl2IGlkPSJva3RhLXNpZ24taW4iIGNsYXNzPSJhdXRoLWNvbnRhaW5lciBtYWluLWNvbnRhaW5lciIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+CiAgICAgIDxkaXYgaWQ9InVuc3VwcG9ydGVkLW9uZWRyaXZlIiBjbGFzcz0idW5zdXBwb3J0ZWQtbWVzc2FnZSIgc3R5bGU9ImRpc3BsYXk6bm9uZSI+CiAgICAgICAgPGgyIGNsYXNzPSJvLWZvcm0taGVhZCI+WW91ciBPbmVEcml2ZSB2ZXJzaW9uIGlzIG5vdCBzdXBwb3J0ZWQ8L2gyPgogICAgICAgIDxwPlVwZ3JhZGUgbm93IGJ5IGluc3RhbGxpbmcgdGhlIE9uZURyaXZlIGZvciBCdXNpbmVzcyBOZXh0IEdlbmVyYXRpb24gU3luYyBDbGllbnQgdG8gbG9naW4gdG8gT2t0YTwvcD4KICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IiB0YXJnZXQ9Il9ibGFuayIgaHJlZj0iaHR0cHM6Ly9zdXBwb3J0Lm9rdGEuY29tL2hlbHAvYXJ0aWNsZXMvS25vd2xlZGdlX0FydGljbGUvVXBncmFkaW5nLXRvLU9uZURyaXZlLWZvci1CdXNpbmVzcy1OZXh0LUdlbmVyYXRpb24tU3luYy1DbGllbnQiPgogICAgICAgICAgTGVhcm4gaG93IHRvIHVwZ3JhZGU8L2E+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGlkPSJ1bnN1cHBvcnRlZC1jb29raWUiIGNsYXNzPSJ1bnN1cHBvcnRlZC1tZXNzYWdlIiBzdHlsZT0iZGlzcGxheTpub25lIj4KICAgICAgICAgIDxoMiBjbGFzcz0iby1mb3JtLWhlYWQiPkNvb2tpZXMgYXJlIHJlcXVpcmVkPC9oMj4KICAgICAgICAgIDxwPkNvb2tpZXMgYXJlIGRpc2FibGVkIG9uIHlvdXIgYnJvd3Nlci4gUGxlYXNlIGVuYWJsZSBDb29raWVzIGFuZCByZWZyZXNoIHRoaXMgcGFnZS48L3A+CiAgICAgICAgICA8YSBjbGFzcz0iYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IiB0YXJnZXQ9Il9ibGFuayIgaHJlZj0iLiI+CiAgICAgICAgICAgICAgUmVmcmVzaCA8L2E+CiAgICAgIDwvZGl2PgogIDwvZGl2Pgo8L2Rpdj4KCjxkaXYgY2xhc3M9ImZvb3RlciI+CiAgPGRpdiBjbGFzcz0iZm9vdGVyLWNvbnRhaW5lciBjbGVhcmZpeCI+CiAgICA8cCBjbGFzcz0iY29weXJpZ2h0Ij5Qb3dlcmVkIGJ5IDxhIGhyZWY9Imh0dHA6Ly93d3cub2t0YS5jb20vIiBjbGFzcz0iaW5saW5lLWJsb2NrIG5vdHJhbnNsYXRlIj5Pa3RhPC9hPjwvcD4KICAgIDxwIGNsYXNzPSJwcml2YWN5LXBvbGljeSI+PGEgaHJlZj0iL3ByaXZhY3kiIHRhcmdldD0iX2JsYW5rIiBjbGFzcz0iaW5saW5lLWJsb2NrIG1hcmdpbi1sLTEwIj5Qcml2YWN5IFBvbGljeTwvYT48L3A+CiAgPC9kaXY+CjwvZGl2PgoKPHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPmZ1bmN0aW9uIHJ1bkxvZ2luUGFnZSAoZm4pIHt2YXIgbWFpblNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO21haW5TY3JpcHQuc3JjID0gJ2h0dHA6Ly9yYWluLm9rdGExLmNvbToxODAyL2Fzc2V0cy9qcy9tdmMvbG9naW5wYWdlL21haW4tbG9naW5wYWdlLnBhY2suYzY3MTA2MGZiZjVmNDhhNjNlYjQ0N2I2NTk4NjM1Y2MuanMnO2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobWFpblNjcmlwdCk7Zm4gJiYgbWFpblNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KGZuLCAxKSB9KTt9PC9zY3JpcHQ+PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiPgooZnVuY3Rpb24oKXsKCiAgdmFyIGJhc2VVcmwgPSAnaHR0cFx4M0FceDJGXHgyRnJhaW4ub2t0YTEuY29tXHgzQTE4MDInOwogIHZhciBzdXBwbGllZFJlZGlyZWN0VXJpID0gJyc7CiAgdmFyIHJlcG9zdCA9IGZhbHNlOwogIHZhciBzdGF0ZVRva2VuID0gJyc7CiAgdmFyIGZyb21VcmkgPSAnXHgyRm9hdXRoMlx4MkZ2MVx4MkZhdXRob3JpemVceDJGcmVkaXJlY3RceDNGb2t0YV9rZXlceDNEOGJ2RWNUUnRKRHVEeDh6RzFkZWFJZVBiSUROQmF1WkZHWDVqejVYbDdVRSc7CiAgdmFyIHVzZXJuYW1lID0gJyc7CiAgdmFyIHJlbWVtYmVyTWUgPSB0cnVlOwogIHZhciBzbXNSZWNvdmVyeSA9IGZhbHNlOwogIHZhciBjYWxsUmVjb3ZlcnkgPSBmYWxzZTsKICB2YXIgdXNlcm5hbWVMYWJlbCA9ICdVc2VybmFtZSc7CiAgdmFyIHVzZXJuYW1lSW5saW5lTGFiZWwgPSAnJzsKICB2YXIgcGFzc3dvcmRMYWJlbCA9ICdQYXNzd29yZCc7CiAgdmFyIHBhc3N3b3JkSW5saW5lTGFiZWwgPSAnJzsKICB2YXIgc2lnbmluTGFiZWwgPSAnU2lnblx4MjBJbic7CiAgdmFyIGZvcmdvdHBhc3N3b3JkTGFiZWwgPSAnRm9yZ290XHgyMHBhc3N3b3JkXHgzRic7CiAgdmFyIHVubG9ja2FjY291bnRMYWJlbCA9ICdVbmxvY2tceDIwYWNjb3VudFx4M0YnOwogIHZhciBoZWxwTGFiZWwgPSAnSGVscCc7CiAgdmFyIG9yZ1N1cHBvcnRQaG9uZU51bWJlciA9ICcnOwogIHZhciBoaWRlU2lnbk91dEZvck1GQSA9IGZhbHNlOwogIHZhciBsb2dpblBhZ2VVcmxSZWRpcmVjdCA9ICcnOwogIHZhciBlbmFibGVVcmxGaXhGb3JFbWJlZGRlZEJyb3dzZXJzID0gZmFsc2U7CiAgdmFyIGZvb3RlckhlbHBUaXRsZSA9ICdOZWVkXHgyMGhlbHBceDIwc2lnbmluZ1x4MjBpblx4M0YnOwogIHZhciByZWNvdmVyeUZsb3dQbGFjZWhvbGRlciA9ICdFbWFpbFx4MjBvclx4MjBVc2VybmFtZSc7CiAgdmFyIHNpZ25PdXRVcmwgPSAnJzsKICB2YXIgc2VjdXJpdHlJbWFnZSA9IHRydWU7CiAgCgogIHZhciB3aW5kb3dzVmVyaWZ5ID0gZmFsc2U7CiAgCiAgICB3aW5kb3dzVmVyaWZ5ID0gdHJ1ZTsKICAKCiAgdmFyIHNlbGZTZXJ2aWNlVW5sb2NrID0gZmFsc2U7CiAgCgogIHZhciBwcmV2ZW50QnJvd3NlckZyb21TYXZpbmdPa3RhUGFzc3dvcmQgPSBmYWxzZTsKICAKCiAgdmFyIGF1dG9QdXNoID0gZmFsc2U7CiAgCgogIHZhciBwdWJsaXNoVG9BY2NvdW50Q2hvb3NlciA9IGZhbHNlOwogIHZhciBhY2NvdW50Q2hvb3NlckRpc2NvdmVyeVVybCA9IG51bGw7CiAgCiAgICBwdWJsaXNoVG9BY2NvdW50Q2hvb3NlciA9IHRydWU7CiAgICBhY2NvdW50Q2hvb3NlckRpc2NvdmVyeVVybCA9ICdodHRwczovL2xvZ2luLm9rdGEuY29tL2Rpc2NvdmVyeS9pZnJhbWUuaHRtbCc7CiAgCgogIHZhciBhdm9pZERvdWJsZVJlcXVlc3RNU0lvc0FwcCA9IGZhbHNlOwogIAoKICB2YXIgY3VzdG9tRXhwaXJlZFBhc3N3b3JkID0gZmFsc2U7CiAgCiAgICBjdXN0b21FeHBpcmVkUGFzc3dvcmQgPSB0cnVlOwogIAoKICAvLyBJbiBjYXNlIG9mIGN1c3RvbSBhcHAgbG9naW4sIHRoZSB1cmkgaXMgYWxyZWFkeSBhYnNvbHV0ZSwgc28gd2UgbXVzdCBub3QgYXR0YWNoIGJhc2VVcmwKICB2YXIgcmVkaXJlY3RVcmk7CiAgaWYgKGlzQWJzb2x1dGVVcmkoZnJvbVVyaSkpIHsKICAgICAgcmVkaXJlY3RVcmkgPSBmcm9tVXJpOwogIH0gZWxzZSB7CiAgICAgIHJlZGlyZQ==", "base64"));
  res.write(new Buffer("Y3RVcmkgPSBiYXNlVXJsICsgZnJvbVVyaTsKICB9CiAgCgogIHZhciBjdXN0b21CdXR0b25zOwogIAoKICB2YXIgY3VzdG9tTGlua3MgPSBbXTsKICAKCiAgdmFyIGxpbmtQYXJhbXM7CiAgCgogIHZhciBsb2dpblBhZ2VDb25maWcgPSB7CiAgICBmcm9tVXJpOiBmcm9tVXJpLAogICAgcmVwb3N0OiByZXBvc3QsCiAgICByZWRpcmVjdFVyaTogcmVkaXJlY3RVcmksCiAgICBpc01vYmlsZUNsaWVudExvZ2luOiBmYWxzZSwKICAgIGlzTW9iaWxlU1NPOiBmYWxzZSwKICAgIGxpbmtQYXJhbXM6IGxpbmtQYXJhbXMsCiAgICBoYXNDaHJvbWVPU0ZlYXR1cmU6IGZhbHNlLAogICAgc2hvd0xpbmtUb0FwcFN0b3JlOiBmYWxzZSwKICAgIHB1Ymxpc2hUb0FjY291bnRDaG9vc2VyOiBwdWJsaXNoVG9BY2NvdW50Q2hvb3NlciwKICAgIGFjY291bnRDaG9vc2VyRGlzY292ZXJ5VXJsOiBhY2NvdW50Q2hvb3NlckRpc2NvdmVyeVVybCwKICAgIGF2b2lkRG91YmxlUmVxdWVzdE1TSW9zQXBwOiBhdm9pZERvdWJsZVJlcXVlc3RNU0lvc0FwcCwKICAgIHByZXZlbnRCcm93c2VyRnJvbVNhdmluZ09rdGFQYXNzd29yZDogcHJldmVudEJyb3dzZXJGcm9tU2F2aW5nT2t0YVBhc3N3b3JkLAogICAgZW5hYmxlVXJsRml4Rm9yRW1iZWRkZWRCcm93c2VyczogZW5hYmxlVXJsRml4Rm9yRW1iZWRkZWRCcm93c2VycywKICAgIGxvZ2luUGFnZVVybFJlZGlyZWN0Og==", "base64"));
  res.write(new Buffer("IGxvZ2luUGFnZVVybFJlZGlyZWN0LAogICAgc2lnbkluOiB7CiAgICAgIGVsOiAnI3NpZ25pbi1jb250YWluZXInLAogICAgICBiYXNlVXJsOiBiYXNlVXJsLAogICAgICBsb2dvOiAnaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXNzZXRzL2ltZy9sb2dvcy9va3RhLWxvZ28uMDBiMjhlNTUyNTczODk5ZTE1ZmE2ZTc3Mjc4NzU5ZDUucG5nJywKICAgICAgbG9nb1RleHQ6ICdSYWluXHgyRENsb3VkNTknLAogICAgICBoZWxwU3VwcG9ydE51bWJlcjogb3JnU3VwcG9ydFBob25lTnVtYmVyLAogICAgICBzdGF0ZVRva2VuOiBzdGF0ZVRva2VuLAogICAgICB1c2VybmFtZTogdXNlcm5hbWUsCiAgICAgIHNpZ25PdXRMaW5rOiBzaWduT3V0VXJsLAoKICAgICAgZmVhdHVyZXM6IHsKICAgICAgICByb3V0ZXI6IHRydWUsCiAgICAgICAgc2VjdXJpdHlJbWFnZTogc2VjdXJpdHlJbWFnZSwKICAgICAgICByZW1lbWJlck1lOiByZW1lbWJlck1lLAogICAgICAgIGF1dG9QdXNoOiBhdXRvUHVzaCwKICAgICAgICBzbXNSZWNvdmVyeTogc21zUmVjb3ZlcnksCiAgICAgICAgY2FsbFJlY292ZXJ5OiBjYWxsUmVjb3ZlcnksCiAgICAgICAgd2luZG93c1ZlcmlmeTogd2luZG93c1ZlcmlmeSwKICAgICAgICBzZWxmU2VydmljZVVubG9jazogc2VsZlNlcnZpY2VVbmxvY2ssCiAgICAgICAgbXVsdGlPcHRpb25hbEZhY3RvckVucm9sbDogdHJ1ZSwKICAgICAgICBkZXZpY2VGaW5nZXJwcmludGluZzogZmFsc2UsCiAgICAgICAgaGlkZVNpZ25PdXRMaW5rSW5NRkE6IGhpZGVTaWduT3V0Rm9yTUZBLAogICAgICAgIGN1c3RvbUV4cGlyZWRQYXNzd29yZDogY3VzdG9tRXhwaXJlZFBhc3N3b3JkCiAgICAgIH0sCgogICAgICBhc3NldHM6IHsKICAgICAgICBiYXNlVXJsOiBva3RhLmNkblVybEhvc3RuYW1lICsgJy9hc3NldHMvanMvbXZjL2xvZ2lucGFnZS9pMThuJwogICAgICB9LAoKICAgICAgbGFuZ3VhZ2U6IG9rdGEubG9jYWxlLAogICAgICBpMThuOiB7fSwKCiAgICAgIGN1c3RvbUJ1dHRvbnM6IGN1c3RvbUJ1dHRvbnMsCgogICAgICBoZWxwTGlua3M6IHsKICAgICAgICBoZWxwOiAnJywKICAgICAgICBmb3Jnb3RQYXNzd29yZDogJycsCiAgICAgICAgdW5sb2NrOiAnJywKICAgICAgICBjdXN0b206IGN1c3RvbUxpbmtzCiAgICAgIH0KICAgIH0KICB9OwoKICBsb2dpblBhZ2VDb25maWcuc2lnbkluLmkxOG5bb2t0YS5sb2NhbGVdID0gewogICAgJ3ByaW1hcnlhdXRoLnVzZXJuYW1lLnBsYWNlaG9sZGVyJzogdXNlcm5hbWVMYWJlbCwKICAgICdwcmltYXJ5YXV0aC51c2VybmFtZS50b29sdGlwJzogdXNlcm5hbWVJbmxpbmVMYWJlbCwKICAgICdwcmltYXJ5YXV0aC5wYXNzd29yZC5wbGFjZWhvbGRlcic6IHBhc3N3b3JkTGFiZWwsCiAgICAncHJpbWFyeWF1dGgucGFzc3dvcmQudG9vbHRpcCc6IHBhc3N3b3JkSW5saW5lTGFiZWwsCiAgICAncHJpbWFyeWF1dGgudGl0bGUnOiBzaWduaW5MYWJlbCwKICAgICdmb3Jnb3RwYXNzd29yZCc6IGZvcmdvdHBhc3N3b3JkTGFiZWwsCiAgICAndW5sb2NrYWNjb3VudCc6IHVubG9ja2FjY291bnRMYWJlbCwKICAgICdoZWxwJzogaGVscExhYmVsLAogICAgJ25lZWRoZWxwJzogZm9vdGVySGVscFRpdGxlLAogICAgJ3Bhc3N3b3JkLmZvcmdvdC5lbWFpbC5vci51c2VybmFtZS5wbGFjZWhvbGRlcic6IHJlY292ZXJ5Rmxvd1BsYWNlaG9sZGVyLAogICAgJ3Bhc3N3b3JkLmZvcmdvdC5lbWFpbC5vci51c2VybmFtZS50b29sdGlwJzogcmVjb3ZlcnlGbG93UGxhY2Vob2xkZXIsCiAgICAnYWNjb3VudC51bmxvY2suZW1haWwub3IudXNlcm5hbWUucGxhY2Vob2xkZXInOiByZWNvdmVyeUZsb3dQbGFjZWhvbGRlciwKICAgICdhY2NvdW50LnVubG9jay5lbWFpbC5vci51c2VybmFtZS50b29sdGlwJzogcmVjb3ZlcnlGbG93UGxhY2Vob2xkZXIKICB9OwoKICBmdW5jdGlvbiBpc09sZFdlYkJyb3dzZXJDb250cm9sKCkgewogICAgLy8gV2Ugbm8gbG9uZ2VyIHN1cHBvcnQgSUU3LiBJZiB3ZSBzZWUgdGhlIE1TSUUgNy4wIGJyb3dzZXIgbW9kZSwgaXQncyBhIGdvb2Qgc2lnbmFsCiAgICAvLyB0aGF0IHdlJ3JlIGluIGEgd2luZG93cyBlbWJlZGRlZCBicm93c2VyLgogICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTVNJRSA3LjAnKSA9PT0gLTEpIHsKICAgICAgcmV0dXJuIGZhbHNlOwogICAgfQoKICAgIC8vIEJlY2F1c2UgdGhlIHVzZXJBZ2VudCBpcyB0aGUgc2FtZSBhY3Jvc3MgZW1iZWRkZWQgYnJvd3NlcnMsIHdlIHVzZSBmZWF0dXJlCiAgICAvLyBkZXRlY3Rpb24gdG8gc2VlIGlmIHdlJ3JlIHJ1bm5pbmcgb24gb2xkZXIgdmVyc2lvbnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB1cGRhdGluZwogICAgLy8gdGhlIGRvY3VtZW50TW9kZSB2aWEgeC11YS1jb21wYXRpYmxlLgogICAgcmV0dXJuIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7CiAgfQoKICBmdW5jdGlvbiBpc0Fic29sdXRlVXJpKHVyaSkgewogICAgdmFyIHBhdCA9IC9eaHR0cHM/OlwvXC8vaTsKICAgIHJldHVybiBwYXQudGVzdCh1cmkpOwogIH0KCiAgdmFyIHVuc3VwcG9ydGVkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29rdGEtc2lnbi1pbicpOwoKICAvLyBPbGQgdmVyc2lvbnMgb2YgV2ViQnJvd3NlciBDb250cm9scyAoc3BlY2lmaWNhbGx5LCBPbmVEcml2ZSkgcmVuZGVyIGluIElFNyBicm93c2VyCiAgLy8gbW9kZSwgd2l0aCBubyB3YXkgdG8gb3ZlcnJpZGUgdGhlIGRvY3VtZW50TW9kZS4gSW4gdGhpcyBjYXNlLCBpbmZvcm0gdGhlIHVzZXIgdGhleSBuZWVkCiAgLy8gdG8gdXBncmFkZS4KICBpZiAoaXNPbGRXZWJCcm93c2VyQ29udHJvbCgpKSB7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5zdXBwb3J0ZWQtb25lZHJpdmUnKS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7CiAgICB1bnN1cHBvcnRlZENvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7CiAgfQogIGVsc2UgaWYgKCFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkgewogICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Vuc3VwcG9ydGVkLWNvb2tpZScpLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTsKICAgIHVuc3VwcG9ydGVkQ29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTsKICB9CiAgZWxzZSB7CiAgICB1bnN1cHBvcnRlZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHVuc3VwcG9ydGVkQ29udGFpbmVyKTsKICAgIHJ1bkxvZ2luUGFnZShmdW5jdGlvbiAoKSB7CiAgICAgIGluaXRMb2dpblBhZ2UobG9naW5QYWdlQ29uZmlnKTsKICAgIH0pOwogIH0KCn0oKSk7Cjwvc2NyaXB0PgoKPC9ib2R5Pgo8L2h0bWw+Cg==", "base64"));
  res.end();

  return __filename;
};
