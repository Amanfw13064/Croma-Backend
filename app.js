const express=require('express')

const app=express()

app.use(express.json())

const cromapayController=require('./controllers/cromapayController')

const paymentController=require('./controllers/paymentController')

const passport=require('./config/passport')

const productController=require('./controllers/productController')

const addtocartController=require('./controllers/addtocartController')

const productController2=require('./controllers/productController2')

const serachController=require('./controllers/searchController')

const otpController=require('./controllers/otpController')

const {signup,signin}=require('./controllers/authController')

app.use('/signup',signup)

app.use('/signin',signin)

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        // successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}),(req,res)=>{
    res.redirect('/Mobiles');
    // res.send({user:req.user.user,token:req.user.token})
}
);

app.use('/Home',productController)

app.use('/Mobiles',productController2)

app.use('/addtocart',addtocartController)

app.use('/Search',serachController)

app.use('/payment',paymentController)

app.use('/cromaPay',cromapayController)

app.use('/Otp',otpController)

app.set('view engine','ejs')

app.use(express.static('public'))

module.exports=app