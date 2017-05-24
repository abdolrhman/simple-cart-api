## Endpoints

    PATCH cart

## Description
This endpoint used modify a product in cart. If product spesified is not in the cart, the product will be added.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **productId** _(required)_ — The product id that will be modified from cart.
- **quantity** — The quantity of the product. Default is 1.

***

## Example
**Request**

``` bash
curl -X PATCH \
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