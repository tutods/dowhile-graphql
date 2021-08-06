import mongoose from 'mongoose';
import 'dotenv/config';

const { DB_HOST, DB_NAME, DB_PORT } = process.env;

const connectToDatabase = async () => {
	try {
		await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('Database connected with success 💿');
	} catch (error) {
		console.log('Error connecting to database ❌');
	}
};

connectToDatabase();