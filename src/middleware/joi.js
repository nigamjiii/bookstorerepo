const Joi = require('joi')

const signUpSchema=Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(1).required()
})
const loginSchema= Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
})
const bookSchema=Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.number().required(),
    genre: Joi.string().required()
})



module.exports=loginSchema
module.exports=signUpSchema
module.exports=bookSchema
// module.exports = (validator) => {
//     if(!Validators.hasOwnProperty(validator))
//         res.status(400).json({message: 'Validator is not exist'})


//     return async ( req, res, next ) => {
//         try{
//             const validated = await Validators[validator].validateAsync(req.body)
//             req.body = validated
//             next()
//         }catch(err){
//             if(err.isJoi)
//                 return res.status(422).json({messgae: err.message})
//             res.status(500).json({messgae: "error"})
//         }
//     }
// }