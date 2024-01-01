import type { PageServerLoad } from './$types.js';
import { env } from '$env/dynamic/private';
import { redis } from '$lib/server/redis';

const setPagination = (page: number) => {
	if (!page) {
		return '0-8';
	}
	const startIndex = (Number(page) - 1) * 9;
	const lastIndex = startIndex + 8;
	return `${startIndex}-${lastIndex}`;
};

export const load: PageServerLoad = async ({ fetch, url }) => {
	const page = Number(url.searchParams.get('page'));
	// const cached = await redis.get('products');
	// if (cached) {
	// 	return { products: JSON.parse(cached) };
	// }
	const res = await fetch(`${env.API_URL}/rest/v1/product?select=*,product_category(name)`, {
		headers: {
			apiKey: env.API_KEY,
			Authorization: `Bearer ${env.API_KEY}`,
			Prefer: 'count=exact',
			Range: setPagination(page)
		}
	});
	const productsData = await res.json();
	const paginationRange = res.headers.get('content-range');
	const paginationCount = Math.ceil(Number(paginationRange?.split('/')[1]) / 9);
	// redis.set('products', JSON.stringify({ productsData, paginationCount }), 'EX', 600);
	return { products: { productsData, paginationCount } };
};
