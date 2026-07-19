const express = require("express");
const router = express.Router();
const Book = require('../models/Books');

router.get("/", async (req, res) => {
    try {
        const books = await Book.find().sort({ author: 1 })
        res.status(200).json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not fetch books" });
    }
});


router.post("/", async (req, res) => {
    try {
        const books = await Book.create(req.body);
        res.status(201).json(books)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not create book" });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json(updatedBook);
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Could not update book" });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const deleteBOOK = await Book.findByIdAndDelete(req.params.id);

        if (!deleteBOOK) {
            return res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Could not delete book" });
    }
})

module.exports = router;