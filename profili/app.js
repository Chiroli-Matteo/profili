const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.get('/profili', (req, res) => {
    res.render('profili');
});

app.get('/profili/:id', (req, res) => {
    const personaId = req.params.id;
    res.render('persona', { personaId });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
