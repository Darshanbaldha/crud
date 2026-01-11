import express from "express";
import { createItems, deleteItem, getItems, updateItem } from "../controllers/itemController.js";


const router = express.Router();

router.post("/", createItems);
router.get("/", getItems);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;