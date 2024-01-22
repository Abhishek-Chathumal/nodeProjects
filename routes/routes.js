const express = require("express")
const router = express.Router()
var userModel = require('../src/model/users')
const users = require("../src/model/users")

router.post('/users/create', async(req,res) =>{

    const user = new userModel(req.body)
    try{
        await user.save()
        res.status(201).send({
            "status": true,
            "message": "user created!"
        })
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.get('/users', async(req,res) =>{

    try{
        const user = await userModel.find({})
        res.status(200).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.patch('/users/:id', async(req,res) =>{

    try{
        const id = req.params.id
        const body = req.body
        const updateuser = await userModel.findByIdAndUpdate(id,body,{new:true})
        if(!updateuser){
            return res.status(404).send("User not found!")
        }
        res.status(200).send("User updated successfully!")
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.delete('/users/:id', async(req,res) =>{

    try{
        const id = req.params.id
        const deleteuser = await userModel.findByIdAndDelete(id)
        if(!deleteuser){
            return res.status(404).send("User not found!")
        }
        res.status(200).send("User deleted successfully!")
    }
    catch(error){
        res.status(400).send(error)
    }
})


module.exports = router
