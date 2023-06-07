const {User} = require("../models");

const processUid = async (req, res, next) => {

    // if http header has a "uid", find user._id and set it to req.userId. 
    // if not found, do nothing.
    if(req.headers.uid){
        console.log(`processUid middleware - detected header uid to be ${req.headers.uid}`)
        const user = await User.findOne({
            uid:req.headers.uid
        });
        req.userId = String(user._id);
    }
    next();
}

module.exports = processUid;