## Endpoints

    DELETE coupon

## Description
This endpoint used to delete a coupon to existing cart.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **promoCode** _(required)_ — The promo code that will be deleted.

***

## Example
**Request**

``` bash
curl -X DELETE \
  http://127.0.0.1:8880/coupon \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d promoCode=PUASA30
```

**Success Response**

``` json
{
  "status": "OK",
  "message": "Your PUASA30 has been deleted"
}
```

**Failure Response**

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```