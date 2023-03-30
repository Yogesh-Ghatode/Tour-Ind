const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const UserOTPVerifySchema = new Schema ({
    UserId : String,
    otp : String,
    createdAt : Date,
    expireAt : Date
});


const UserOTPVerify = mongoose.model(
    "userOTPVerify",
    UserOTPVerifySchema
)

module.exports = UserOTPVerify;