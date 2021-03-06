import express from 'express';
import Cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/amazona',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
})

app.use(Cors());
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter)

app.get('/',(req,res) =>{
    res.send("hey bitches");
})

app.use((err,req,res,next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at https://localhost:${port} `);
})