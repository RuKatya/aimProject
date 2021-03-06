const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public'));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})