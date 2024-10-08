const express = require('express');
const app = express();

app.get('/', (req, res) =>{ // this is how we define a route
    res.send('Hello World!')
})

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
})

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

// query by name
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port port ${port}...`))