# IG Authentication

```bash
npm start
```

For local development/testing (getting https on localhost), paste server.key + server.crt into root dir.
https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

```bash
curl -i -X GET \
"https://graph.facebook.com/v7.0/me/accounts?access_token={'accessToken'}"
HTTP/2 200 vary: Accept-Encoding etag: "f6eb2dbd4ed7aee364a5b8a1dbb5a73b14520290" x-app-usage: {
    "call_count": 0, "total_cputime":0, "total_time":0
}
```
```
content-type: application/json;
charset=UTF-8 facebook-api-version: v7.0 strict-transport-security: max-age=15552000;
preload pragma: no-cache x-fb-rev: 1002216705 access-control-allow-origin: * cache-control: private,
no-cache,
no-store,
must-revalidate x-fb-trace-id: EbVYfo5N4cT x-fb-request-id: AHqQGH3qDp63Dadd1AJscY2 expires: Sat,
01 Jan 2000 00:00:00 GMT x-fb-debug: VUq7rR0FwdyeyEYW4GJyGvKdcoyp+4/hWcdwQXIBXWR94pHVDw+3Vu3SgTWMXltuz3jYxwhEySAqNxZC9HInCw==date: Mon,
08 Jun 2020 19:12:38 GMT alt-svc: h3-27=":443";
ma=3600 date: Mon,
08 Jun 2020 19:12:38 GMT {
    "data":[ {
        "access_token":"EAAIMjpcXy0IBANTZAha6J25WruX5I251h4tc8RWoYPdpwJ8ggP1LKZBJWZCcxkNGjlplsEw6VVzTWgwyqWm0McDlAhVZBpShDR5CkjIQJDPYPsqxxLfgRFf8EZBZAykVCFatTZCuoSXFNKVlQM5somYQuRhc9z3eGsqlFXsqw1ZAKJC37Ih4biWCmY5ZBojZBzgcHSo2zS1ZBr6VwZDZD",
        "category":"Blogger",
        "category_list":[ {
            "id": "361282040719868", "name":"Blogger"
        }
        ],
        "name":"funmblr",
        "id":"926554251020729",
        "tasks":["ANALYZE",
        "ADVERTISE",
        "MODERATE",
        "CREATE_CONTENT",
        "MANAGE"]
    }
    ],
    "paging": {
        "cursors": {
            "before": "OTI2NTU0MjUxMDIwNzI5", "after":"OTI2NTU0MjUxMDIwNzI5"
        }
    }
}
```
