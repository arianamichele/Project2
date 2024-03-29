const User = require("../models/User");


const getLoginPage = (req, res) => res.render('login')

const getRegisterPage = (req, res) => res.render("register");

const registerUser = async (req, res) => {
    const user = await User.create({ ...req.body });
    req.flash('success_flash', 'You have successfully registered, please log in.')
    res.redirect('/login')
};

const loginUser = (passport) => {
    return passport.authenticate('local', {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
    })
}

const logoutUser = (req, res) => {
    console.log('here')
    req.logOut(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      })
    // res.redirect('/')
}

const googleSignin = (passport) => {
    return passport.authenticate("google", { scope: ["email", "profile"] });
}

const googleSigninCallback = (passport) => {
    return passport.authenticate("google", {
        successRedirect: "/dashboard",
        failureRedirect: "/login",
        failureFlash: true,
    });
}

module.exports = {
    getLoginPage,
    getRegisterPage,
    registerUser,
    loginUser,
    logoutUser,
    googleSignin,
    googleSigninCallback,
}