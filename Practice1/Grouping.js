const students = [
  {
    name: "Aarav Sharma",
    age: 16,
    category: "General",
    height: 170,
    weight: 60,
    rollNo: 101,
  },
  {
    name: "Meera Patel",
    age: 17,
    category: "OBC",
    height: 160,
    weight: 55,
    rollNo: 102,
  },
  {
    name: "Rohan Das",
    age: 15,
    category: "SC",
    height: 165,
    weight: 58,
    rollNo: 103,
  },
  {
    name: "Sneha Iyer",
    age: 16,
    category: "ST",
    height: 158,
    weight: 50,
    rollNo: 104,
  },
  {
    name: "Aditya Verma",
    age: 18,
    category: "General",
    height: 172,
    weight: 65,
    rollNo: 105,
  },
  {
    name: "Priya Mehta",
    age: 17,
    category: "OBC",
    height: 162,
    weight: 54,
    rollNo: 106,
  },
  {
    name: "Vikram Singh",
    age: 16,
    category: "SC",
    height: 168,
    weight: 59,
    rollNo: 107,
  },
  {
    name: "Anjali Rao",
    age: 15,
    category: "ST",
    height: 155,
    weight: 52,
    rollNo: 108,
  },
  {
    name: "Rahul Sen",
    age: 17,
    category: "General",
    height: 169,
    weight: 61,
    rollNo: 109,
  },
  {
    name: "Neha Kapoor",
    age: 16,
    category: "OBC",
    height: 161,
    weight: 53,
    rollNo: 110,
  },
  {
    name: "Mohit Yadav",
    age: 18,
    category: "SC",
    height: 167,
    weight: 63,
    rollNo: 111,
  },
  {
    name: "Divya Jain",
    age: 15,
    category: "ST",
    height: 157,
    weight: 51,
    rollNo: 112,
  },
  {
    name: "Arjun Reddy",
    age: 16,
    category: "General",
    height: 171,
    weight: 66,
    rollNo: 113,
  },
  {
    name: "Kavya Nair",
    age: 17,
    category: "OBC",
    height: 163,
    weight: 56,
    rollNo: 114,
  },
  {
    name: "Nikhil Bhatt",
    age: 15,
    category: "SC",
    height: 164,
    weight: 57,
    rollNo: 115,
  },
  {
    name: "Pooja Sinha",
    age: 16,
    category: "ST",
    height: 156,
    weight: 50,
    rollNo: 116,
  },
  {
    name: "Siddharth Kumar",
    age: 17,
    category: "General",
    height: 173,
    weight: 68,
    rollNo: 117,
  },
  {
    name: "Ishita Joshi",
    age: 16,
    category: "OBC",
    height: 160,
    weight: 52,
    rollNo: 118,
  },
  {
    name: "Yashwant Rana",
    age: 18,
    category: "SC",
    height: 169,
    weight: 64,
    rollNo: 119,
  },
  {
    name: "Lakshmi Menon",
    age: 15,
    category: "ST",
    height: 154,
    weight: 49,
    rollNo: 120,
  },
];

//Students by category of General

const groupByGeneral = students.reduce((acc, ele) => {
  // console.log(category)
  if (ele.category === "General") {
    if (acc.hasOwnProperty(ele.category)) {
      acc[ele.category].push(ele);
    } else {
      acc[ele.category] = [];
    }
  }

  return acc;
}, {});
console.log(groupByGeneral);

//Group by Category
const groupByCategory = students.reduce((acc, ele) => {
  // console.log(category)

  if (acc.hasOwnProperty(ele.category)) {
    acc[ele.category].push(ele);
  } else {
    acc[ele.category] = [];
  }

  return acc;
}, {});
console.log(groupByCategory);
