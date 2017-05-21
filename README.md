# Simple Cart API
> A simple cart API built on top Node.js, Express, MongoDB and Redis

### Objective

Design and implement Service(s) for handling Order Transaction with domain driven approach using any framework in your favorite language. Please use the following requirement and rule when working on the assessment. Your assessment will be scored based on the key indicators stated in Assessment Aspects section.

The service will be serving as backend API for a client app in a RESTful manner with JSON as data format. It's best to focus on the main domain here: Order Transaction. You are free to add your assumption to ease your work, for any additional assumption please include in your readme file. Should have any concern or need any clarification, please reach out.

Develop the task with the mindset that it must be ready for production. A great plus if the app is deployed to hosting (heroku/aws/azure/digital ocean). Please push the source code into your github/bitbucket repository and we will review the codes. 

### Requirement

The situation in an online store are stated below. This scenario we would like to focus on basic transaction that happens in general online store in Indonesia. 
1. Order transaction involves the following actors: customer and admin.
2. Product dictionary → free to define product metadata and values as necessary, can be hardcoded,
    - [ ] Product has quantity; product with quantity 0 can not be ordered
3. Coupon dictionary → free to define coupon metadata and values as necessary, can be hardcoded
    - [ ] Coupon has certain date range validity and quantity
    - [ ] Coupon has certain amount of discount, can be percentage or nominal
    - [ ] Coupon can be applied to order before submission
4. Order transaction process flow and verification; single transaction has the following steps:
    - [x] Customer can add product to an order
    - [ ] Customer can apply one coupon to order, only one coupon can be applied to order
    - [ ] Customer can submit an order and the order is finalized
    - [ ] Customer can only pay via bank transfer
    - [ ] When placing order the following data is required: name, phone number, email, address
    - [ ] When an order is submitted, the quantity for ordered product will be reduced based on the quantity.
    - [ ] When an order is submitted, the quantity of the coupon will be reduced based on the applied coupon
    - [ ] An order is successfully submitted if fulfills all of the following condition:
        1. Applied coupon is valid
        2. All ordered products is available.
    - [ ] After an order is submitted, customer will be required to submit payment proof
    - [ ] After an order is submitted, the order is accessible to admin and ready to be processed
    - [ ] Admin can view order detail
    - [ ] Admin can verify the validity of order data: customer name, phone, email, address, payment proof
        1. Given an order is valid, then Admin will prepare the ordered items for shipment
        2. Given and order is invalid, then Admin can cancel the order
    - [ ] After an order ready for shipment, Admin ship process ordered items via logistic partner
    - [ ] After shipping the ordered items via logistic partner, Admin will mark the order as shipped and update the order with Shipping ID
    - [ ] Customer can check the order status for the submitted order
    - [ ] Customer can check the shipment status for the submitted order using Shipping ID