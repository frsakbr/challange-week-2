Buat server menggunakan express js
  ENDPOINT:
    method:   GET
    path:     /product
    response: [ products ]
  ENDPOINT:
    method:   POST
    path:     /product
    response: {
      msg: "Berhasil menambahkan Produk"
    }
  ENDPOINT:
    method:   PUT
    path:     /product
    response: {
      msg: "Berhasil update Produk"
    }
  ENDPOINT:
    method:   DELETE
    path:     /product
    response: {
      msg: "Berhasil menghapus Produk"
    }
