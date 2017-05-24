## Endpoints

    POST order/verify

## Description
This endpoint used to verify current user order by submitting payment proof.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **orderNumber** _(required)_ — User spesific order number.
- **name** _(required)_ — Name of the owner of the account used to pay.
- **vendor** _(required)_ — Name of the bank used to pay.
- **reference** _(required)_ — Bank account number used to pay.

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/order/verify \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'orderNumber=MTQ5NTU0MzQ2NjI1Nw%3D%3D&name=Husnul%20Anwari&vendor=Bank%20Central%20Asia&reference=6312930'
```

**Success Response**

``` json
{
  "status": "OK",
  "message": "Your payment for MTQ5NTU0MzQ2NjI1Nw== is being verified"
}
```

**Failure Response**

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```