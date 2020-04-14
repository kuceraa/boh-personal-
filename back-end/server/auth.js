const auth = {
  login: (req, res, next) => {
    const pool = req.app.get('pool');
    const qryStr = `
      select id,
        user_name,
        password,
        my_salt
      from public.login
      where user_name = $1
    `;
    const params = new Array(req.body.username);

    pool.selectOne(res, qryStr, params, 'user', next);
  },

  validate: (req, res) => {
    const bcrypt = require('bcrypt');
    const user = res.locals._user;
    const pwd = req.body.password;
    const saltStored=user.my_salt;
    const passwordStored = user.password;
    bcrypt.hash(pwd, saltStored, function(err, hashed){ 
      if(err){
        console.log(err.message);
      } 
      if(passwordStored === hashed){
        console.log({message:'success!'})
        res.status(200).json({message:'login success!'});
      }
      else{
        res.status(401).json({message:'incorrect password'});
      }
    });
  }
};

module.exports = auth;
