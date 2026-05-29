const router = require('express').Router();

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    req.session.authenticated = true;
    return res.json({ ok: true });
  }
  res.status(401).json({ error: 'Contraseña incorrecta' });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ ok: true });
});

module.exports = router;
