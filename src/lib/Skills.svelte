<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<section use:observeSection use:reveal class="py-section-gap border-t border-border-subtle" id="skills">
<h2 class="font-headline-lg text-headline-lg mb-gutter ">Technical Skills</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Bioinformatics -->
<div class="skill-badge border-primary bg-surface-container-low p-gutter  transition-colors duration-300 hover:bg-white hover:shadow-sm">
<h3 class="font-label-md text-label-md mb-4 text-text-main">Bioinformatics</h3>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Sequence Analysis</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Variant Calling</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Metagenomics</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Phylogenetics</span>
</div>
</div>
<!-- Programming -->
<div class="skill-badge border-[#00703C] bg-surface-container-low p-gutter  transition-colors duration-300 hover:bg-white hover:shadow-sm">
<h3 class="font-label-md text-label-md mb-4 text-text-main">Programming</h3>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Python</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">R / Bioconductor</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Bash/Unix</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">SQL</span>
</div>
</div>
<!-- Data Engineering -->
<div class="skill-badge border-[#ba1a1a] bg-surface-container-low p-gutter  transition-colors duration-300 hover:bg-white hover:shadow-sm">
<h3 class="font-label-md text-label-md mb-4 text-text-main">Data Engineering</h3>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Nextflow</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Snakemake</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">ETL Pipelines</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">AWS S3/Batch</span>
</div>
</div>
<!-- Scientific Computing -->
<div class="skill-badge border-primary bg-surface-container-low p-gutter  transition-colors duration-300 hover:bg-white hover:shadow-sm">
<h3 class="font-label-md text-label-md mb-4 text-text-main">Scientific Computing</h3>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Pandas/NumPy</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Statistics</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Data Viz</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">BioPython</span>
</div>
</div>
<!-- DevOps -->
<div class="skill-badge border-[#555555] bg-surface-container-low p-gutter  transition-colors duration-300 hover:bg-white hover:shadow-sm">
<h3 class="font-label-md text-label-md mb-4 text-text-main">DevOps</h3>
<div class="flex flex-wrap gap-2">
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Docker</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Singularity</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Git / GitHub Actions</span>
<span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">HPC (SLURM)</span>
</div>
</div>
</div>
</section>