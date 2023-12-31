import type { PageServerLoad } from './$types.js';
import { env } from '$env/dynamic/private';
import { redis } from '$lib/server/redis';

export const load: PageServerLoad = async ({ fetch }) => {
	const cached = await redis.get('products');
	if (cached) {
		return { products: JSON.parse(cached) };
	}
	const res = await fetch(`${env.API_URL}/rest/v1/product?select=*,product_category(name)`, {
		headers: {
			apiKey: env.API_KEY,
			Authorization: `Bearer ${env.API_KEY}`
		}
	});
	const data = await res.json();
	redis.set('products', JSON.stringify(data), 'EX', 600);
	return { products: data };
};
