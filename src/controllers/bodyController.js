const bodyModel = require('../models/bodyModel')
const validator = require('../validators/validator')





const bodyRegister = async function (req, res) {
    try {
        let requestBody = req.body

        if (!validator.isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide menu Detaills" })
        }
        //----Extract body-----
        let {sequenceNumber,title,description,Active,haveButton,buttonURL,haveIcon,buttonText } = requestBody

        //-------Validation Starts-----------

        if (!validator.isValid(sequenceNumber)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide sequenceNumber" });
        }
        if (!validator.isValid(title)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide title" });
        }

        if (!validator.isValid(description)) {
            return res.status(400).send({ status: false, message: "Invalid request parameter, please provide description" });
        }

      
        
        if (!validator.isValid(Active)) {
            return res.status(400).send({ status: false, message: "Active is required" });
        }
        if (!validator.isValid(haveButton)) {
            return res.status(400).send({ status: false, message: "haveButton is required" });
        }
        if (!validator.isValid(buttonURL)) {
            return res.status(400).send({ status: false, message: "buttonURL is required" });
        }
        if (!validator.isValid(buttonText)) {
            return res.status(400).send({ status: false, message: "buttonText is required" });
        }

     
        //------------Validation Ends----------

      

        const updatedBody ={sequenceNumber,title,description,Active,haveButton,buttonURL,haveIcon,buttonText }

        let user = await bodyModel.create(updatedBody)

        res.status(201).send({ status: true, message: 'bodyitems created successfully', data: user })

    } catch (error) {

        res.status(500).send({ status: false, msg: error.message })
    }
}


const getBodyItems = async function (req, res) {
    try {

        let Menu = await bodyModel.find();
             

        if (Menu.length == 0) {
            return res.status(400).send({ status: false, message: "No Menu found" })
        }

        return res.status(200).send({ status: true, Details: Menu });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = {bodyRegister,getBodyItems};

