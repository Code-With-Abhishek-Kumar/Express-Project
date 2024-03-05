var express = require("express");
var router = express.Router();
const DetailModel = require("./details");
const Contact = require("./Contact");

// DetailModel.create({
//   brandName: "Express js",
//   brandIconUrl:
//     "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0UsojviMWbEFZIyJOG_bLAHaHa%26pid%3DApi&f=1&ipt=3875cfc198b26981890eabdcc2a9aec217058fdfe08a6dd5601459fe004dab88&ipo=images",
//   links: [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "View",
//       url: "/view",
//     },
//   ],
//   sliderLink: [
//     {
//       url:
//         "https://images.unsplash.com/photo-1709149044710-ef876deae1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1709146878535-b1b3f1374642?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1584237863847-b21b4f7ccd4f?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1469898066184-cd178776744c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ],

//   Service: [
//     {
//       service_icon: "fas fa-layer-group",
//       service_Title: "Web Application",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },
//     {
//       service_icon: "far fa-chart-bar",
//       service_Title: "Highly customizable",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },

//     {
//       service_icon: "fas fa-database",
//       service_Title: "Responsive design",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },
//     {
//       service_icon: "fas fa-cogs",
//       service_Title: "service & plugins",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },
//     {
//       service_icon: "fas fa-chart-pie",
//       service_Title: "Optimised for speed",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },
//     {
//       service_icon: "fas fa-thumbs-up",
//       service_Title: "Dedicated support",
//       service_Paragraph:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...",
//     },
//   ],

//   About_data: [
//     {
//       About__Image: "https://images.unsplash.com/photo-1604822064782-86b012c1a8f7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       About__Name: "Abhishek Gupta",
//       About__Profession: "Web Developer",
//       About_paragraph: `fufhdfudfg <br/> ijgjgkj jgmgh `,
//     },
//   ],
// });

/* GET home page. */
router.get("/", async function (req, res, next) {
  var Details = await DetailModel.findOne({ _id: "65e6e7dcdf76dcb56deeb478" });
  console.log(Details); 
  // console.log(Details.brandIconUrl )
  // console.log(Details.sliderLink)
  // console.log(Details.About_data);
  res.render("index", { title: "Home Page", Details });
});

router.get("/view", async function (req, res, next) {
  var Details = await DetailModel.findOne({ _id: "65e6e7dcdf76dcb56deeb478" });
  res.render("index", { title: "View Page", Details });
});

router.get("/about", async function (req, res, next) {
  var Details = await DetailModel.findOne({ _id: "65e6e7dcdf76dcb56deeb478" });
  res.render("about", { title: "About Page", Details });
});


router.get('/contact' , async function(req, res){

  var Details = await DetailModel.findOne({ _id: "65e6e7dcdf76dcb56deeb478" });
  res.render('contact' , {title:"Contact us" , Details })
 
})


router.post('/submit-form', async (req, res) => {
  // give name="" in form for each item 
  const AllformData = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const query = req.body.query;
  console.log(AllformData)
  // Save Data  in db 
  try {
    const data = await Contact.create(req.body)
    console.log(data)
    res.redirect('/')
    
  } catch (error) {
    console.log(error)
    // res.redirect('/')
    
  }
  

  //...
  res.end()
})

module.exports = router;
