const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/blog')
  .then(() => console.log('Connected!'));
const Detail = new mongoose.Schema({
    brandName: {
        type: String,
   
      },
      brandIconUrl: {
        type: String,
        required: true,
      },
      links: [
        {
          label: String,
          url: String,
        },
      ],

      sliderLink: [
        {
         
          url: String,
        },
      ],
      Service: [
          {
            service_icon: String,
            service_Title: String,
            service_Paragraph: String,
     
          },
      ],

      About_data:[
        {
           About__Image : String,
           About__Name: String,
           About__Profession: String,
           About_paragraph:String,


        }
      ]



})



module.exports = mongoose.model("detail",Detail)