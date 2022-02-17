const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const passport=require('passport')

require('dotenv').config()

const User=require('../models/userModel')

const {newToken}=require('../controllers/authController')

const {v4:uuidv4}=require('uuid')

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5555/auth/google/callback",
    passReqToCallback   : true
  },
  async function( profile, done) {
  console.log(profile?._json?.email)
  let user=await User.findOne({email:profile?._json?.email}).lean().exec()

  if(!user)
  {
      user=await User.create({email:profile?._json?.email,password:uuidv4(),roles:["customer"]})
  }
   const token=newToken(user)

    return done(null,{user,token} );
  }
));

module.exports=passport