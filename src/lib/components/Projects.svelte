<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data';

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) return;

		document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
			card.addEventListener('mousemove', (e) => {
				const r = card.getBoundingClientRect();
				const x = e.clientX - r.left;
				const y = e.clientY - r.top;
				const rx = (y / r.height - 0.5) * -6;
				const ry = (x / r.width - 0.5) * 6;
				card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
				card.style.setProperty('--mx', x + 'px');
				card.style.setProperty('--my', y + 'px');
			});
			card.addEventListener('mouseleave', () => {
				card.style.transform = '';
			});
		});
	});
</script>

<section id="projects" aria-labelledby="proj-title">
	<div class="section-label reveal">03 / projects</div>
	<h2 class="section-title reveal delay-1" id="proj-title">
		Things I've <span class="accent">built</span> recently.
	</h2>

	<div class="proj-grid">
		{#each projects as project, i (`${project.name}-${i}`)}
			<article class="proj reveal delay-{(i % 3) + 1}" data-tilt>
				<div class="proj-head">
					<div class="proj-icon">{project.icon}</div>
					<div class="proj-type">{project.type}</div>
				</div>
				<h3 class="proj-name">{project.name}</h3>
				<div class="proj-chips">
					{#each project.stack as tech (`${project.name}-${tech}`)}
						<span class="chip">{tech}</span>
					{/each}
				</div>
				<ul class="proj-list">
					{#each project.points as point (`${project.name}-${point}`)}
						<li>{point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
