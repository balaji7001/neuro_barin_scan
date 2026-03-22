import { Request, Response } from "express";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const handleUpload = async (req: Request, res: Response) => {

    const formData = new FormData();
    formData.append("file", fs.createReadStream(req.file!.path));

    const response = await axios.post(
        "http://localhost:8000/predict",
        formData,
        { headers: formData.getHeaders() }
    );

    res.json(response.data);
};