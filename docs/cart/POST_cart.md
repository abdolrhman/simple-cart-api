## Endpoints

    POST cart

## Description
This endpoint used add a product to cart.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **productId** _(required)_ — The product id that will be added to cart.
- **quantity** — The quantity of the product. Default is 1.

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/cart \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'productId=SKU160745&quantity=2'
```

**Success Response**

``` json
{
  "status": "OK",
  "message": "Product SKU160745 has been added to cart"
}
```

**Failure Response**

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```