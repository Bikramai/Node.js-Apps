const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/
    },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"]
  },
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished},
      min: 10,
      max: 200,
  }
});

// In future need to fix this code is not working
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node.js Course",
    category: "-",
    author: "Bikram",
    tags: ["Node.js", "Backend"],
    isPublished: true,
    price: 15
  });

  try {
    const result = await course.save();
    console.log(result);
  }
  catch (ex) {
    console.log(ex.message);
  }
}

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

  const courses = await Course
    .find({ author: "Bikram", isPublished: true })
    // .skip((pageNumber - 1) * pageSize)
    .limit(10)
    .sort({ name: 1 })
    .countDocuments();
  console.log(courses);
}
async function updateCourse(id) {
  const course = await Course.findByIdAndUpdate(id, { 
    $set: {
      author: 'Jason',
      isPublished: false
    }
  }, { new: true}); 
  console.log(course);
}

async function removeCourse(id) {
  // const result = await Course.deleteOne({_id: id})  
  const course = await Course.findByIdAndDelete(id);
  console.log(course);
}

createCourse();

