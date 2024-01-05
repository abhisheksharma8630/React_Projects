require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("./models/users");

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/google/callback",
    scope:["profile","email"],
  },
  async function(request,accessToken, refreshToken, profile, done) {
    try{
      const user = await User.findOne({googleId:profile.id});
      if(!user){
        const newUser = new User({
          googleId:profile.id,
          displayName:profile.displayName,
          email:profile.emails[0].value,
          image:profile.photos[0].value,
        });
        await newUser.save();
      }
      return done(null,profile);
    }catch(error){
      return done(error,null);
    }

  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})