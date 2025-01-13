// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author1 = { 
    name: 'Bikram'
}

let course1 = { 
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course2 = { 
    author: {
        name: 'Bikram' 
    }
}

// Hybrid
let author = { 
    name: 'Bikram',
    // 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Bikram'
    }   
}
