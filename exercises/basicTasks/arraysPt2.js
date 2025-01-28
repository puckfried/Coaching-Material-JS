const people = [
    {
        id: 1,
        name: "Anna Meier",
        age: 25,
        birthdate: "1998-06-15",
        hobbies: ["Reading", "Swimming", "Photography"],
        online: true,
        friends: [2, 5, 10],
        email: "anna.meier@gmail.com"
    },
    {
        id: 2,
        name: "Ben Schneider",
        age: 30,
        birthdate: "1993-02-20",
        hobbies: ["Hiking", "Programming", "Cooking"],
        online: false,
        friends: [1, 3, 7],
        email: "ben.schneider@yahoo.com"
    },
    {
        id: 3,
        name: "Carla Schmidt",
        age: 27,
        birthdate: "1996-11-10",
        hobbies: ["Traveling", "Music", "Yoga"],
        online: true,
        friends: [2, 4, 8],
        email: "carla.schmidt@hotmail.com"
    },
    {
        id: 4,
        name: "David Weber",
        age: 32,
        birthdate: "1991-08-05",
        hobbies: ["Guitar", "Running", "Crafting"],
        online: false,
        friends: [3, 6, 9],
        email: "david.weber@proton.me"
    },
    {
        id: 5,
        name: "Elena Fischer",
        age: 24,
        birthdate: "1999-04-25",
        hobbies: ["Writing", "Photography", "Gaming"],
        online: true,
        friends: [1, 7, 12],
        email: "elena.fischer@web.de"
    },
    {
        id: 6,
        name: "Felix Bauer",
        age: 29,
        birthdate: "1994-09-12",
        hobbies: ["Basketball", "Cooking", "Reading"],
        online: false,
        friends: [4, 8, 11],
        email: "felix.bauer@gmail.com"
    },
    {
        id: 7,
        name: "Gina Hoffmann",
        age: 26,
        birthdate: "1997-07-30",
        hobbies: ["Painting", "Jogging", "Programming"],
        online: true,
        friends: [2, 5, 13],
        email: "gina.hoffmann@yahoo.com"
    },
    {
        id: 8,
        name: "Hannes Wolf",
        age: 31,
        birthdate: "1992-01-18",
        hobbies: ["Fishing", "Camping", "Guitar"],
        online: false,
        friends: [3, 6, 14],
        email: "hannes.wolf@hotmail.com"
    },
    {
        id: 9,
        name: "Isabel Krüger",
        age: 28,
        birthdate: "1995-03-22",
        hobbies: ["Swimming", "Reading", "Photography"],
        online: true,
        friends: [4, 10, 15],
        email: "isabel.krueger@proton.me"
    },
    {
        id: 10,
        name: "Jonas Wagner",
        age: 23,
        birthdate: "2000-05-11",
        hobbies: ["Learning languages", "Gaming", "Traveling"],
        online: false,
        friends: [1, 9, 16],
        email: "jonas.wagner@web.de"
    },
    {
        id: 11,
        name: "Klara Müller",
        age: 35,
        birthdate: "1988-12-29",
        hobbies: ["Gardening", "Knitting", "Cooking"],
        online: true,
        friends: [6, 12, 17],
        email: "klara.mueller@gmail.com"
    },
    {
        id: 12,
        name: "Lukas Becker",
        age: 27,
        birthdate: "1996-06-03",
        hobbies: ["Programming", "Reading", "Photography"],
        online: false,
        friends: [5, 11, 18],
        email: "lukas.becker@yahoo.com"
    },
    {
        id: 13,
        name: "Maria Schulz",
        age: 22,
        birthdate: "2001-02-17",
        hobbies: ["Dancing", "Cooking", "Painting"],
        online: true,
        friends: [7, 14, 19],
        email: "maria.schulz@hotmail.com"
    },
    {
        id: 14,
        name: "Nico Braun",
        age: 33,
        birthdate: "1990-10-08",
        hobbies: ["Tennis", "Hiking", "Music"],
        online: false,
        friends: [8, 13, 20],
        email: "nico.braun@proton.me"
    },
    {
        id: 20,
        name: "Tina Hoffmann",
        age: 30,
        birthdate: "1993-07-07",
        hobbies: ["Yoga", "Traveling", "Tennis"],
        online: false,
        friends: [14, 15, 17],
        email: "tina.hoffmann@web.de"
    }
];


// Create functions with following functionality:


// 1. Create a function that returns an array of all the people who are currently online.
// 2. Create a function that calculates the average age of all the people. (Tip: Sum up all ages and divide by the number of people.)
// 3. Create a function that searches for a specific person by id and returns their details as an object.


// A bit more challenging:
// 4. Create a function that returns an array of objects. Each object should contain only the person's name and the day of the week on which they were born. 
//    (Tip: You can use the "new Date()" functionality to convert the birthdate string into a date object. Once you have a date, you can use the getDay() function to determine the weekday. The number representing the day is sufficient. -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay )


// 5. Create a function that updates the age, as it is not up to date. Override the stored age with the current age. 
//    (Tip: Again, create a date object from the birthdate and define a variable for today’s date using Date.now(). 
//    Then, calculate the time that has passed between today and the birthdate, like so: const timeGone = now - birthdate. 
//    This will give you a time difference in milliseconds, which you can then convert into years to determine the correct age.)
