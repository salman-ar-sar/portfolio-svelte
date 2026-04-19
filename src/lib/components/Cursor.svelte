<script lang="ts">
	import { onMount } from 'svelte';

	let glow: HTMLDivElement;
	let dot: HTMLDivElement;

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		let tx = 0, ty = 0, cx = 0, cy = 0;
		let rafId: number;

		const onMove = (e: MouseEvent) => {
			tx = e.clientX; ty = e.clientY;
			dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
		};

		const tick = () => {
			cx += (tx - cx) * 0.15;
			cy += (ty - cy) * 0.15;
			glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
			rafId = requestAnimationFrame(tick);
		};
		tick();

		const onEnter = () => glow.classList.add('active');
		const onLeave = () => glow.classList.remove('active');

		window.addEventListener('mousemove', onMove);
		document.querySelectorAll('a, button').forEach((el) => {
			el.addEventListener('mouseenter', onEnter);
			el.addEventListener('mouseleave', onLeave);
		});

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', onMove);
		};
	});
</script>

<div class="cursor-glow" bind:this={glow} aria-hidden="true"></div>
<div class="cursor-dot" bind:this={dot} aria-hidden="true"></div>
