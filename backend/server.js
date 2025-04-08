import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const app = express();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.post("/booking-exams", async (req, res) => {
    try {
        // console.log("Received a booking request!"); // Debugging

        await client.connect();
        // console.log("Connected to database!");

        const database = client.db("ReactDental");
        const collection = database.collection("DentalExams");
        const documents = await collection.find().toArray();

        console.log("DOCUMENTS: " + JSON.stringify(documents));
        res.json(documents);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to save booking" });
    } finally {
        await client.close();
    }
});

app.post("/booking-procedures", async (req, res) => {
    try {
        // console.log("Received a booking request!"); // Debugging

        await client.connect();
        // console.log("Connected to database!");

        const database = client.db("ReactDental");
        const collection = database.collection("Procedures");
        const documents = await collection.find().toArray();

        console.log("DOCUMENTS: " + JSON.stringify(documents));
        res.json(documents);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to save booking" });
    } finally {
        await client.close();
    }
});

app.post("/booking-braces", async (req, res) => {
    try {
        // console.log("Received a booking request!"); // Debugging

        await client.connect();
        // console.log("Connected to database!");

        const database = client.db("ReactDental");
        const collection = database.collection("Braces");
        const documents = await collection.find().toArray();

        console.log("DOCUMENTS: " + JSON.stringify(documents));
        res.json(documents);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to save booking" });
    } finally {
        await client.close();
    }
});

app.post("/booking-invisalign", async (req, res) => {
    try {
        // console.log("Received a booking request!"); // Debugging

        await client.connect();
        // console.log("Connected to database!");

        const database = client.db("ReactDental");
        const collection = database.collection("Invisalign");
        const documents = await collection.find().toArray();

        console.log("DOCUMENTS: " + JSON.stringify(documents));
        res.json(documents);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to save booking" });
    } finally {
        await client.close();
    }
});

app.post("/booking-emergency", async (req, res) => {
    try {
        // console.log("Received a booking request!"); // Debugging

        await client.connect();
        // console.log("Connected to database!");

        const database = client.db("ReactDental");
        const collection = database.collection("Emergency");
        const documents = await collection.find().toArray();

        console.log("DOCUMENTS: " + JSON.stringify(documents));
        res.json(documents);
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Failed to save booking" });
    } finally {
        await client.close();
    }
});

const port = 3002;
dotenv.config();
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    insurance: String,
  });
  
const Form = mongoose.model("FormData", FormDataSchema);



app.post("/insurance", async (req, res) => {

    const {name, email, insurance} = req.body;

    console.log("Name: " + name + "\n" + "Email: " + email + "\n" + "Insurance: " + insurance);

    const newUser = new Form({
        name, email, insurance
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log("Success saving " + name);
    } catch (error) {
        res.status(500).json({ message: 'Error saving user', error });
    }
});

app.listen(port, () => {
    console.log(`Server now running on port ${port}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});