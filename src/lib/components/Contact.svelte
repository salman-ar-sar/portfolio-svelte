<script lang="ts">
	import { person } from '$lib/data';
</script>

<section id="contact" aria-labelledby="contact-title">
	<div class="section-label reveal" style="justify-content:center">06 / contact</div>
	<h2 class="contact-title reveal delay-1" id="contact-title">
		Let's build<br /><span class="glow">something that matters.</span>
	</h2>
	<p class="contact-sub reveal delay-2">
		Open to senior full-stack and React Native roles, freelance work, and interesting
		collaborations. Response time is usually under a day.
	</p>

	<div class="contact-actions reveal delay-3">
		<a href="mailto:{person.email}" class="btn btn-primary">
			<svg
				width="14"
				height="14"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" />
			</svg>
			<span>{person.email}</span>
		</a>
		<a href={person.github} class="icon-link" aria-label="GitHub">
			<svg viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
				/>
			</svg>
		</a>
		<a href={person.linkedin} class="icon-link" aria-label="LinkedIn">
			<svg viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
				/>
			</svg>
		</a>
	</div>
</section>

<footer>
	<div>
		<span style="font-family: var(--mono);">© 2026 · {person.name}</span>
	</div>
	<div class="legend">
		<span><i></i> system.online</span>
		<span style="color: var(--text-dim)">built with SvelteKit · TypeScript · Tailwind</span>
	</div>
</footer>
