<script lang="ts">
	import { onMount } from 'svelte';
	import ParticleCanvas from '$lib/components/ParticleCanvas.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const reveals = document.querySelectorAll<HTMLElement>('.reveal');

		if (reduced) {
			reveals.forEach((el) => el.classList.add('in'));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
		);

		reveals.forEach((el) => io.observe(el));

		return () => io.disconnect();
	});
</script>

<svelte:head>
	<title>Salman A — Senior Full Stack Engineer</title>
	<meta name="description" content="Senior Full Stack Engineer specialising in React Native, TypeScript, Next.js and Spring Boot." />
</svelte:head>

<ParticleCanvas />
<Cursor />
<Nav />

<main>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Skills />
	<Education />
	<Contact />
</main>
