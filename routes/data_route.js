const express=require('express');
const Router=express.Router();

const {filtered_data,all_data}=require( '../Controllers/Data_Controller');

Router.get('/filter',filtered_data);
Router.get('/all',all_data);

module.exports=Router;