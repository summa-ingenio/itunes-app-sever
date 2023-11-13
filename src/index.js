const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors({ origin: "https://itunes-client-9389433d4071.herokuapp.com" }));
app.use(helmet()); // Use Helmet middleware for security

const port = 3001;

app.use(express.json());

// iTunes API Endpoint
const iTunesAPI = "https://itunes.apple.com/search?";

// Endpoint to search iTunes
app.get("/api/search", async (req, res) => {
  try {
    const { term } = req.query;

    // Use fetch instead of axios
    const response = await fetch(`${iTunesAPI}term=${term}`);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
