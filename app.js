const express = require('express');
let app = express();
let PORT = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/messages'))

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})