const express = require('express');
const bodyParser = require('body-parser');
const { getAllTalkers } = require('./actions');

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
    console.log(allTalkers);
    return res.status(200).send(allTalkers);
  } catch (error) {
    console.error(error);
    return res.status(200).send([]);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
