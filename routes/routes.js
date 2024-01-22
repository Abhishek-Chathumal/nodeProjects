const express = require("express")
const router = express.Router()
var userModel = require('../src/model/users')

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

module.exports = router
