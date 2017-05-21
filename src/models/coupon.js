import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CouponSchema = new Schema({
  deal: String,
  amount: Number,
  quantity: Number
});

CouponSchema.options.toJSON = CouponSchema.options.toJSON || {};

const Coupon = mongoose.model('coupon', CouponSchema);
export default Coupon;