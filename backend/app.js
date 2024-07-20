import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
import cors from "cors";
dotenv.config();
const app = express();

// middlewares
app.use(
  cors({
		// origin: "https://movie-app-zeta-sage-35.vercel.app",
	  	 origin: "http://localhost:3000",

		credentials: true,
	})
);
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
mongoose
  .connect(
    `${process.env.MONGODB}`,

  )
  .then(() =>
    app.listen(PORT, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));


app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up ans running"
  })
})
