import Category from './Category';
import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import CategorySchema from '../../model/CategoryScheme';

@InputType()
class CategoryInput {
	@Field()
	name: string;

	@Field()
	description: string;
}

@Resolver(Category)
class CategoryResolver {
	@Query(() => [Category])
	async categories() {
		return CategorySchema.find();
	}

	@Mutation(() => Category)
	async createCategory(@Arg('categoryInput') categoryInput: CategoryInput) {
		return await CategorySchema.create(categoryInput);
	}
}

export default CategoryResolver;