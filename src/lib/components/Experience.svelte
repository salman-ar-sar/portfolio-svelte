<script lang="ts">
	import { onMount } from 'svelte';
	import { experience } from '$lib/data';

	let timelineEl: HTMLElement;
	let lineEl: HTMLElement;

	onMount(() => {
		if (!timelineEl || !lineEl) return;

		const update = () => {
			const rect = timelineEl.getBoundingClientRect();
			const passed = Math.max(0, window.innerHeight * 0.65 - rect.top);
			const pct = Math.max(0, Math.min(1, passed / rect.height));
			lineEl.style.setProperty('--line-progress', pct * 100 + '%');
		};

		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
		update();

		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	});
</script>

<section id="experience" aria-labelledby="exp-title">
	<div class="section-label reveal">02 / experience.log</div>
	<h2 class="section-title reveal delay-1" id="exp-title">
		Building, shipping, <span class="accent">iterating</span>.
	</h2>

	<div class="timeline" bind:this={timelineEl}>
		<div class="timeline-line" bind:this={lineEl} aria-hidden="true"></div>

		{#each experience as job, i (`${job.company}-${job.role}-${i}`)}
			<div class="tl-item reveal delay-{(i % 3) + 1}">
				<div class="tl-dot" aria-hidden="true"></div>
				<div class="tl-card">
					<div class="tl-period">{job.period}</div>
					<div class="tl-role">{job.role}</div>
					<div class="tl-company">{job.company}</div>
					<ul class="tl-list">
						{#each job.highlights as point (`${job.company}-${point}`)}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
