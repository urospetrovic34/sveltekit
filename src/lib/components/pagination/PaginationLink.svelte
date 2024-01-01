<script lang="ts">
	export let pageNumber: number = 1;
	export let text: string = '';
</script>

<a href="/ponder?page={pageNumber}">
	<button class="bg-slate-500 text-white w-[40px] h-[40px] flex items-center justify-center rounded-full" type="button">
		{text}
	</button>
</a>
