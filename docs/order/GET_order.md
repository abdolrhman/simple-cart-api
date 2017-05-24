## Endpoints

    GET order

## Description
This endpoint used to retrieve order summary of current user. This will expose order metadata, item(s) in cart, price, shipping and coupon used.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters

This parameter spesified as query string.

- **ref** _(required)_ — — User spesific order number.

***

## Example
**Request**

``` bash
curl -X GET \
  'http://127.0.0.1:8880/order/?ref=MTQ5NTU5Njc4MTQwMA%3D%3D' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN'
```

**Success Response**

``` json
{
    "_id": "5924feed9a8986693c6f1296",
    "status": "confirmed",
    "subTotal": 250000,
    "grandTotal": 175000,
    "orderNumber": "MTQ5NTU5Njc4MTQwMA==",
    "__v": 0,
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
        "trackingNumber": "CGX9378NM",
        "status": "shipped"
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

401 Unauthorized Request — Request for the token was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```