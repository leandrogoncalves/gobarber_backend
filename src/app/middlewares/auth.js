import jwt from 'jsonwebtoken';
import { promissify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // const decoded = await promissify(jwt.verify)(token, authConfig.secret);

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      req.userId = decoded.id;

      console.log(decoded);
    });

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
