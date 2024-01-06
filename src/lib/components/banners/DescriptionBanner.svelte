<script lang="ts">
	const images = [
		'https://a.storyblok.com/f/266369/626x426/fa5ee58f2e/turquoise-seamless-zigzag-pattern_1035-17341.webp',
		'https://a.storyblok.com/f/266369/626x417/592ba624c2/geometric-mural-wallpaper_23-2148690665.webp',
		'https://a.storyblok.com/f/266369/626x417/92da38850e/bauhaus-background-wallpaper-colorful-primary-color-vector_53876-135994.webp',
		'https://a.storyblok.com/f/266369/626x417/e1c07565f1/geometric-groovy-pattern_23-2148854270.webp'
	];
</script>

<div class="flex flex-col justify-center items-center my-7 gap-10 border border-slate-700 p-10">
	<div class="lg:flex gap-10 grid grid-cols-2">
		{#each images as image}
			<img src={image} alt="Description Banner" class="rounded-full h-[200px] w-[200px]" />
		{/each}
	</div>
	<h1 class="text-2xl text-center">Unleash the power within and conquer the challenges that await you</h1>
</div>
