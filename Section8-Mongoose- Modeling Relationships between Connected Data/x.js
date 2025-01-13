// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY
let author = { 
    name: 'Bikram'
}

let course = { 
    author: 'id'
}

// Using Embedded Documents (Denormalization) -> PERFORMANCE
let course = { 
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
