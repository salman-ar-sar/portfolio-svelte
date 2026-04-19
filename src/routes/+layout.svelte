<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import faviconApple from '$lib/assets/favicon-apple.png';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/png" />
	<link rel="apple-touch-icon" href={faviconApple} />
</svelte:head>

{@render children()}
