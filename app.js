const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;


app.use('/css', express.static(path.join(__dirname, 'css')));


app.use('/js', express.static(path.join(__dirname, 'js')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// TODO: Add New Pages to the ZetroixOS website (Soon)


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});