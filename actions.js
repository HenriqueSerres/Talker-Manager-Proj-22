const fs = require('fs').promises;
const crypto = require('crypto');

const getAllTalkers = async () => {
  const allTalkers = await fs.readFile('./talker.json', 'utf8');
  const parseTalkers = JSON.parse(allTalkers);
  return parseTalkers;
};

const getTalkerId = async (id) => {
  const allTalkers = await getAllTalkers();
  const theTalker = allTalkers.find((talker) => Number(talker.id) === Number(id));
  return theTalker;
};

const addTalkers = async (talker) => {
 await fs.writeFile('./talker.json', JSON.stringify(talker));
};

const generateToken = () => crypto.randomBytes(8).toString('hex');

module.exports = {
  getAllTalkers,
  getTalkerId,
  generateToken,
  addTalkers,
};
