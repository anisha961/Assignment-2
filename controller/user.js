import users from "../database/data.js"

const getuser=(req,res)=>{
    res.status(200).json({
        message:"Users fetched successfully",
        users,
        success:true
    })
}

const createuser=(req,res)=>{
    let {id,name,age}=req.body
    if (!id || !name || !age){
        return res.status=(404).json({
            message:"data did not found",
            success:false
        })
    }


users.push({id,name,age})

res.status(200).json({
    message:"User created successfully",
    users
})
}

const updateUser = (req,res)=>{
    let {name,age} = req.body
    let id = Number(req.params.id)
    let user = users.find((e)=>e.id===id)
    if(name){
        user.name=name
    }
    if(age){
        user.age=age
    }
    res.status(200).json({
        message:"User updated successfully",
        users
    })
}

const deleteUser = (req,res)=>{
    let id = req.params.id
    let index =users.findIndex((e)=>e.id===id)
    users.splice(index,1)
    res.status(200).json({
        message:"User deleted successfully",
        users,
        success:true
    })
}
export {getuser,createuser,updateUser,deleteUser}