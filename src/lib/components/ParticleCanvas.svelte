<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const ctx = canvas.getContext('2d')!;
		const NODE_COUNT = 60;
		const MAX_DIST = 140;

		let W = 0,
			H = 0,
			dpr = 1;
		let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
		let mouseX = -1000,
			mouseY = -1000;
		let rafId: number;

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			W = canvas.width = Math.floor(window.innerWidth * dpr);
			H = canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = window.innerWidth + 'px';
			canvas.style.height = window.innerHeight + 'px';
		};

		const initNodes = () => {
			nodes = [];
			for (let i = 0; i < NODE_COUNT; i++) {
				nodes.push({
					x: Math.random() * W,
					y: Math.random() * H,
					vx: (Math.random() - 0.5) * 0.25 * dpr,
					vy: (Math.random() - 0.5) * 0.25 * dpr,
					r: (Math.random() * 1.5 + 0.4) * dpr
				});
			}
		};

		const onResize = () => {
			resize();
			initNodes();
		};
		const onMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX * dpr;
			mouseY = e.clientY * dpr;
		};

		resize();
		initNodes();
		window.addEventListener('resize', onResize);
		window.addEventListener('mousemove', onMouseMove);

		const draw = () => {
			ctx.clearRect(0, 0, W, H);

			for (const n of nodes) {
				n.x += n.vx;
				n.y += n.vy;
				if (n.x < 0 || n.x > W) n.vx *= -1;
				if (n.y < 0 || n.y > H) n.vy *= -1;
			}

			const md = MAX_DIST * dpr;
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const a = nodes[i],
						b = nodes[j];
					const dx = a.x - b.x,
						dy = a.y - b.y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < md) {
						const alpha = (1 - d / md) * 0.35;
						ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
						ctx.lineWidth = 0.5 * dpr;
						ctx.beginPath();
						ctx.moveTo(a.x, a.y);
						ctx.lineTo(b.x, b.y);
						ctx.stroke();
					}
				}
				const a = nodes[i];
				const mdx = a.x - mouseX,
					mdy = a.y - mouseY;
				const md2 = Math.sqrt(mdx * mdx + mdy * mdy);
				const mRange = 180 * dpr;
				if (md2 < mRange) {
					const alpha = (1 - md2 / mRange) * 0.6;
					ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
					ctx.lineWidth = 0.7 * dpr;
					ctx.beginPath();
					ctx.moveTo(a.x, a.y);
					ctx.lineTo(mouseX, mouseY);
					ctx.stroke();
				}
			}

			for (const n of nodes) {
				ctx.fillStyle = 'rgba(124, 58, 237, 0.7)';
				ctx.beginPath();
				ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
				ctx.fill();
			}

			rafId = requestAnimationFrame(draw);
		};
		draw();

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouseMove);
		};
	});
</script>

<canvas bind:this={canvas} id="particle-canvas" aria-hidden="true"></canvas>
