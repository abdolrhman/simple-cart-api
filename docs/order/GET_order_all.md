## Endpoints

    GET order/all

## Description
This endpoint used to retrieve all order summary. This will expose order metadata, item(s) in cart, price, shipping and coupon used.

***

## Requires authentication
- A valid authorized access token from **[<code>POST</code> user/login](https://github.com/husnulhamidiah/simple-cart-api/blob/master/docs/user/POST_user_login.md)** endpoint.

- User must have role as **admin**.


***

## Parameters
None

***

## Example
**Request**

``` bash
curl -X GET \
  http://127.0.0.1:8880/order/all \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_AUTHORIZED_ACCESS_TOKEN'
```

**Success Response**

``` json
[
    {
        "_id": "59243e2676cf706c92605994",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0NzQzMDU0Mg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "59243cf0b7838e6c28aaecd1",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "59243cf1b7838e6c28aaecd8",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "59243cf1b7838e6c28aaecd6",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592441610ce9ca70206f4363",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0ODI1NzM5Mw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "59243cf0b7838e6c28aaecd1",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "59243cf1b7838e6c28aaecd8",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "59243cf1b7838e6c28aaecd6",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924429a6f88d2716f32a6cb",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0ODU3MDU2Mg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592443715c1b537227748e52",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0ODc4NDk5Mw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592444b1902d4273f07ce150",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTEwNTc2Ng==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592444d8b4b5b6745b6a31a2",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTE0NDkwNw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592444e0b4b5b6745b6a31a3",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTE1MjQyOA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592444e2b4b5b6745b6a31a4",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTE1NDY5OQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "59244545d5e47274dcc65ba5",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTI1Mzc0OQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "59244548d5e47274dcc65ba6",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTI1NjEyNw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924455f1dc0887505ab28e3",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTI3OTg5OA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445a101c931754de26bd0",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTM0NTA5Mg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445b3f700957574cf7449",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 177500,
        "orderNumber": "MTQ5NTU0OTM2Mzg4OA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 29
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445baf700957574cf744a",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU0OTM3MDc3Nw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 30
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445bdf700957574cf744b",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 172500,
        "orderNumber": "MTQ5NTU0OTM3MzA5OQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 31
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445bef700957574cf744c",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 170000,
        "orderNumber": "MTQ5NTU0OTM3NDk4Ng==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 32
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445ca42a3ab759ceca462",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTM4NjY4MQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e342a3ab759ceca463",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMTg1Ng==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e442a3ab759ceca464",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMjU2Nw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e542a3ab759ceca465",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMzE2OA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e542a3ab759ceca466",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMzM1MQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e542a3ab759ceca467",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMzUyMg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e542a3ab759ceca468",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxMzgyMg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e642a3ab759ceca469",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxNDE2MA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592445e642a3ab759ceca46a",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQxNDYwNw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592446336efd7976282754e2",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQ5MTcxMg==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592446376efd7976282754e3",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQ5NTYxMw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924463a6efd7976282754e4",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTQ5ODcyNw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592446ba80567876e1156e07",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTYyNjUzOA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592446bf80567876e1156e08",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTYzMTUzNQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592446d6f457ab770a3cfe38",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTY1NDg5Nw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "59244784512a8e78041b8e23",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTgyODg0MQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592447d3a93a59784798a187",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTkwNzM2MQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592447fd35dddc78982f8635",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTk0OTcxMA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924481968c83678c6c41079",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU0OTk3NzgxNQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592448464a5cdd791ed05fca",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDAyMjE3Ng==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924492ed22c287a03ec4b47",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDI1NDA2MA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592449553e79377a366160d3",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDI5MzQwNw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592449ae4b8a087ae0f985eb",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDM4MjM1MA==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "592449cbbf390e7b377d178a",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDQxMTE0OQ==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "59244a21f332fd7bb337d3a2",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 167500,
        "orderNumber": "MTQ5NTU1MDQ5NzU4Mw==",
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
            "trackingNumber": null,
            "status": null
        },
        "products": [
            {
                "_id": "5924422930ee0c70e1f75e62",
                "sku": "SKU160745",
                "name": "Claudyta Monogram Flap Sling Bag",
                "price": 125000,
                "quantity": 2
            }
        ],
        "coupon": {
            "_id": "5924422a30ee0c70e1f75e69",
            "deal": "Promo Spesial Ramadhan",
            "promoCode": "PUASA30",
            "amount": 33
        },
        "user": {
            "_id": "5924422930ee0c70e1f75e67",
            "name": "hamidiah",
            "role": "admin"
        }
    },
    {
        "_id": "5924f6ec9a8986693c6f1292",
        "status": "waiting payment",
        "subTotal": 250000,
        "grandTotal": 175000,
        "orderNumber": "MTQ5NTU5NDczMjc4MQ==",
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
    },
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
]
```

**Failure Response**

401 Unauthorized Request — Request for the token was malformed, expired or invalid

``` json
{
  "msg": "invalid signature"
}
```