/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const ExpressError = require('../helpers/expressError');
const createTokenForUser = require('../helpers/createToken');
const bcrypt = require('bcrypt');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    let user = await User.register({username, password, first_name, last_name, email, phone});
    console.log(user)
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {

    const { username, password } = req.body;
    console.log(req.params.password)

   
    let user = await User.authenticate(username, password);
    if(!user){
      throw new ExpressError('Incorrect username/password', 401);
    }
    if (await bcrypt.compare(password, user.password) === false) {
      throw new ExpressError('Incorrect username/password', 401);
    }
    
    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;
