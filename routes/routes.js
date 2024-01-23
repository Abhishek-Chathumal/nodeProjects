const express = require("express")
const router = express.Router()
var userModel = require('../src/model/users')
const users = require("../src/model/users")

router.post('/users/create', async(req,res) =>{ //inserting data

    
    try{
        const {name} = req.body
        const {telephone} = req.body
        const existingUser1 = await userModel.findOne({name}) 
        const existingUser2 = await userModel.findOne({telephone}) 

        if(existingUser1 && existingUser2){
            return res.status(409).send({
                "status" : false,
                "message" : "The user already exists"
            })
        }

        else if(existingUser1){
            return res.status(409).send({
                "status" : false,
                "message" : "A user with same name already exists"
            })
        }

        else if(existingUser2){
            return res.status(409).send({
                "status" : false,
                "message" : "A user with same telephone already exists"
            })
        }

        const user = new userModel(req.body)
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

router.get('/users', async(req,res) =>{ // retrieving data

    try{
        const user = await userModel.find({})
        res.status(200).send(user)
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.patch('/users/:_id', async(req,res) =>{ //updating data

    try{
        const _id = req.params._id
        const body = req.body
        const updateuser = await userModel.findByIdAndUpdate(_id,body,{new:true})
        if(!updateuser){
            return res.status(404).send("User not found!")
        }
        res.status(200).send("User updated successfully!")
    }
    catch(error){
        res.status(400).send(error)
    }
})

router.delete('/users/:_id', async(req,res) =>{ //deleting data

    try{
        const _id = req.params._id
        const deleteuser = await userModel.findByIdAndDelete(_id)
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
