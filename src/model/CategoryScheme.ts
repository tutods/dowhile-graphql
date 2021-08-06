import { model, Schema } from 'mongoose';

const CategorySchema = new Schema({
	description: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
});

export default model('categories', CategorySchema);