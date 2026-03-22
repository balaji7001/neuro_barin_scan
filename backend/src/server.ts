import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/uploadRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);

app.listen(5000, () => {
    console.log("Server running on 5000");
});