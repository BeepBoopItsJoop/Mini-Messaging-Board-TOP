import express from "express";
import { fileURLToPath } from "url";
import path from "path";

import indexRouter from "./routes/indexRouter.js";

const app = express();

const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)));

app.set("views", __dirname, "views");
app.set("view engine", "ejs");

// const assetsPath = path.join(__dirname, "public");
// app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.use((err, req, res, next) => {
     console.error(err);
     res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Express app - listening on port ${PORT}!`);
});
