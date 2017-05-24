## Endpoints

    POST coupon

## Description
This endpoint used to apply a coupon to existing cart.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **promoCode** _(required)_ — The promo code that will be applied.

***

## Example
**Request**

``` bash
curl -X POST \
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
  "message": "Your PUASA30 promo code has been applied"
}
```

**Failure Response**

200 Already use a promo code — User trying to use another promo code in for the same cart.

``` json
{
  "status": "ERROR",
  "message": "You already use PUASA30 promo code"
}
```

200 Invalid promo code — The promo code used is invalid.

``` json
{
  "status": "ERROR",
  "message": "Invalid promo code PUASA30S"
}
```

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```