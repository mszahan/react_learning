import express from 'express';

const app = express()

// app.get('/hello', (req, res) => {
//     res.send('Hello');
// });

app.use(express.json());

app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
});

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}`);
});

app.listen(8000, ()=> {
    console.log('server is listening on port 8000')
})