const Product = require("../models/Product");

class ProductController {
  // [GET] /products
  index(req, res, next) {
	const { _page,_limit } = req.query;
	
    Product.find({})
      .where("createdDate")
	  .sort({price_new: -1 }).exec()
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/new-arrivals
  newArrival(req, res, next) {
    const { _page,_limit } = req.query;
	
    Product.find({ type_sell: { $in: "New" } })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/best-seller
  bestSell(req, res, next) {
    const { _page,_limit } = req.query;
	
    Product.find({ type_sell: { $in: "Best" } })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/top-rate
  topRate(req, res, next) {
    const { _page,_limit } = req.query;
	
    Product.find({ type_sell: { $in: "Top" } })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/mens
  getMens(req, res, next) {
	 const { _page,_limit } = req.query;
	  
    Product.find({ person: { $in: "Men" } })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/womens
  getWomens(req, res, next) {
	const { _page,_limit } = req.query;
	  
    Product.find({ person: { $in: "Women" } })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/bags
  getBags(req, res, next) {
	const { _page,_limit } = req.query;  
	  
    Product.find({ type: "Bag" })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [GET] /products/shoes
  getShoes(req, res, next) {
	const { _page,_limit } = req.query;  
	
    Product.find({ type: "Shoes" })
      .then((data) => {
		  if(_page == 1) {
			res.json({
				data: data.slice(0, _limit),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else if (_page > 1) {
			res.json({
				data: data.slice(_limit * (_page - 1), _limit * _page),
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  } else {
			  res.json({
				data: data,
				pagination: {
					_limit,
					_page,
					_totalRow: data.length,
				}
			});
		  }
	  })
      .catch(next);
  }

  // [POST] /products/store
  addProduct(req, res, next) {
    const formData = req.body;
    const person = formData.person.split(",");
    const color = formData.color.split(",");
    const type_sell = formData.type_sell.split(",");
    const photoURL = formData.photoURL.split(";");

    const data = new Product({
      ...formData,
      person,
      color,
      type_sell,
      photoURL,
    });
    data.save().then(() => res.redirect("/"));
  }
}

module.exports = new ProductController();
