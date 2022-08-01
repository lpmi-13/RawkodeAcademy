import express from "express";
import payload from "payload";

require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOADCMS_SECRET!,
  mongoURL: process.env.MONGODB_CONNECTION_STRING!,
  mongoOptions: {
    user: "cms",
    pass: process.env.MONGODB_PASSWORD!,
    dbName: process.env.MONGODB_DB_NAME!,
  },
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.listen(3000);
