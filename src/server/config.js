const path = require('path');
const root = path.resolve(__dirname, '../../');
require('dotenv').config();

module.exports = {
  root,
  public: path.resolve(root, 'dist'),
  //port: process.env.PORT,
  port: process.env.PORT || 3000,
};
