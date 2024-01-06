import type { PageServerLoad } from './$types.js';
import { env } from '$env/dynamic/private';
import { redis } from '$lib/server/redis';

export const load: PageServerLoad = async ({ fetch, params }) => {
	const cached = await redis.get(`product-${params.slug}`);
	if (cached) {
		const product = JSON.parse(cached);
		return { product };
	}
	const res = await fetch(
		`${env.API_URL}/rest/v1/product?slug=eq.${params.slug}&select=*,product_category(name)`,
		{
			headers: {
				apiKey: env.API_KEY,
				Authorization: `Bearer ${env.API_KEY}`
			}
		}
	);
	const data = await res.json();
	const product = data[0];
	redis.set(`product-${params.slug}`, JSON.stringify(product), 'EX', 600);
	return { product };
};
