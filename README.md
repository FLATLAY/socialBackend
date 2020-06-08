# IG Authentication

```bash
npm start
```

For local development/testing (getting https on localhost), paste server.key + server.crt into root dir.
https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

```bash
curl -i -X GET \
"https://graph.facebook.com/v7.0/me/accounts?access_token={'accessToken'}"
```

```
HTTP/2 200 vary: Accept-Encoding etag: "f6eb2dbd4ed7aee364a5b8a1dbb5a73b14520290" x-app-usage: {
    "call_count": 0, "total_cputime":0, "total_time":0
}

date: Mon, 08 Jun 2020 19:12:38 GMT {
    "data":[ {
        "access_token":"",
        "category":"",
        "category_list":[ {
            "id": "", "name":"Blogger"
        }
        ],
        "name":"funmblr",
        "id":"",
        "tasks":["ANALYZE",
        "ADVERTISE",
        "MODERATE",
        "CREATE_CONTENT",
        "MANAGE"]
    }
    ],
    "paging": {
        "cursors": {
            "before": "", "after":"OTI2NTU0MjUxMDIwNzI5"
        }
    }
}
```
