const TeacherModel = require('../models/Teacher')

class TeacherController{
    static creatTeacher = async(req,res)=>{
        try {
            console.log(req.body)
            const {name,email,password, phone,city,college} = req.body
            const result = new CurdModel({
                name:name,
                email:email,
                password:password,
                phone: phone,
                city:city,
                college: college
            })
           const data =  await result.save()
           res.status(200)
                   .json ({status:"SUCCESS", message: "REGISTRATION SUCCESSFULL", data})
            

        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
            
        }
    }

}


module.exports = TeacherController