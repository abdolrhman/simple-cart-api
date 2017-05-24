## Endpoints

    POST order/track

## Description
This endpoint used to track shipment status of an order.

***

## Requires authentication
A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

***

## Parameters
- **trackingNumber** _(required)_ — Tracking number of an order.

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/order/track \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d trackingNumber=CGX9378NM
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
    "shipping": {
        "name": "husnul anwari",
        "phone": "081216866613",
        "email": "husnulhamidiah@gmail.com",
        "address": "jl.kaliurang km 5.5 no.112, depok, sleman, yogyakarta",
        "trackingNumber": "CGX9378NM",
        "status": "shipped"
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