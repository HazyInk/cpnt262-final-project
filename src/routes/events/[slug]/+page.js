import { eventArr } from '../data.js';



export function load({ params })  {
	const post = eventArr.find((post) => post.slug === params.slug);
	
  if (!post) throw error(404);

	return {
		 post 
		
	};
}