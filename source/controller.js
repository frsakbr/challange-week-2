const products = require('../products.json');

const getProducts = (req, res) => {
    res.status(200).json(products);
}

const addProducts = (req, res) => {
    res.status(200).json({ msg: "Berhasil menambahkan Produk" });
}

const updateProducts = (req, res) => {
    res.status(200).json({ msg: "Berhasil mengubah Produk" });
}

const deleteProducts = (req, res) => {
    res.status(200).json({ msg: "Berhasil menghapus Produk" });
}

module.exports = {
    getProducts,
    addProducts,
    updateProducts,
    deleteProducts
    
}

