## Endpoints

    POST order

## Description
This endpoint put existing cart to order and finalized. Once it on order, current user's cart is back to empty.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **name** _(required)_ — Current user's name.
- **phone** _(required)_ — Current user's phone number.
- **email** _(required)_ — Current user's email address.
- **address** _(required)_ — Current user's shipping address.

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/order \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'name=husnul%20anwari&phone=081216866613&email=husnulhamidiah%40gmail.com&address=jl.kaliurang%20km%205.5%20no.112%2C%20depok%2C%20sleman%2C%20yogyakarta'
```

**Success Response**

``` json
{
    "__v": 0,
    "status": "waiting payment",
    "subTotal": 250000,
    "grandTotal": 175000,
    "orderNumber": "MTQ5NTU5NDczMjc4MQ==",
    "_id": "5924f6ec9a8986693c6f1292",
    "payment": {
        "method": "Bank Transfer",
        "vendor": "Bank Central Asia",
        "reference": "6129305"
    },
    "shipping": {
        "name": "husnul anwari",
        "phone": "081216866613",
        "email": "husnulhamidiah@gmail.com",
        "address": "jl.kaliurang km 5.5 no.112, depok, sleman, yogyakarta",
        "trackingNumber": null,
        "status": null
    },
    "products": [
        {
            "_id": "5924c68c4ab81b53a0587f11",
            "sku": "SKU160745",
            "name": "Claudyta Monogram Flap Sling Bag",
            "price": 125000,
            "quantity": 2
        }
    ],
    "coupon": {
        "_id": "5924c68c4ab81b53a0587f16",
        "deal": "Promo Spesial Ramadhan",
        "promoCode": "PUASA30",
        "amount": 30
    },
    "user": {
        "_id": "5924c68c4ab81b53a0587f19",
        "name": "hamidiah",
        "role": "admin"
    }
}
```

**Failure Response**

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```