import express from "express";
import db from "@repo/db";

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required",
            });
        }

        const user = await db.user.create({
            data: {
                username,
                password,
            },
        });

        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user.id,
                username: user.username,
            },
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Something went wrong",
        });
    }
});

app.get("/", (req, res) => {
    res.send("CI/CD is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
});