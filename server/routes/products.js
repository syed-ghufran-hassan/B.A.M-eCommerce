import express from "express";
import { getAllProducts, getProductCategories, getProductsInCategory, getProduct, addProduct, editProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

//http://localhost:5000/products

router.get("/", getAllProducts);
router.get("/categories", getProductCategories);
router.get("/category/:category", getProductsInCategory);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", editProduct);
router.patch("/:id", editProduct);
router.delete("/:id", deleteProduct);

export default router;