<script lang="ts">
	import { onMount } from 'svelte';
	import { typingPhrases } from '$lib/data';

	let typedText = $state('');

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			typedText = typingPhrases[0];
			return;
		}

		let pi = 0, ci = 0, deleting = false;
		let timer: ReturnType<typeof setTimeout>;

		const tick = () => {
			const phrase = typingPhrases[pi];
			if (!deleting) {
				ci++;
				typedText = phrase.slice(0, ci);
				if (ci === phrase.length) {
					timer = setTimeout(() => { deleting = true; tick(); }, 1500);
					return;
				}
				timer = setTimeout(tick, 55 + Math.random() * 35);
			} else {
				ci--;
				typedText = phrase.slice(0, ci);
				if (ci === 0) {
					deleting = false;
					pi = (pi + 1) % typingPhrases.length;
					timer = setTimeout(tick, 300);
					return;
				}
				timer = setTimeout(tick, 28);
			}
		};
		tick();

		return () => clearTimeout(timer);
	});
</script>

<section id="hero" aria-labelledby="hero-title">
	<div class="hero-copy">
		<div class="hero-tag reveal">
			<span>available for new collaborations</span>
		</div>
		<h1 class="hero-name reveal delay-1" id="hero-title">
			Salman&nbsp;A<span class="dot" aria-hidden="true"></span>
		</h1>
		<div class="hero-typed reveal delay-2" aria-live="polite">
			<span class="prompt">&gt;&nbsp;</span><span class="typed">{typedText}</span><span class="caret" aria-hidden="true"></span>
		</div>
		<div class="hero-meta reveal delay-2">
			<span>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 2a8 8 0 0 0-8 8c0 5.5 8 12 8 12s8-6.5 8-12a8 8 0 0 0-8-8z"/>
					<circle cx="12" cy="10" r="3"/>
				</svg>
				Kochi, Kerala · IN
			</span>
			<span>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
				</svg>
				4+ yrs shipping
			</span>
		</div>
		<div class="hero-cta reveal delay-3">
			<a href="#projects" class="btn btn-primary">
				<span>view projects</span>
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M5 12h14M13 5l7 7-7 7"/>
				</svg>
			</a>
			<a href="#" class="btn btn-ghost">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"/>
				</svg>
				<span>download resume</span>
			</a>
		</div>
	</div>

	<div class="hero-visual reveal delay-2" aria-hidden="true">
		<div class="hero-grid-bg"></div>
		<div class="ring"></div>
		<div class="ring r2"></div>
		<div class="ring r3"></div>
		<div class="orb"></div>
	</div>

	<div class="scroll-indicator" aria-hidden="true">
		<span>SCROLL</span>
		<div class="arrow"></div>
	</div>
</section>
