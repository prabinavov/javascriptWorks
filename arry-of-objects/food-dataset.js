//Task 21 || FOOD DATASET || 07-01-2026


const foods = [
  {
    id: 1,
    name: "Chicken Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 180,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 2,
    name: "Veg Biriyani",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: true,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "150g" },
      { item: "Spices", quantity: "20g" }
    ]
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Rice Batter", quantity: "150g" },
      { item: "Potato", quantity: "100g" }
    ]
  },
  {
    id: 4,
    name: "Idli",
    category: "Breakfast",
    cuisine: "South Indian",
    isVeg: true,
    price: 50,
    ingredients: [
      { item: "Rice Batter", quantity: "120g" }
    ]
  },
  {
    id: 5,
    name: "Vada",
    category: "Snack",
    cuisine: "South Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Urad Dal", quantity: "100g" }
    ]
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    cuisine: "North Indian",
    isVeg: true,
    price: 170,
    ingredients: [
      { item: "Paneer", quantity: "150g" },
      { item: "Butter", quantity: "30g" }
    ]
  },
  {
    id: 7,
    name: "Chicken Curry",
    category: "Main Course",
    cuisine: "Indian",
    isVeg: false,
    price: 160,
    ingredients: [
      { item: "Chicken", quantity: "150g" }
    ]
  },
  {
    id: 8,
    name: "Fish Curry",
    category: "Main Course",
    cuisine: "Kerala",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Fish", quantity: "150g" }
    ]
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 120,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Vegetables", quantity: "100g" }
    ]
  },
  {
    id: 10,
    name: "Chicken Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Rice", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },

  {
    id: 11,
    name: "Veg Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Noodles", quantity: "200g" }
    ]
  },
  {
    id: 12,
    name: "Chicken Noodles",
    category: "Main Course",
    cuisine: "Chinese",
    isVeg: false,
    price: 140,
    ingredients: [
      { item: "Noodles", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 13,
    name: "Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: false,
    price: 130,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Fast Food",
    cuisine: "American",
    isVeg: true,
    price: 110,
    ingredients: [
      { item: "Bun", quantity: "1 pc" },
      { item: "Veg Patty", quantity: "1 pc" }
    ]
  },
  {
    id: 15,
    name: "Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: true,
    price: 200,
    ingredients: [
      { item: "Cheese", quantity: "100g" },
      { item: "Flour", quantity: "200g" }
    ]
  },

  {
    id: 16,
    name: "Chicken Pizza",
    category: "Fast Food",
    cuisine: "Italian",
    isVeg: false,
    price: 250,
    ingredients: [
      { item: "Chicken", quantity: "120g" },
      { item: "Cheese", quantity: "100g" }
    ]
  },
  {
    id: 17,
    name: "Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: true,
    price: 160,
    ingredients: [
      { item: "Pasta", quantity: "200g" }
    ]
  },
  {
    id: 18,
    name: "Chicken Pasta",
    category: "Main Course",
    cuisine: "Italian",
    isVeg: false,
    price: 190,
    ingredients: [
      { item: "Pasta", quantity: "200g" },
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 19,
    name: "Samosa",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 20,
    ingredients: [
      { item: "Potato", quantity: "80g" }
    ]
  },
  {
    id: 20,
    name: "Pani Puri",
    category: "Snack",
    cuisine: "Indian",
    isVeg: true,
    price: 40,
    ingredients: [
      { item: "Puri", quantity: "6 pcs" }
    ]
  },

  {
    id: 21,
    name: "Falafel",
    category: "Snack",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Chickpeas", quantity: "100g" }
    ]
  },
  {
    id: 22,
    name: "Shawarma",
    category: "Fast Food",
    cuisine: "Arabic",
    isVeg: false,
    price: 150,
    ingredients: [
      { item: "Chicken", quantity: "120g" }
    ]
  },
  {
    id: 23,
    name: "Hummus",
    category: "Dip",
    cuisine: "Middle Eastern",
    isVeg: true,
    price: 80,
    ingredients: [
      { item: "Chickpeas", quantity: "150g" }
    ]
  },
  {
    id: 24,
    name: "Grilled Chicken",
    category: "Main Course",
    cuisine: "Continental",
    isVeg: false,
    price: 220,
    ingredients: [
      { item: "Chicken", quantity: "200g" }
    ]
  },
  {
    id: 25,
    name: "Salad",
    category: "Healthy",
    cuisine: "Global",
    isVeg: true,
    price: 90,
    ingredients: [
      { item: "Vegetables", quantity: "150g" }
    ]
  },

];

// 1. Create an array of all food names.
const foodNames = foods.map(food => food.name);

console.log(" 1. Create an array of all food names.");

 console.log("Food Names:", foodNames);


// 2. Create an array of food names with price in the format:  "Masala Dosa - ₹80".
const foodNamesWithPrice = foods.map(food => `${food.name} - ₹${food.price}`);

console.log("2. Create an array of food names with price in the format:");

console.log("Food Names with Price:", foodNamesWithPrice);


// 3. Create an array of all cuisines in uppercase.
const cuisinesUppercase = foods.map(food => food.cuisine.toUpperCase());

console.log("// 3. Create an array of all cuisines in uppercase.");


 console.log("Cuisines in Uppercase:", cuisinesUppercase);



// 4. Create an array of objects containing id and name only.
const idAndName = foods.map(food => ({ id: food.id, name: food.name }));

console.log("// 4. Create an array of objects containing id and name only.");


 console.log("ID and Name:", idAndName);

// 5. Create an array that shows only the prices of all foods.
const prices = foods.map(food => food.price);

console.log("// 5. Create an array that shows only the prices of all foods.");

console.log("Prices:", prices);

// 6. List all vegetarian foods.
const vegetarianFoods = foods.filter(food => food.isVeg).map(food => food.name);

console.log(" 6. List all vegetarian foods.");

console.log("Vegetarian Foods:", vegetarianFoods);


// 7. List all foods that belong to the "Main Course" category.
const mainCourseFoods = foods.filter(food => food.category === "Main Course").map(food => food.name);

console.log("7. List all foods that belong to the Main Course category");

 console.log("Main Course Foods:", mainCourseFoods);  

// 8. Find all foods with price less than 100.
const foodsUnder100 = foods.filter(food => food.price < 100).map(food => food.name);

console.log(" 8. Find all foods with price less than 100.");

 console.log("Foods under ₹100:", foodsUnder100);

//  9. List all foods whose cuisine is "Indian".
const indianFoods = foods.filter(food => food.cuisine === "Indian").map(food => food.name);

console.log(" 9. List all foods whose cuisine is Indian");


console.log("Indian Foods:", indianFoods);

// 10. Find all foods that contain "Chicken" as an ingredient.



// 11. Find the total price of all food items.
const totalPrice = foods.reduce((total, food) => total + food.price, 0);

console.log("11. Find the total price of all food items.");


console.log("Total Price of all foods:", totalPrice);

// 14. Create an object that shows total price by cuisine.



// 15. Find the most expensive food item.
var highestPricedFood = foods.reduce((max, food) => (food.price > max.price ? food : max), foods[0]);

console.log(" 15. Find the most expensive food item.");

console.log("Most Expensive Food Item:", highestPricedFood.name, "₹" + highestPricedFood.price);

// 16. Sort all foods by price (ascending order).
let foodsByPriceAsc = foods.sort((a, b) => a.price - b.price);

console.log("16. Sort all foods by price (ascending order).");


console.log("Foods sorted by Price (Ascending):", foodsByPriceAsc.map(food => `${food.name} - ₹${food.price}`));

// 17. Sort all foods by price (descending order).
let foodsByPriceDesc = foods.sort((a, b) => b.price - a.price);

console.log(" 17. Sort all foods by price (descending order).");

console.log("Foods sorted by Price (Descending):", foodsByPriceDesc.map(food => `${food.name} - ₹${food.price}`));

// 18. Sort foods by name alphabetically (A–Z).
let foodsByNameAsc = foods.sort((a, b) => a.name.localeCompare(b.name));

console.log("18. Sort foods by name alphabetically (A–Z).");

console.log("Foods sorted by Name (A-Z):", foodsByNameAsc.map(food => food.name));

// 19. Sort foods by category alphabetically.



