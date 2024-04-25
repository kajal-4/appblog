const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    craeteAt:{
        type:Date,
        default:new Date()
    },

})
const postModel=mongoose.model('post',postSchema);
module.exports=postModel;