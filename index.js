const express = require('express');
const bodyParser = require('body-parser');
const { getAllTalkers, getTalkerId, generateToken } = require('./actions');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  try {
    const allTalkers = await getAllTalkers();
    return res.status(200).json(allTalkers);
  } catch (error) {
    console.error(error);
    return res.status(200).json([]);
  }
});

app.get('/talker/:id', async (req, res) => {
    const { id } = req.params;
    const thetalkers = await getTalkerId(id);
    if (!thetalkers) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } 
      return res.status(200).json(thetalkers);
});

app.post('/login', async (req, res) => {
  const { email, password } = await req.body;
  console.log(email);
  if (!email || !password) {
    return res.status(400).json({ message: 'incorrect email or password' });
  }
  return res.status(200).json({ token: generateToken() });
});

app.listen(PORT, () => {
  console.log('Online');
});
