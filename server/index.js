const express = require("express");
const app = express();
const cors = require("cors");
const { note, exam } = require("./api");
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/note", note);
app.use("/api/exam", exam);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
