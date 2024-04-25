const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://kajal_pauly:kajal@kajal.x7sevja.mongodb.net/Myblogs?retryWrites=true&w=majority&appName=kajal")
  .then(()=>{
    console.log("db connected")
  })
  .catch((error)=>{
    console.log(error)
  })

  