import { eventArr } from '../data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = eventArr.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

	return {
		post
	};
}