/** @format */

const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


const users = [
    { id: 1, username: 'rishu.exe', fullName: 'Rishu Narayan', avatar: '/images/rishu.jpg' },
    { id: 2, username: 'codequeen01', fullName: 'Codi Chan', avatar: '/images/codi.jpg' },
    { id: 3, username: 'exToxicFriend', fullName: 'dev', avatar: '/images/overlord.jpg' },
  ];
  
const posts = [
    {
      id: 101,
      userId: 1,
      image: '/images/post1.jpeg',
      caption: 'Grinding code like it’s leg day.',
      likes: [2, 3],
      comments: [
        { userId: 2, text: "This caption's got more edge than your DSA game 🔥" },
        { userId: 3, text: 'Flexing that logic, bro.' },
      ],
      createdAt: '2025-04-25T10:30:00Z',
    },
    {
      id: 102,
      userId: 2,
      image: '/images/post2.png',
      caption: 'Built different. Coded better.',
      likes: [1],
      comments: [
        { userId: 1, text: 'Damn, that UI is smoother than my sleep schedule.' },
      ],
      createdAt: '2025-04-24T19:15:00Z',
    },
    {
      id: 103,
      userId: 3,
      image: '/images/post3.jpeg',
      caption: 'Deploy > Cry > Debug > Repeat.',
      likes: [1, 2],
      comments: [
        { userId: 2, text: 'Can relate, minus the deploy part 😭' },
      ],
      createdAt: '2025-04-23T14:00:00Z',
    },
  ];

app.get('/',(req, res) => {
  res.render("index.ejs",{users,posts})
  
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });