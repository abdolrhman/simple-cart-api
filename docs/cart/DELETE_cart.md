## Endpoints

    DELETE cart

## Description
This endpoint used delete a product from cart.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **productId** _(required)_ — The product id that will be modified from cart.

***

## Example
**Request**

``` bash
curl -X DELETE \
  http://127.0.0.1:8880/cart/ \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d productId=SKU160745
```

**Success Response**

``` json
{
  "status": "OK",
  "message": "Product SKU160745 has been removed from cart"
}
```

**Failure Response**

200 Product not found — Product that will be deleted is not in the cart

``` json
{
  "status": "ERROR",
  "message": "Product SKU160745 was not found in cart"
}
```

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```
