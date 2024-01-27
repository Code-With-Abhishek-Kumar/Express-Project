var express = require('express');
var router = express.Router();

const axios = require('axios')




// Certainly! The line let searchQuery = req.query.q || 'india';
//  is creating a variable named searchQuery to store the value of the 'q' query parameter 
//  from the request (req). If 'q' is not present or is falsy, it defaults to the string 'india'. 
//  In simpler terms, it sets up the search query variable with a default value of 'india'
//   if no specific value is provided in the request.

// // Jab aap value="<%-searchQuery %>" ka use karte hain, toh yeh EJS template mein 
// searchQuery variable ke current value ko input field ke value attribute mein set karta hai. 
// Aur jab aap form submit karenge, toh woh value q naam ke query parameter ke roop mein server
//  ko bheji jayegi.



router.get('/', async function news(req, res, next) {

  try {
    let searchQuery = req.query.q || 'irctc';
    const newsApi = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=51b3563d72ba452abcf704e8479c9748`);
    const Response = newsApi.data.articles;
    // res.send(Response)
    // console.log(Response)
    res.render('index',
    {articles:Response , 
    searchQuery: searchQuery})
  
  } catch (error) {
    if(error.requiest){
      // 3 way to show error
      console.log(error.Response.data)
      console.log(error.Response.status)
      console.log(error.Response.headers);
      res.status(500).send('Internal Server Error');
    }else if(error.requiest){
  console.log(error.requiest)
    }else{
      console.error('error', error.message)
    }
  }
  
});


router.get('/view', function(req, res, next) {
 res.send('hello')
});







module.exports = router;


