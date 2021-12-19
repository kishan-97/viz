const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    end_year:Number,
    intensity:Number,
    sector:String,
    topic:String,
    url:String,
    region:String,
    start_year:Number,
    impact:Number,
    added:Date,
    published:Date,
    country:String,
    relevance:Number,
    pestle:String,
    source:String,
    title:String,
    likelihood:Number
})

module.exports=mongoose.model('docs',schema);