const express = require('express');
let products = require('./products.json');
const app = express();
const port = 3000;


app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json('Home')
});

app.get('/product', (req, res) => {
    res.status(200).json(products)
});

app.post('/product', (req, res) => {

    res.status(201).json(
        "Berhasil menambahkan Produk"
    )
})

app.put('/product', (req, res) => {

    res.status(201).json(
        "Berhasil mengubah Produk"
    )
})

app.delete('/product', (req, res) => {

    res.status(201).json(
        "Berhasil menghapus Produk"
    )
})


app.listen(port, () => console.log('Example app listening at port'))