const fs = require('fs').promises;

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

module.exports = {
  getAllTalkers,
  getTalkerId,
};
