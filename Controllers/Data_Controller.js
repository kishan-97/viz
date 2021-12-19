
const data=require('../Schema/document_schema');

const Data_Controller= async(req,res)=>{
    const start_year=parseInt(req.query.startYear);
    const end_year=parseInt(req.query.endYear);
    try{
        const response=await data.find({start_year:{$gte:start_year},end_year:{$lte:end_year}});
        res.send(response);

    }
    catch(e){
        console.log(e);
        res.send("Error Occured");
    }
};

const all_data=async(req,res)=>{
    try{
        const response=await data.find({});
        res.send(response);
    }
    catch(e){
        console.log(e);
        res.send("Error Occured");
    }
}

module.exports.filtered_data=Data_Controller;
module.exports.all_data=all_data;