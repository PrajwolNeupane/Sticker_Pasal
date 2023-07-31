import mongoose from "mongoose";

export async function connect() {
  try {
    if (process.env.MONGODB_URI) {
      mongoose.connect(
        `${process.env.MONGODB_URI}`
      );
    } else {
      mongoose.connect(
        `mongodb+srv://prajwolneupane68:${encodeURIComponent(
          process.env.DB_PASSWORD!
        )}@cluster0.zd1cys6.mongodb.net/Main?retryWrites=true&w=majority`
      );
    }

    const connection = mongoose.connection;

    connection.on("connected", () => {});

    connection.on("error", (error) => {
      console.log("MongoDB connected error");
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
}
