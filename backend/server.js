
const express = require("express");
const app = express();
const port = process.env.PORT || 8080
const dotenv = require("dotenv");
const userRouter = require("./router/userRouter");
const { notFound, errorHandle } = require("./middleware/utilMiddleware");

dotenv.config({ path: "./.env" })

app.use("/", userRouter);

app.use("*", notFound);
app.use(errorHandle)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})