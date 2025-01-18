import mongoose from "mongoose";

export const connectDB = async () => {
    const url = process.env.DB_URL;

    if (!url) {
        console.error("Error: DB_URL environment variable is not defined");
        process.exit(1); // Exit the process with failure code
    }

    try {
        await mongoose.connect(url); // Removed deprecated options
        console.log("DB Connected");
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1); // Exit the process with failure code
    }
};
