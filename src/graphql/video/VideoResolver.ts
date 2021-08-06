import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import Video from './Video';
import VideoSchema from '../../model/VideoSchema';

@InputType()
class VideoInput {
	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	category: string;
}

@Resolver(Video)
class VideoResolver {
	@Query(() => [Video])
	async videos() {
		return VideoSchema.find().populate('category');
	}

	@Mutation(() => Video)
	async createVideo(@Arg('videoInput') videoInput: VideoInput) {
		const video = await VideoSchema.create(videoInput);
		video.populate('category')

		return video
	}
}

export default VideoResolver;