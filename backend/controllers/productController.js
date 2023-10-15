import Product from '../models/productmodel';

export const NewProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({ product });
}