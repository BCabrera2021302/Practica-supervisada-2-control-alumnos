const jwt = require('jsonwebtoken')


const generarJWT = (uid =  '') =>{
    return new Promise((resolve, reject)=>{
        const payload ={uid};
        jwt.sign(payload, process.env.SECERT_OR_PRIVATE_KEY, {
            expiresIn: '1h'
        },(err, token)=>{
            if (err) {
               console.log(err)
               reject('no se puedo generar el token') 
            }else {
                resolve(token)
            }
        })

    })
}


module.exports ={
    generarJWT
}