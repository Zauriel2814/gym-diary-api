const {v4: uuidv4} = require("uuid");
const httpStatus = require("http-status"); // using library to manage status code at ease
const data = []; // used for storing resource in the memory

const create = (req, res) => {
    data.push(req.body);
    res.sendStatus(httpStatus.CREATED); // Able to use httpStatus.CREATED instead of 201
}

const readAll = (req, res) => {
    if(data.length > 0){
        return res.json(data);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
    
}

module.exports = {
    create,
    readAll
}