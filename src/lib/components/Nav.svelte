<script lang="ts">
	import { onMount } from 'svelte';
	import { person } from '$lib/data';

	let isScrolled = $state(false);
	let isOpen = $state(false);
	let activeSection = $state('');

	const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];
	const shortcutMap: Record<string, string> = {
		a: 'about', e: 'experience', p: 'projects',
		s: 'skills', d: 'education', c: 'contact', h: 'hero'
	};

	function close() { isOpen = false; }

	onMount(() => {
		const onScroll = () => { isScrolled = window.scrollY > 20; };
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		const onKey = (ev: KeyboardEvent) => {
			if (ev.metaKey || ev.ctrlKey || ev.altKey) return;
			const tag = (ev.target as HTMLElement)?.tagName ?? '';
			if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
			const id = shortcutMap[ev.key.toLowerCase()];
			if (!id) return;
			const el = document.getElementById(id);
			if (el) { ev.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
		};
		document.addEventListener('keydown', onKey);

		const navMap: Record<string, HTMLAnchorElement> = {};
		document.querySelectorAll<HTMLAnchorElement>('.nav-links a[data-nav]').forEach((a) => {
			const href = a.getAttribute('href');
			if (href) navMap[href.slice(1)] = a;
		});

		const sectionObs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) activeSection = e.target.id;
			});
		}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) sectionObs.observe(el);
		});

		return () => {
			window.removeEventListener('scroll', onScroll);
			document.removeEventListener('keydown', onKey);
			sectionObs.disconnect();
		};
	});
</script>

<div
	class="nav-backdrop"
	class:show={isOpen}
	aria-hidden="true"
	role="presentation"
	onclick={close}
></div>

<nav class="topnav" class:open={isOpen} class:scrolled={isScrolled} aria-label="Primary">
	<a href="#hero" class="brand" aria-label="{person.name} home">
		<span class="brand-dot" aria-hidden="true"></span>
		<span>salman<span style="color: var(--primary)">.</span>dev</span>
	</a>

	<ul class="nav-links" class:open={isOpen} id="nav-links">
		{#each [
			{ href: 'about',      num: '01.', label: 'about',      kbd: 'a' },
			{ href: 'experience', num: '02.', label: 'experience',  kbd: 'e' },
			{ href: 'projects',   num: '03.', label: 'projects',    kbd: 'p' },
			{ href: 'skills',     num: '04.', label: 'skills',      kbd: 's' },
			{ href: 'education',  num: '05.', label: 'education',   kbd: 'd' },
			{ href: 'contact',    num: '06.', label: 'contact',     kbd: 'c' },
		] as item}
			<li>
				<a
					href="#{item.href}"
					data-nav
					class:active={activeSection === item.href}
					onclick={close}
				>
					<span class="n">{item.num}</span>{item.label}<kbd class="k">{item.kbd}</kbd>
				</a>
			</li>
		{/each}
	</ul>

	<a href="#" class="resume-btn" aria-label="Download resume">resume.pdf ↓</a>

	<button
		class="hamburger"
		class:open={isOpen}
		aria-label="Toggle navigation menu"
		aria-expanded={String(isOpen)}
		onclick={() => (isOpen = !isOpen)}
	>
		<span></span><span></span><span></span>
	</button>
</nav>
