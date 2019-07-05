const PORT = process.env.PORT|| 5000;
const express = require('express');
const app = express();


app.get('/', (req, res) => res.send('Hello dusa Florentine!'));

app.listen(PORT, () => console.log(`Example app listening 00on port ${PORT}!`));
