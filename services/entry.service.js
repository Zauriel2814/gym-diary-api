const { Entry } = require('../models');

const create = async (data) => {
    try{
        const created = await Entry.create(data);
        return created;
    }catch(e){
        throw e;
    }
}

const list = async () => {
    try{
        return await Entry.find(); 
    }catch(e){
        throw e;
    }
}

module.exports = {
    create,
    list
}