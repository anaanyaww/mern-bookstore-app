import express from "express";
import mongoose from "mongoose";
import Book from '../models/book.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const book = req.body;

    if (!book.title || !book.author || !book.publishYear) {
        return res.status(404).json({ success: false, message: "Client error, please fill in all the fields" });
    }

    const newBook = new Book(book);
    try {
        await newBook.save();
        res.status(202).json({ success: true, data: newBook });
    } catch (error) {
        console.log("Server error", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(202).json({ success: true, data: books });
    } catch (error) {
        console.log("Server error", error.message);
        res.status(505).json({ success: false, message: "Server error" });
    }
});



router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
});
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const book = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid book ID" }); // Use 400 for bad request
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true }); // Added 'await'
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, data: updatedBook }); // Status 200 for successful update
    } catch (error) {
        console.log("Server error", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid book ID" });
    }

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
        console.log("Server error", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});


export default router;
