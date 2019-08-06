import jwt from 'jsonwebtoken';

module.exports.createToken = (id, secret, time, algorithm) =>
  jwt.sign({
    idUser: id,
  }, secret, {
    expiresIn: time,
    algorithm: algorithm,
  });


