import 'dotenv/config';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import './utils/connection';
import CategoryResolver from './graphql/category/CategoryResolver';
import VideoResolver from './graphql/video/VideoResolver';

const { PORT } = process.env;

const bootstrap = async () => {
	const schema = await buildSchema({
		resolvers: [CategoryResolver, VideoResolver],
	});

	const server = new ApolloServer({ schema });

	server.listen({ port: PORT }, () =>
		console.log(`Server running on port ${PORT}`)
	);
};

bootstrap();