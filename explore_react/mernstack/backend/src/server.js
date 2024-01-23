import express from 'express';

let articleInfo = [
    {
        name: 'learn-rect',
        upvotes:0,
        comments: []
    },
    {
        name: 'learn-node',
        upvotes:0,
        comments: []
    },
    {
        name: 'mongodb',
        upvotes:0,
        comments: []
    },
]

const app = express()
app.use(express.json());



app.put('/api/articles/:name/upvote', (req, res) => {
    const {name} = req.params;
    const article = articleInfo.find(a => a.name === name);
    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} articles now has ${article.upvotes} upvotes `);

    } else {
        res.send('That article does not exist');
    }
})



app.post('/api/articles/:name/comments', (req, res) => {
    const {name} = req.params;
    const { postedBy, text } = req.body;

    const article = articleInfo.find(a => a.name === name);

    if (article) {
        article.comments.push({ postedBy, text });
        res.send(article.comments);
    } else {
        res.send('that article does\'t exist')
    }


})



app.get('/hello', (req, res) => {
    res.send('Hello');
});






// app.post('/hello', (req, res) => {
//     res.send(`Hello ${req.body.name}!`);
// });

// app.get('/hello/:name', (req, res) => {
//     const { name } = req.params;
//     res.send(`Hello ${name}`);
// });

app.listen(8000, ()=> {
    console.log('server is listening on port 8000')
})