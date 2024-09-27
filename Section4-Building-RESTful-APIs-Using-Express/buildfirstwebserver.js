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

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port port ${port}...`))

// app.post()
// app.put()
// app.delete()

/*
Note - In this implementation, we don't have if blocks, 
we define new routeslike calling app.get, and with this 
structure as our application grow, we can move some of these around to 
different files.
*/
