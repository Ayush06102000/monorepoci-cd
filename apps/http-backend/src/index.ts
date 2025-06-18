import express from "express";
import { prisma } from "@repo/prisma/client";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prisma.user.create({
    data: { username, password },
  });

  res.json({
    message: "Signup Successful",
    id: user.id,
  });
});

app.listen(3001);
