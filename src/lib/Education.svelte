<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<section use:observeSection use:reveal class="py-section-gap border-t border-border-subtle" id="education">
<h2 class="font-headline-lg text-headline-lg mb-gutter ">Education</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Education Card 1 -->
<div class="bg-surface-container-lowest border border-border-subtle p-gutter  transition-all duration-300 hover:border-primary">
<div class="flex items-start justify-between mb-6">
<div class="flex-1">
<h3 class="font-headline-md text-headline-md mb-1">MTech in Bioengineering</h3>
<p class="text-primary font-label-md">Premier Engineering Institute</p>
<p class="text-on-surface-variant text-label-sm uppercase tracking-wider mt-1">2020 — 2022</p>
</div>
<div class="w-10 h-10 bg-surface-container-low flex items-center justify-center border border-border-subtle">
<span class="material-symbols-outlined text-on-surface-variant">school</span>
</div>
</div>
<div class="space-y-4">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Thesis</p>
<p class="font-body-md italic border-l-2 border-primary pl-4 py-1">Computational modeling of protein-ligand interactions in oncology. Focused on structural biology and molecular dynamics.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-2">Important Topics</p>
<div class="flex flex-wrap gap-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Structural Biology</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Molecular Dynamics</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Computational Oncology</span>
</div>
</div>
</div>
</div>
<!-- Education Card 2 -->
<div class="bg-surface-container-lowest border border-border-subtle p-gutter  transition-all duration-300 hover:border-primary">
<div class="flex items-start justify-between mb-6">
<div class="flex-1">
<h3 class="font-headline-md text-headline-md mb-1">MSc in Bioinformatics</h3>
<p class="text-primary font-label-md">Science University</p>
<p class="text-on-surface-variant text-label-sm uppercase tracking-wider mt-1">2018 — 2020</p>
</div>
<div class="w-10 h-10 bg-surface-container-low flex items-center justify-center border border-border-subtle">
<span class="material-symbols-outlined text-on-surface-variant">school</span>
</div>
</div>
<div class="space-y-4">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Specialization</p>
<p class="font-body-md italic border-l-2 border-primary pl-4 py-1">Specialized in sequence analysis, structural bioinformatics, and statistical programming for large biological datasets.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-2">Important Topics</p>
<div class="flex flex-wrap gap-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Sequence Analysis</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Structural Bioinformatics</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle">Statistical Programming</span>
</div>
</div>
</div>
</div>
</div>
</section>