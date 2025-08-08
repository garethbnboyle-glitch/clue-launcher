export default function handler(req, res) {
  const { group, tag } = req.query;

  if (!group || !tag) {
    return res.status(400).send('Missing group or tag parameter');
  }

  const scriptBaseURL = 'https://script.google.com/macros/s/AKfycbwoPeHmGpSTOAu6tW0G6dpMBFaW8W14DS1F0Yn934UnjV1rr1QYMHxS0xMxUaXxc9MAMg/exec';

  const redirectURL = `${scriptBaseURL}?group=${encodeURIComponent(group)}&tag=${encodeURIComponent(tag)}`;

  res.writeHead(302, {
    Location: redirectURL,
  });
  res.end();
}
