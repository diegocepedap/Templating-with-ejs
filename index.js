const express = require('express');
const app = express();
const port = 3000;
//EJS is our view engine
app.set("view engine","ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  //res.send('Home Page');
  let title = "Node/Express/EJS";
  res.render("pages/index",{"title":title});
});
app.get('/home', (req, res) => {
  //res.send('Home Page');
  let title = "Home";
  res.render("pages/home",{"title":title});
});

app.get('/about', (req, res) => {
  //res.send('Home Page');
  let title = "About ";
  res.render("pages/about",{"title":title});
});

app.get('/projects', (req, res) => {
  //res.send('Home Page');
  let title = "projects ";
  res.render("pages/projects",{"title":title});
});

app.get('/contact', (req, res) => {
  //res.send('Home Page');
  let title = "contact";
  res.render("pages/contact",{"title":title});
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


