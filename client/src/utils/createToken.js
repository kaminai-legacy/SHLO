import jwt from 'jsonwebtoken';

const createToken = async(contain,secret,time,algorithm) => {

    const token = await jwt.sign({...contain}, secret, {
        expiresIn: time,
        algorithm: algorithm,
    });
    //createToken(id, SECRETS_ACCESS, LIVE_TIME_ACCESS, ALGORITHM);
    return token;
};

export default createToken;