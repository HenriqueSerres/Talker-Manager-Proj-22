const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const validationEmail = regexEmail.test(email);
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  } 
  if (!validationEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;  
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  } 
  if (password.length <= 5) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};