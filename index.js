const express = require('express');
let products = require('./products.json');
const app = express();
const port = 3000;


// const fs = require('fs');
// const rawData = fs.readFileSync("products.json");
// const products = JSON.parse(rawData);

app.use(express.json());
app.get('/product',(req, res) => res.send(products));
app.post('/product', (req, res) => {

    const {body} = req 

    const post = body;
    products.push(post);
    res.status(201).send("Berhasil menambahkan Produk")
})
app.delete('/product/:id',(req, res) => {
    products = products.filter(function(i){
        if (i.id != req.params.id){
        return i 
        }
    })
    res.status(200).json({
        message: "Berhasil menghapus Produk"
    })
    
});


app.listen(port, () => console.log('Example app listening at http'))


