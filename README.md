# IG Authentication

```bash
npm start
```

For local development/testing (getting https on localhost), paste server.key + server.crt into root dir.
https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/

## Get the User's pages:
```bash
curl -i -X GET \
"https://graph.facebook.com/v7.0/me/accounts?access_token={accessToken}"
```

### Response
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

## Get the Page's IG accounts:
```bash
curl -i -X GET \
 "https://graph.facebook.com/v7.0/'pageID'?fields=instagram_business_account&access_token={'accessToken'}"
```

### Response
```
{
  "instagram_business_account": {
    "id": ""  // ig user id
  },
  "id": ""  // page id
}
```

## Get Media Objects from Instagram
```bash
curl -i -X GET \
 "https://graph.facebook.com/v7.0/17841405822304914/media?access_token={access-token}"
```

### Response
```
{
  "data": [
    {
      "id": "17918195224117851"
    },
    {
      "id": "17895695668004550"
    },
    {
      "id": "17899305451014820"
    },
    {
      "id": "17896450804038745"
    },
    {
      "id": "17881042411086627"
    },
    {
      "id": "17869102915168123"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUkdGRXA2eHNNTUs4T1ZAXNGFxQTAtd3U4QjBLd1B2NXRMM1NkcnhqRFdBcEUzSDVJZATFoLWtXMWZAGU2VrRTk2RHVtTVlDckI2NjN0UERFa2JrUk4yMW13",
      "after": "QVFIUmlwbnFsM3N2cV9lZAFdCa0hDeV9qMVliT0VuMmJyNENxZA180c0t6VjFQVEJaTE9XV085aU92OUFLNFB6Szd2amo5aV9rTlVBcnNlWmEtMzYxcE1HSFR3"
    }
  }
}
```
