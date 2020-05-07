var db = require('../db')

module.exports.index = function (req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var start = (page - 1) * perPage;
    var end = page * perPage;
    var products_total = Math.ceil((db.get('products').value()).length/perPage);
    res.render('products/index',{
        products : db.get('products').value().slice(start,end),
        n : page,
        total : products_total 
    },)
}