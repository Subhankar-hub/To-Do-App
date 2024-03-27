const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/add', (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const { index } = req.body;
    tasks.splice(index, 1);
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
