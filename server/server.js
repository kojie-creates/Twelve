const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("../config/db");
const app = express();

const stories = require("./api/stories");
const users = require("./api/users");
const auth = require("./api/auth");

dotenv.config();
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const allowedOrigins = process.env.NODE_ENV === "production"
  ? ["https://www.twelve.community", "https://twelve.community"]
  : ["http://localhost:3000"];

app.use(cors({ origin: allowedOrigins }));

app.use("/api/stories", stories);
app.use("/api/users", users);
app.use("/api/auth", auth);

if (process.env.NODE_ENV === "development") {
  const staticDirectory = path.join(__dirname, "../frontend/public");
  app.use(
    express.static(staticDirectory, {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp("\\.[0-9a-f]{8}\\.");

        if (path.endsWith(".html")) {
          // All of the project's HTML files end in .html
          res.setHeader("Cache-Control", "no-cache");
        } else if (hashRegExp.test(path)) {
          // If the RegExp matched, then we have a versioned URL.
          res.setHeader("Cache-Control", "max-age=31536000");
        }
      },
    })
  );
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: staticDirectory });
  });
}

if (process.env.NODE_ENV === "production") {
  // _dirname + '/app/frontend/build/index.html'
  const staticDirectory = path.join(__dirname, "../frontend/build");
  app.use(
    express.static(staticDirectory, {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp("\\.[0-9a-f]{8}\\.");

        if (path.endsWith(".html")) {
          // All of the project's HTML files end in .html
          res.setHeader("Cache-Control", "no-cache");
        } else if (hashRegExp.test(path)) {
          // If the RegExp matched, then we have a versioned URL.
          res.setHeader("Cache-Control", "max-age=31536000");
        }
      },
    })
  );
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root: staticDirectory });
  });
}

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
