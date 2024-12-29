const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// In future need to fix this code is not working
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node.js Course",
    author: "Bikram",
    tags: ["Node.js", "Backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
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

updateCourse('677164458235356e0e9e4a21');




//   const pageNumber = 2;
//   const pageSize = 10;
//   // /api/courses?pageNumber=2&pageSize=10

//   const courses = await Course.find({ author: "Bikram", isPublish: true })
//     .skip((pageNumber - 1) * pageSize)
//     .limit(pageSize)
//     .sort({ name: 1 })
//     .countDocuments();
//   console.log(courses);
// }

// async function updateCourse(id) {
//   // Approach: Query first
//   // findById()
//   // Modify its properties
//   // save()
//   const course = await Course.findById(id);
//   if (!course) return;

//   course.isPublished = true;
//   course.author = "Another Author";

//   const result = await course.save();
//   console.log(result);

//   // Approach: Update first
//   // Update directly
//   // Optionally: get the updated document
// }

