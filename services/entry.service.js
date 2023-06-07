const { Entry } = require('../models');

const create = async (data) => {
    try{
        const created = await Entry.create(data);
        return created;
    }catch(e){
        throw e;
    }
}

const list = async (userId) => {
    console.log(`Entry service - list (userId:${userId})`);
    try{

        // Added conditions and if block
        let conditions = {};
        if(userId){
            conditions = {user:userId}
        }
        const fetched = await Entry.find(conditions); // Added argument
        console.log(`Entry service - ${fetched.length} entries found`) // Added logs
        return fetched;
    }catch(e){
        throw e;
    }
}
const getOne = async (id) => {
    try{
        return await Entry.findById(id);
    }catch(e){
        throw e;
    }
}

const updateOne = async (condition, data) => {
    try{
        return await Entry.updateOne(condition, data);
    }catch(e){
        throw e;
    }
}
const deleteOne = async (id) => {
    try{
        const entry = await Entry.findById(id);
        if(!entry){
            return 0;
        }
        await entry.deleteOne();
        return 1;
    }catch(e){
        throw e;
    }
}

module.exports = {
    create,
    list,
    getOne,
    updateOne,
    deleteOne
}