const express=require('express');
const app=express();
const PORT=process.env.PORT || 4000;
const path=require('path');
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/Docs').then(()=>console.log("Database Connected")).catch(e=>console.log(e));

const Data_Route=require('./routes/data_route');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'build')));

app.use('/data',Data_Route);

app.listen(PORT,()=>{
    console.log(`Server Started at Port ${PORT}`);
})

