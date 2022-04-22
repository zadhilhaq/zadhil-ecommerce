const {model, Schema} = require('mongoose')

const deliveryAddressSchema = Schema({

    nama: {
        type: String,
        required: [true, 'Nama alamat harus diisi'],
        maxlength: [255, 'Panjang maksimal nama alamat adalah 255 karakter'],
    },

    kelurahan: {
        type: String,
        required: [true, 'Kelurahan harus diisi'],
        maxlength: [255, 'Panjang maksimal nama kelurahan adalah 255 karakter'],
    },

    kecamatan: {
        type: String,
        required: [true, 'Kecamatan harus diisi'],
        maxlength: [255, 'Panjang maksimal kecamatan adalah 255'],
    },

    kabupaten: {
        type: String,
        required: [true, 'Kabupaten harus diisi'],
        maxlength: [255, 'Panjang maksimal kabupaten adalah 255'],
    },

    provinsi: {
        type: String,
        required: [true, 'Provinsi harus diisi'],
        maxlength: [255, 'Panjang maksimal provinsi adalah 255'],
    },

    detail: {
        type: String,
        required: [true, 'Detail alamat harus diisi'],
        maxlength: [1000, 'Panjang maksimal detail alamat adalah 1000'],
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

module.exports = model('DeliveryAddress', deliveryAddressSchema)