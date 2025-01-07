// Users object containing user details
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Task 1: Find the person with the most skills
const mostSkilledUser = Object.keys(users).reduce((max, user) => {
  // Compare the number of skills for each user and update the max user
  return users[user].skills.length > users[max].skills.length ? user : max;
}, Object.keys(users)[0]);
console.log("User with the most skills:", mostSkilledUser);

// Task 2: Count logged-in users and users with points >= 50
let loggedInCount = 0; // Counter for logged-in users
let points50OrMore = 0; // Counter for users with 50+ points

Object.values(users).forEach((user) => {
  // Check if the user is logged in
  if (user.isLoggedIn) loggedInCount++;
  // Check if the user has 50 or more points
  if (user.points >= 50) points50OrMore++;
});

console.log("Logged-in users:", loggedInCount);
console.log("Users with 50 or more points:", points50OrMore);

// Task 3: Find people who are MERN stack developers
const mernDevs = Object.keys(users).filter((user) => {
  // Extract the skills of the user
  const skills = users[user].skills;
  // Check if the user has all MERN stack skills
  return ['MongoDB', 'Express', 'React', 'Node'].every(skill => skills.includes(skill));
});
console.log("MERN stack developers:", mernDevs);

// Task 4: Add your name to the users object without modifying the original
const newUser = {
  ...users, // Spread operator to copy the existing users object
  YourName: {
    email: 'yourname@example.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'], // Adding your skills
    age: 22,
    isLoggedIn: true, // Set login status
    points: 100, // Add points
  },
};
console.log("Updated users object:", newUser);

// Task 5: Get all keys (properties) of the users object
const userKeys = Object.keys(users);
console.log("Keys of users object:", userKeys);

// Task 6: Get all values of the users object
const userValues = Object.values(users);
console.log("Values of users object:", userValues);

// Task 7: Print details of a country from the countries object
const countries = {
  USA: { capital: "Washington, D.C.", population: 331000000, languages: ["English"] },
  India: { capital: "New Delhi", population: 1380000000, languages: ["Hindi", "English"] },
  Japan: { capital: "Tokyo", population: 126000000, languages: ["Japanese"] },
};

Object.entries(countries).forEach(([country, details]) => {
  // Destructure the country and details for each entry
  console.log(`Country: ${country}`);
  console.log(`Capital: ${details.capital}`);
  console.log(`Population: ${details.population}`);
  console.log(`Languages: ${details.languages.join(", ")}`); // Join languages into a comma-separated string
});
