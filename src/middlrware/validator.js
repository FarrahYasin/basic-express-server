'use strict'
module.exports=(req,res,next)=>{

    req.name=req.query.name;
    if(req.name){
        next()
    }
    next({message: 'Not A Name'})

}


