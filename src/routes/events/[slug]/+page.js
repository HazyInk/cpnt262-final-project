import { eventArr } from '../data.js';


// console.log(eventArr);

// export function load({ params }) {
// 	const post = eventArr.map((post) => post.slug === params.slug)({
// 		slug: post.slug,
// 		title: post.title,
// 		content: post.content,
// 		src: post.src
// 	})
// };
	
// 	return {
// 		 post
		
// 	};


export function load({ params })  {
	const post = eventArr.find((post) => post.slug === params.slug);
	
  if (!post) throw error(404);

	return {
		 post 
		
	};
}