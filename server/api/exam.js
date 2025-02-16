const express = require("express");
const router = express.Router();
const { markDone } = require("../db.js");

router.post("/:title/done", (req, res) => {
    const title = req.params.title;
    markDone(title, (err, _) => {
        if (err)
            return res.status(500).json({ error: err.message, success: false });
        res.status(200).json({ success: true });
    });
});

// TODO: fav
// TODO: further dev: move exam data to backend db

module.exports = router;
