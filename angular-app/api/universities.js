const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  try {
    const response = await fetch('http://universities.hipolabs.com/search?country=canada');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API Proxy Error:', error);
    res.status(500).json({ error: 'Failed to fetch data from source API.' });
  }
};
