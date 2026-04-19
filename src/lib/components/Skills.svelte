<script lang="ts">
	import { skills } from '$lib/data';
</script>

<section id="skills" aria-labelledby="skills-title">
	<div class="section-label reveal">04 / stack</div>
	<h2 class="section-title reveal delay-1" id="skills-title">
		Tools I reach for <span class="accent">by default</span>.
	</h2>

	<div class="skills-grid">
		{#each skills as group, i (group.group)}
			<div class="skill-group reveal delay-{(i % 3) + 1}">
				<h3>{group.group}</h3>
				<div class="skill-chips">
					{#each group.items as [name] (name)}
						<span class="skill-chip">{name}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
