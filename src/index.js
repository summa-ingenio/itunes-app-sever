import express from "express";
import helmet from "helmet";
import cors from "cors";
import fetch from "node-fetch";

const app = express();

// Enable CORS
app.use(cors());
app.use(helmet()); // Use Helmet middleware for security

const port = process.env.PORT || 3001;

app.use(express.json());

// iTunes API Endpoint
const iTunesAPI = "https://itunes.apple.com/search?";
// You can change the limit of the search results
const limit = "10";

// Endpoint to search iTunes
app.get("/api/search", async (req, res) => {
  try {
    const { term, media } = req.query;

    // Use fetch instead of axios
    let apiEndpoint = `${iTunesAPI}term=${term}&limit=${limit}`;

    if (media) {
      apiEndpoint += `&entity=${media}`;
    }

    const response = await fetch(apiEndpoint);
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
