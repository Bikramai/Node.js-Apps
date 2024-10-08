const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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

// Logic
    // Look up the course
    // If not existing, return 404
    
    // Validate
    // If invalid, return 400 - Bad request

    // Update course
    // Return the updated course


app.put('/api/courses/:id', (req, res) =>{
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');

    const { error } = validateCourse(req.body);  
    if (error) {
        res.status(400).send(error.details[0].message)
        return; 
    }

    // Update course
    course.name = req.body.name;
    // Return the upsated course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(6).required()
    };

    return Joi.validate(course, schema);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port port ${port}...`))