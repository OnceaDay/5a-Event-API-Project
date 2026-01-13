const express = require("express");
const logger = require("morgan");
const connectToMongoDB = require("./database/connectToMongoDB");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger("dev"));

// routers
const usersRouter = require("./routes/users/user-Router");
const bookingsRouter = require("./routes/bookings/booking-router");

// routes
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
  connectToMongoDB();
});
