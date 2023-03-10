const { Schema, model } = require("mongoose")

const UsuarioSchema = Schema({
    
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'la contraseña es obligatorio']
        
    },
    img: {
        type: String
      
    },
    rol: {
        type: String,
        required: true,
        
    },
    estado: {
        type: Boolean,
        default: true,
      
    },
    google: {
        type: Boolean,
        required: false,
        
    },
})

module.exports = model('Usuario', UsuarioSchema);


