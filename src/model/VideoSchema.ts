import { model, Schema } from 'mongoose';

const VideoSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'categories',
	},
});

export default model('videos', VideoSchema);