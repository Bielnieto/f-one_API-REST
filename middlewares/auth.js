const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Token requerit' });
    }
    const token = auth.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'claujwt');
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Token invàlid' });
    }
  } else {
    next();
  }
};
