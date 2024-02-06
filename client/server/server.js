const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


const distDir = path.join(__dirname, '../dist');

app.use(express.static(distDir));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
