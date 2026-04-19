<script lang="ts">
	import { onMount } from 'svelte';
	import { stats, tickerTech } from '$lib/data';

	let statEls: HTMLElement[] = [];

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const countObs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (!e.isIntersecting) return;
				const el = e.target as HTMLElement;
				const target = parseInt(el.dataset.count ?? '0', 10);
				const suffix = el.dataset.suffix ?? '';
				if (reduced) {
					el.textContent = target + suffix;
				} else {
					const duration = 1200;
					const start = performance.now();
					const step = (now: number) => {
						const t = Math.min(1, (now - start) / duration);
						const eased = 1 - Math.pow(1 - t, 3);
						el.textContent = Math.round(target * eased) + suffix;
						if (t < 1) requestAnimationFrame(step);
					};
					requestAnimationFrame(step);
				}
				countObs.unobserve(el);
			});
		}, { threshold: 0.4 });

		statEls.forEach((el) => { if (el) countObs.observe(el); });

		return () => countObs.disconnect();
	});
</script>

<section id="about" aria-labelledby="about-title">
	<div class="section-label reveal">01 / whoami</div>
	<h2 class="section-title reveal delay-1" id="about-title">
		Full-stack engineer who <span class="accent">ships to production</span>.
	</h2>

	<div class="about-grid">
		<div class="about-text reveal delay-2">
			<p>
				I'm a <span class="highlight">Senior Software Development Engineer</span> at Hatio Innovation,
				where I lead two concurrent product teams shipping React Native and web experiences. I care
				about tight feedback loops, clean architecture, and the kind of polish that makes interfaces
				feel alive.
			</p>
			<p>
				Most of my last four years have been spent in the messy middle of product work — greenfield
				apps, legacy migrations, Fastlane pipelines, theme rewrites, REST layers in Spring Boot —
				anything that gets a working thing into users' hands faster.
			</p>
		</div>

		<div class="stat-grid reveal delay-3">
			{#each stats as stat, i}
				<div class="stat">
					<div
						class="stat-num"
						data-count={stat.value}
						data-suffix={stat.suffix}
						bind:this={statEls[i]}
					>0{stat.suffix}</div>
					<div class="stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="ticker-wrap reveal delay-3" aria-hidden="true">
		<div class="ticker-track">
			{#each [0, 1] as _}
				<span>
					{#each tickerTech as tech, i}
						<b>{tech}</b>{#if i < tickerTech.length - 1}<span class="sep">◆</span>{/if}
					{/each}
				</span>
			{/each}
		</div>
	</div>
</section>
