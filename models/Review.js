const mongoose =require('mongoose')
const Schema =mongoose.Schema;

const ReviewSchema =new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    movie:{
        type:Schema.Types.ObjectId,
        ref:'movie'
    },
    review:{
        type:String,
        required:true
    }
})

const ReviewModel =new mongoose.model('review',ReviewSchema)
module.exports =ReviewModel;