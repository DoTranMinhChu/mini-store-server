import ProductModel from '../models/ProductModel.js'

const getProducts = async (req, res, next) => {
    let total;
    await ProductModel.countDocuments({})
        .then(data => total = data)
        .catch(err => total = 0)
    let { page } = req.query
    page = parseInt(page);
    page = page < 1 ? 1 : page;
    const per_page = 6;
    const total_page = Math.ceil(total / per_page);

    if (!page) {
        ProductModel.find({})
            .then(data => {
                res.status(200).json({
                    per_page: total,
                    total: total,
                    total_page: 1,
                    data: data
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    } else {

        ProductModel.find().skip(per_page * (page - 1)).limit(per_page)
            .then(data => {
                res.status(200).json({
                    page: page,
                    per_page: per_page,
                    total: total,
                    total_page: total_page,
                    data: data
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

export default { getProducts }