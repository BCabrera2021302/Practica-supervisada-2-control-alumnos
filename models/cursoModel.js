const { Schema, model } = require("mongoose")

const CursoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
})

module.exports = model('Curso', CursoSchema)