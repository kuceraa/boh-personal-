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
    const user = res.locals._user;
    const pwd = req.body.password;
    const pwdChk = user.password.split(' ')[0];

    // const hashed = domyhashthing(user.my_salt + pwd);

    if (pwdChk === pwd) {
      res.status(200).json({ id: user.id, username: user.user_name });
    } else {
      res.status(401).json({ message: 'You are not authorized.' });
    }
  }
};

module.exports = auth;
