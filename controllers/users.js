const User = require('../models/user');
const randomstring = require("randomstring");
const passport = require('passport');
const nodemailer =  require("nodemailer");
const config  =  require('../config/config');
// const user = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to TourInd!');
            res.redirect('/campgrounds');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

const sendResetPasswordMail = async(name, email, token) =>{
    try {
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'yogeshghatode3@gmail.com',
                pass : config.emailPass
            }
        });

        const mailOptions = {
            from : 'yogeshghatode3@gmail.com',
            to : 'yogeshghatode1512@gmail.com',
            subject : "For reset Password in Tour-Ind",
            html : '<p> Hi '+ name +', Please copy the link and <a href="https:localhost:3000/reset-Pass?token='+token+'"> reset your password</a>.</p>'
        }

        transporter.sendMail( mailOptions, function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Mail has been send:- ", info.response);
            }
        })   

    } catch (error) {
        res.status(400).send({ success : false, msg : error});
    }
}

module.exports.forgetPass =  async (req, res) => {
    try {
        const userData =  User.find({ email : req.body.email});

        if(userData){
            const randomString = randomstring.generate();
            const data = User.updateOne({email : email}, {$set : { token: randomString} } );

            sendResetPasswordMail(userData.name, userData.email, randomString);

            res.status(200).send({ success : true, msg : "Please check your email." });
        }else{
            res.status(200).send({ success : true, msg : "This mail does not exists." })
        }
    } catch (error) {
        res.status(500).send({ success : false,  msg : error.message});
    }
}

module.exports.resetPass = async (req, res) => {
    try {
        const token = req.query.token;
        const tokenData = await User.findOne({ token : token })

        if(tokenData){
            const password = req.body.password;
            user.setPassword(password);
            res.status(200).send({ success: true, msg : "user password has been reset", data : tokenData});
        }
        else{
            res.status(200).send({ success : true, msg : "this link has been expired"});
        }

    } catch (error) {
        res.status(400).send({ success : false, msg : error.message});
    }
}


module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', "Goodbye!");
    res.redirect('/campgrounds');
}