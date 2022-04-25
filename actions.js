const fs = require('fs').promises;

const getAllTalkers = async () => {
  const allTalkers = await fs.readFile('./talker.json', 'utf8');
  console.log(allTalkers);
  return allTalkers;
};
// getAllTalkers();
module.exports = {
  getAllTalkers,
};
