import { eventArr } from './data.js';

export function load() {
	return {
		summaries: eventArr.map((post) => ({
			slug: post.slug,
			title: post.title,
      content: post.content,
      src: post.src
		}))
	};
}
