const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

//ajouter => post // 
router.post('/', async (req,res)=>{
    try {
            console.log(req.body)
            const newContact = new Contact(req.body);
            const  response = await newContact.save();
            res.send({res:response, msg:'contact is saved :)'})
    } catch (error) {
        res.status(400).send("cannot save contact :(")
        console.log(error)
    }

})

// get all contacts
router.get('/',async(req,res)=>{
    try {
        const result = await Contact.find()
        res.send({res:result , msg:' success find all contacts '})
    } catch (error) {
        res.status(400).send('Ouups ,cannot get all contacts')
    }

})
 // delete contact 
    router.delete("/:id",async(req,res)=>{
        try {
            const result = await Contact.deleteOne({"_id" : req.params.id})
            result.deletedCount ? 
            res.send({  msg:'Contact deleted hhh'}) :  res.send({  msg:'Contact is already deleted '})
        } catch (error) {
            res.status(400).send('Ouups ,contact not deleted')
        }
    })


    // Update { id , content(body)}  update => put or patch 

router.put("/:id",async(req,res)=>{
    try {
        const result = await Contact.updateOne({"_id" : req.params.id },{$set: {...req.body}})
        result.nModified ?    
        res.send({ msg:"contact updated"}) :  res.send({  msg:'Contact is already updated '})
    } catch (error) {
        res.status(400).send('Ouups ,contact not updated')
        
    }
})


router.get('/test',(req,res)=>{
    res.send('hello Router');
})


module.exports=router