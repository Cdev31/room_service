import passport from "passport"
import { jwtStrategy } from "./jwt.strategy"
import { localStrategy } from "./local.strategy"

passport.use( jwtStrategy )
passport.use( localStrategy )