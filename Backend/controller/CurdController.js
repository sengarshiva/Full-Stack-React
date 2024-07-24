const CurdModel = require('../models/curd')

class CurdController{
    static creatCurd = async(req,res)=>{
        try {
            console.log(req.body)
            const {name,email,password,city} = req.body
            const result = new CurdModel({
                name:name,
                email:email,
                password:password,
                city:city
            })
           const data =  await result.save()
           res.status(200)
                   .json ({status:"SUCCESS", message: "REGISTRATION SUCCESSFULL", data})
            

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

    static DisplayCurd = async(req,res)=>{
        try {
            const data = await CurdModel.find()
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

    static ViewCurd = async(req,res)=>{
        try {
            const data = await CurdModel.findById(req.params.id)
            res.status(201).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

    static UpdateCurd = async(req,res)=>{
        try {
           const {name,email,password,city} = req.body
            const data = await CurdModel.findByIdAndUpdate(req.params.id,{
                name:name,
                email:email,
                password:password,
                city:city
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

    static DeleteCurd = async(req,res)=>{ 
        try {
            await CurdModel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"DETELE SUCCESSFULLY"})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

}
module.exports = CurdController