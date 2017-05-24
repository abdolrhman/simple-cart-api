## Endpoints

    POST order/update

## Description
This endpoint used to update status of an order. There are three status that can be set :
  - **confirmed** — An order classified as valid by looking at user's name, phone, email, address and product in stock. This status also mean that the order has been shipped and has a tracking number.
  - **canceled** — An order is canceled and not process further whether user information is invalid or one of product in order is out of stock.
  - **archieved** — When an order has delivered, admin can set the order to archieved status.

***

## Requires authentication
- A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.
- User must have role as **admin**.

***

## Parameters
- **orderNumber** _(required)_ — User spesific order number.
- **status** _(required)_ — Name of the owner of the account used to pay. Available status is **confirmed**, **canceled**, **archieved**.
- **trackingNumber** — Tracking number from shipping vendor. Being _(required)_ if the status is **confirmed**

***

## Example
**Request**

``` bash
curl -X POST \
  http://127.0.0.1:8880/order/update \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d 'orderNumber=MTQ5NTUxNTIwMjgzMA%3D%3D&status=confirmed&trackingNumber=CGX9378NM'
```

**Success Response**

``` json
{
  "status": "OK",
  "message": "The order's status has been set to confirmed"
}
```

**Failure Response**

401 Unauthorized Request — The token for request was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```