const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const exphbs=require('express-handlebars');
const app=express();




const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
})