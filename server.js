import express from 'express';
import data from './data.js';
import Cors from 'cors';

const app = express();
app.use(Cors());

app.get('/api/products/:id', (req,res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message:"product not found"}) 
    }
})

app.get('/api/products',(req,res) => {
    res.send(data.products);
})

app.get('/',(req,res) =>{
    res.send("hey bitches");
})
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at https://localhost:${port} `);
})