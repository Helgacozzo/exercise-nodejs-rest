import express from "express";
import path from "path";
import morgan from "morgan";
const app = express();

app.listen(3000, () => {
    console.log('il server è attivo e in ascolto');
});

app.use(morgan('dev'));

app.use(express.json());

app.get('/autori', (req, res) => {
    res.sendFile(path.resolve('./database/autori.json'));
});

app.post('/autori', (req, res) => {
    const nuoviAutori = req.body;
    res.sendFile(path.resolve('./database/autori.json'));
});


