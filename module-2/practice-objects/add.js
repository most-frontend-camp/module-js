function volumeOfBox(sizes) {
// Check if all required properties exist
  if (!sizes || !sizes.width || !sizes.length || !sizes.height) {
    throw new Error("Missing required properties in sizes object.");
  }
  
  // Destructuring assignment for cleaner access to properties
  const { width, length, height } = sizes;
  // Calculate volume using formula
  return width * length * height;
}


console.log(volumeOfBox({width: 2, length: 5, height: 1})) // 10

console.log(volumeOfBox({width: 4, length: 2, height: 2})) // 16

console.log(volumeOfBox({width: 2, length: 3, height: 5})) // 30