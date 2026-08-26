const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Harshvardhan portfolio is running" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio running on port ${PORT}`);
});