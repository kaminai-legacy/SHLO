const { RefreshToken } = require('../models/index');

const { Secrets } = require('../utils/Consts');

module.exports.check = async (req, res, next) => {
  try {
    const id = req.user.id;
    console.log(req.user,"step2");
    const numberOfRefreshToken = await RefreshToken.count({ where: { userId: id } });
    if (numberOfRefreshToken >= 3) {
      const deleted = await RefreshToken.destroy({ where: { userId: id } });
    } else {
    }
    next();
  } catch (e) {
    next({ status: 400, message: 'Invalid request' });
  }
};

