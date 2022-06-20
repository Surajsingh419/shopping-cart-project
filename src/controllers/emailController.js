const emailModel = require('../models/emailModel')
const validator = require('../validators/validator')





const emailRegister = async function (req, res) {
    try {
        let requestBody = req.body

        if (!validator.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide menu Detaills" })
        }
        //----Extract body-----
        let {email,period,expire_at,validate,unsubscribe,unsubscribe_at,Ip_address,reason } = requestBody

        //-------Validation Starts-----------

        if (!validator.isValid(email)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide email" });
        }

        email = email.trim()
        if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
            return res.status(400).send({ status: false, message: `Email should be a valid email address` });
        }

        let isEmailAlredyPresent = await emailModel.findOne({ email: email })
        if (isEmailAlredyPresent) {
            return res.status(400).send({ status: false, message: `Email Already Present` });
        }
        if (!validator.isValid(period)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide period" });
        }

        if (!validator.isValid(expire_at)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide expire_at " });
        }

      
        
        if (!validator.isValid(validate)) {
            return res.status(400).send({ status: false, message: "validate is required" });
        }
        if (!validator.isValid(unsubscribe)) {
            return res.status(400).send({ status: false, message: "unsubscribe is required" });
        }
        if (!validator.isValid(unsubscribe_at)) {
            return res.status(400).send({ status: false, message: "unsubscribe_at is required" });
        }
        if (!validator.isValid(reason)) {
            return res.status(400).send({ status: false, message: "reason is required" });
        }
        if (!validator.isValid(Ip_address)) {
            return res.status(400).send({ status: false, message: "Ip_address is required" });
        }

     
        //------------Validation Ends----------

      

        const updatedBody ={email,period,expire_at,validate,unsubscribe,unsubscribe_at,Ip_address,reason }

        let emails = await emailModel.create(updatedBody)

        res.status(201).send({ status: true, message: 'email subscription created successfully', data: emails })

    } catch (error) {

        res.status(500).send({ status: false, msg: error.message })
    }
}


const getEmail = async function (req, res) {
    try {

        let Menu = await emailModel.find();
     
        if (Menu.length == 0) {
            return res.status(400).send({ status: false, message: "No Menu found" })
        }

        return res.status(200).send({ status: true, Details: Menu });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = {emailRegister,getEmail};

