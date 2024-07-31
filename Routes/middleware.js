const tokenMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (token) {
      if (token === 'valid-token') {
        next();
      } else {
        res.status(401).send('Invalid token');
      }
    } else {
      res.status(401).send('No token provided');
    }
  };
  
  module.exports = tokenMiddleware;
  