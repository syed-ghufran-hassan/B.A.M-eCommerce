import Product from "../models/productsSchema.js";
import createError from "http-errors";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (e) {
    next(e);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) throw new createError.NotFound();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

export const getProductCategories = (req, res) => {
  Product.distinct("category")
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => console.log(err));
};

export const getProductsInCategory = (req, res) => {
  const category = req.params.category;
  const limit = Number(req.query.limit) || 0;
  const sort = req.query.sort == "desc" ? -1 : 1;

  Product.find({
    category,
  })
    .limit(limit)
    .sort({ id: sort })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => console.log(err));
};

export const addProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

export const editProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!product) throw new createError.NotFound();
    res.status(200).send(product);
  } catch (e) {
    next(e);
  }
};

export const deleteProduct = async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      console.log(product);
      if (!product) throw new createError.NotFound();
      res.status(200).send(product);
    } catch (e) {
      next(e);
    }
};