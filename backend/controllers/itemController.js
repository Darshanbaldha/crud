import { Item } from "../models/itemModel.js"

// CREAT
export const createItems = async (req, res) => {
    const item = await Item.create({ text: req.body.text });
    res.status(201).json(item);
}

// READ
export const getItems = async (req, res) => {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
}

// UPDATE
export const updateItem = async (req, res) => {
    const item = await Item.findByIdAndUpdate(
        req.params.id,
        { text: req.body.text },
        { new: true }
    );
    res.status(200).json(item);
}

// DELETE
export const deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Item deleted" });
}