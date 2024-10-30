const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./auth')
const express = require('express');
const app = express();

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${applget('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

if (applget('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled...');
}

app.use(logger);

app.use(auth); 

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) =>{ // this is how we define a route
    res.send('Hello World!')
})

app.get('/api/courses', (req, res) => {
    res.send(courses);
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.post('/api/courses', (req, res) =>{
    const { error } = validateCourse(req.body);  // error.result
    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message)
        return; 
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    req.send(course);
});

app.put('/api/courses/:id', (req, res) =>{
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    const { error } = validateCourse(req.body);  // error.result
    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message)
        return; 
    }

    // Update course
    course.name = req.body.name;
    // Return the upsated course
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    // Look up the course
    // Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course
    res.send(course);
})

function validateCourse(course) {
     // Validate
    // If invalid, return 400 - Bad request
    const schema = {
        name: Joi.string().min(6).required()
    };

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port port ${port}...`))