
'use strict';

module.exports = (req, res, next) => {
  let personName = req.query.name

  if(!isNaN(personName)) next({message: 'Not A Name'});
  req.name = personName
  next()
}


// 'use strict'
// module.exports=(req,res,next)=>{

//     req.name=req.query.name;
//     if(req.name){
//         next()
//     }
//     else if(!isNaN(req.name))  next({message: 'Not A Name'})


// }