
const express=require('express');

const app=express();
 const authRouter=require('./router/AuthRouter');

 const databaseConnection=require('./config/databaseConnection');
 databaseConnection();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/auth',authRouter);


app.use('/',(req,res)=>{
      res.status(200).json({
         data:"JWTauth server"
      });
});
module.exports=app; 