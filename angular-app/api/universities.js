import type { VercelRequest, VercelResponse } from '@vercel/node';

const fetch = require('node-fetch');

module.exports = async function handler(req: VercelRequest, res: VercelResponse) {
  const url = 'http://universities.hipolabs.com/search?country=canada';

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);  // ✅ log the error

    res.status(500).json({ error: 'Failed to fetch university data' });
  }
}
