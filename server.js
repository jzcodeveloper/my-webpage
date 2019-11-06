const PORT = process.env.PORT || 3000;

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
