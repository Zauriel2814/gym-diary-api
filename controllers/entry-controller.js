const {v4: uuidv4} = require("uuid");
const httpStatus = require("http-status");
const {create: createEntry, list: listEntry} = require("../services/entry.service"); // Add this line
const data = [];

// Refactor the `create` function
const create = async (req, res) => {
    try{
        await createEntry(req.body);
        return res.sendStatus(httpStatus.CREATED);
    }catch(e){
        console.log("Failed to create entry", e);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

// Refactor the `readAll` function
const readAll = async (req, res) => {
    try{
        const data = await listEntry();
        return data.length > 0 ? res.json(data) : res.sendStatus(httpStatus.NOT_FOUND);
    }catch(e){
        console.log("Failed to list entries", e);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
    
}

const getOne = (req, res) => {
    const found = data.find(d => d.id === req.params.id);
    if(found){
        res.json(found);
    }else{
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

const updateOne = (req, res) => {
    const id = req.params.id;
    const dataToUpdate = req.body;

    let found = data.find(d => d.id === id);
    if(found){
        for(const prop in dataToUpdate){
            found[prop] = dataToUpdate[prop];
        }
        return res.sendStatus(httpStatus.OK)
    }

    return res.sendStatus(httpStatus.NOT_FOUND);
}

const deleteOne = (req, res) => {
    const id = req.params.id;

    const index = data.findIndex(d => d.id === id);
    if(index > -1){
        data.splice(index, 1);
        return res.sendStatus(httpStatus.OK);
    }
    return res.sendStatus(httpStatus.NOT_FOUND);
    

}

module.exports = {
    create,
    readAll,
    getOne,
    updateOne,
    deleteOne
}
