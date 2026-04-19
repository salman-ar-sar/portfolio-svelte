<script lang="ts">
	import { onMount } from 'svelte';

	let glow = $state<HTMLDivElement | undefined>();
	let dot = $state<HTMLDivElement | undefined>();
	let showCursor = $state(false);

	onMount(() => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const coarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

		if (reducedMotion || coarsePointer) {
			showCursor = false;
			return;
		}

		showCursor = true;

		let tx = 0,
			ty = 0,
			cx = 0,
			cy = 0;
		let rafId: number;
		const interactiveElements = Array.from(document.querySelectorAll<HTMLElement>('a, button'));

		const onMove = (e: MouseEvent) => {
			tx = e.clientX;
			ty = e.clientY;
			if (!dot) return;
			dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
		};

		const tick = () => {
			if (!glow) return;
			cx += (tx - cx) * 0.15;
			cy += (ty - cy) * 0.15;
			glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
			rafId = requestAnimationFrame(tick);
		};
		tick();

		const onEnter = () => glow?.classList.add('active');
		const onLeave = () => glow?.classList.remove('active');

		window.addEventListener('mousemove', onMove);
		interactiveElements.forEach((el) => {
			el.addEventListener('mouseenter', onEnter);
			el.addEventListener('mouseleave', onLeave);
		});

		return () => {
			showCursor = false;
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', onMove);
			interactiveElements.forEach((el) => {
				el.removeEventListener('mouseenter', onEnter);
				el.removeEventListener('mouseleave', onLeave);
			});
		};
	});
</script>

{#if showCursor}
	<div class="cursor-glow" bind:this={glow} aria-hidden="true"></div>
	<div class="cursor-dot" bind:this={dot} aria-hidden="true"></div>
{/if}
