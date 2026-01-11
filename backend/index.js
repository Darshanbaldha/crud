import express from "express"
import cors from "cors"
import itemRoutes from "./routes/itemRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

const app = express();

dotenv.config();

app.use(cors())
app.use(express.json())

app.use("/api/items", itemRoutes)

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;