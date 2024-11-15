const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS and images)
app.use(express.static(path.join(__dirname, "public")));

// Mahadev Quotes
const quotes = [
  "Om Namah Shivaya!",
  "Har Har Mahadev!",
  "Shiva is the soul of everything.",
  "In Shiva lies the essence of life.",
  "Mahadev: The ultimate source of power and wisdom."
];

// Routes
app.get("/", (req, res) => {
  res.render("index", { quotes });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
