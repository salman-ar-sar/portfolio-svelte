<script lang="ts">
	import { education } from '$lib/data';
</script>

<section id="education" aria-labelledby="edu-title">
	<div class="section-label reveal">05 / education</div>
	<h2 class="section-title reveal delay-1" id="edu-title">
		Where I <span class="accent">started</span>.
	</h2>

	<div class="edu-card reveal delay-2">
		<div class="edu-sigil" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
				<path d="M12 2L2 8l10 6 10-6-10-6z" />
				<path d="M2 16l10 6 10-6" />
				<path d="M2 12l10 6 10-6" />
			</svg>
		</div>
		<div>
			<div class="edu-degree">{education.degree}</div>
			<div class="edu-college">{education.college}</div>
			<div class="edu-meta">
				<span>graduated {education.year}</span>
				<span>·</span>
				<span>4-year program</span>
			</div>
		</div>
		<div class="edu-cgpa">
			<div class="num">
				{education.cgpa}<span style="color: var(--text-muted); font-size: 16px;">/10</span>
			</div>
			<div class="lbl">CGPA</div>
		</div>
	</div>
</section>
