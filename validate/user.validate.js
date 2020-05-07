module.exports.userCreate = function(req,res,next){
    var errors = [];
    if(!req.body.name) {
        errors.push('Name is Require')
    }
    if(!req.body.phone) {
        errors.push('Phone is Require')
    }
    if(!req.body.email) {
        errors.push('Email is require')
    }
    if(!req.body.password) {
        errors.push('Password is require')
    }
    if(errors.length){
        res.render('users/create',{
            errors : errors,
            values: req.body
        })
        return;
    }
    next()
}