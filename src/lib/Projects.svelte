<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<section use:observeSection use:reveal class="py-section-gap border-t border-border-subtle" id="projects">
<h2 class="font-headline-lg text-headline-lg mb-gutter ">Featured Technical Projects</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Project 1 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
<!-- svelte-ignore a11y_missing_attribute -->
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="A detailed technical visualization of genomic data patterns, showing heatmaps and chromosome sequences in a high-contrast digital interface. The style is reminiscent of a scientific paper's data visualization, using a professional palette of deep blues and charcoal grays. The mood is analytical and precise, suggesting advanced computational genomics work." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeWgIf84lPhuUlnq_YOyoo9ljrQokKxr7EllqHq-XZNo_Hmy7arAI9cxSTjSP80QgZCxYDlHP1QZMZHoSJqlUHz6tsIbjkB5ztk0mTUhIs_oJokIwKU93cdk-eqLdbDxgZ4mHNKwmoN2pS2cYVsHznhSTFWAIpWGqCHBoA7WoplrwkGRD6xnDzwWfjpmTHP2xxLJjZ65Jd22Deta9sWEiXnvLntwAqqpgwE9win6KIhxSe4eWhyW5nvcCd21y7boB2fpK_P2_7Qj1m"/>
</div>
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">Cancer Genomics Copy Number Analysis</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Problem</p>
<p>Identifying clinically significant copy number variations in heterogeneous tumor samples with high noise-to-signal ratios.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Developed a custom R/Bioconductor pipeline utilizing Bayesian modeling for sub-clonal population estimation and segment visualization.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">R</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Bioconductor</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">WGS</span>
</div>
</div>
</div>
</article>
<!-- Project 2 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="A clean, minimalist composition of code snippets and biological data tables on a high-resolution display. The interface looks like a professional bioinformatics workflow engine, with structured data flows and logs. The aesthetic is inspired by GOV.UK GDS design principles, focusing on high legibility and information architecture in a modern light-mode environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUsCTKMMUiX4KdbFjmfOpBpn5HwymxG46eVKBvoAs80O_zR1s8lLuflhYoEjiqJsaNsBRRWmoOglx7IFiZ7BV6ZcYxDnf4dUZ4YvYZ2TQyWKngt1VcJ_HFY1199TkkuCV7lwBNLLi903kEvi3NfRax2Wffg4juWH1T8s6j5jKKbYMrnz7EPKii-ZHhqPNN9Egrf5zVNV9n0GxwWufXhsyhdxb2q8OiW-VNBGGtkm086a6k2BueUF1mYwfQv9943oQV_hKRhDlsAC8"/>
</div>
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">Microarray Analysis Workflow</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Automated transcriptomic profiling using Nextflow for containerized tool execution, ensuring 100% reproducibility across environments.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Reduced analysis turnaround time by 60% and enabled standardized reporting for cross-study comparisons.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Nextflow</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Docker</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Transcriptomics</span>
</div>
</div>
</div>
</article>
<!-- Project 3 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">JBrowse Visualization Platform</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Problem</p>
<p>Need for an interactive, web-based tool to visualize complex structural variants and multi-omic data layers for non-computational researchers.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Technologies</p>
<p>React.js based implementation of JBrowse 2 components, AWS S3 for indexed data storage, and custom track renderers.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">JavaScript</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">AWS</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Genomics</span>
</div>
</div>
</div>
</article>
<!-- Project 4 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">Research Software Tooling</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Architected a suite of Python-based CLI utilities for FASTQ/BAM manipulation and quality control metadata aggregation.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Currently utilized by 3 research labs to streamline preliminary data checks and pipeline integration.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Python</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Pytest</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">CLI</span>
</div>
</div>
</div>
</article>
</div>
</section>