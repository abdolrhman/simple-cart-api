## Endpoints

    GET cart

## Description
This endpoint used to retrieve cart summary of current user. This will expose cart metadata, item(s) in cart, price and coupon used.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
None.

***

## Example
**Request**

``` bash
curl -X GET \
  http://127.0.0.1:8880/cart/ \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
```

**Success Response**

``` json
{
    "orderId": "CART_hamidiah",
    "user": {
        "_id": "5924c68c4ab81b53a0587f19",
        "name": "hamidiah",
        "role": "admin"
    },
    "status": "incart",
    "subTotal": 250000,
    "coupon": {
        "_id": "5924c68c4ab81b53a0587f16",
        "deal": "Promo Spesial Ramadhan",
        "promoCode": "PUASA30",
        "amount": 30,
        "stock": 300
    },
    "grandTotal": 175000,
    "products": [
        {
            "_id": "5924c68c4ab81b53a0587f11",
            "sku": "SKU160745",
            "name": "Claudyta Monogram Flap Sling Bag",
            "price": 125000,
            "quantity": "2"
        }
    ]
}
```

**Failure Response**

401 Unauthorized Request — Request for the token was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```