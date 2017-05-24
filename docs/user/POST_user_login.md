## Endpoints

    POST user/login

## Description
This endpoint used to retrieve API token from username and password.

***

## Parameters
- **name** _(required)_ — The username or email address of the user to obtain a token for.
- **password** _(required)_ — The password of the user for which to obtain a token for.

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/user/login \
  -H 'accept: application/json' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'name=hamidiahs&password=password'
```

**Success Response**
``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGFtaWRpYWgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTU1ODI4Mzd9.BOdkGhoYNGZ4sddK_z4KZ-p2w1VpXqS3FvOYljBbzJM",
  "user": {
    "_id": "5924c68c4ab81b53a0587f19",
    "name": "hamidiah",
    "role": "admin"
  }
}
```

**Failure Response**

401 Unauthorized Request — Request uses wrong username and password combination

``` json
{
  "msg": "wrong username or password"
}
```