const User = require('../models/User');
const CustomError = require("../helper/error/CustomError");
const asyncErrorWrapper = require("express-async-handler"); // bu hazir try catch kitabxanasidi ozu avtomatik olaraq eroru tutur ve catch da return next(err) deyerek customErrorHandlere gonderir

const register = asyncErrorWrapper(async (req, res, next) => {
    // POST DATA


    const { name, email, password, role } = req.body;
    // asynce , await
    const user = await User.create({
        name: name,
        email: email,
        password: password
    });

    res
        .status(200)
        .json({
            sucess: true,
            data: user
        });


});

const errorTest = (req, res, next) => {
    return next(new SyntaxError("Custom Error Message", 400));
};

module.exports = {
    register,
    errorTest
};