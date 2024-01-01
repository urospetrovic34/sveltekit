<script lang="ts">
	import PaginationLink from './PaginationLink.svelte';
	export let count: number = 0;
</script>

<div class="flex justify-center gap-1 mb-5">
	<PaginationLink text="<" />
	{#each Array(count) as _, i}
		<PaginationLink pageNumber={i + 1} text={(i + 1).toString()} />
	{/each}
	<PaginationLink text=">" />
</div>
