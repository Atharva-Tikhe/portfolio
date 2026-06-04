<script>
	import { observeSection } from './actions/observeSection';
	import { reveal } from './animations/reveal';
</script>

<section
	use:observeSection
	use:reveal
	class="border-t border-border-subtle py-section-gap"
	id="education"
>
	<h2 class="mb-gutter font-headline-lg text-headline-lg">Education</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	<!-- Education Card 2 -->
		<div
			class="border border-border-subtle bg-surface-container-lowest p-gutter transition-all duration-300 hover:border-primary"
		>
			<div class="mb-6 flex items-start justify-between">
				<div class="flex-1">
					<h3 class="mb-1 font-headline-md text-headline-md">MSc in Bioinformatics</h3>
					<p class="font-label-md text-primary">Newcastle University, UK</p>
					<p class="mt-1 text-label-sm tracking-wider text-on-surface-variant uppercase">
						2025 — 2026
					</p>
				</div>
				<div
					class="flex h-10 w-20 items-center justify-center "
				>
					<!-- <span class="material-symbols-outlined text-on-surface-variant">school</span> -->
					 <img src="icons/newcastle.png" alt="">
				</div>
			</div>
			<div class="space-y-4">
				<div>
					<p class="mb-1 font-label-sm text-primary uppercase">Thesis</p>
					<p class="border-l-2 border-primary py-1 pl-4 font-body-md italic">
						Semi-Automated Pipeline for Analysis of SNP Array Files
					</p>
					<p class="border-l-2 border-blue-950 py-1 pl-4 font-body-md italic">
						LRCG, Newcastle Centre for Cancer
					</p>
				</div>
				<div>
					<p class="mb-2 font-label-sm text-primary uppercase">Areas</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Pipeline Development</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Research Software Engineering</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Microarray Bioinformatics</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Nexus Copy Number</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Statistical Analysis</span
						>
					</div>
				</div>
			</div>
		</div>
		<!-- Education Card 1 -->
		<div
			class="border border-border-subtle bg-surface-container-lowest p-gutter transition-all duration-300 hover:border-primary"
		>
			<div class="mb-6 flex items-start justify-between">
				<div class="flex-1">
					<h3 class="mb-1 font-headline-md text-headline-md">MTech in Bioengineering <strong class="text-xs text-amber-400">Gold Medal</strong> </h3>
					<p class="font-label-md text-primary">School of Bioengineering Sciences & Research</p>
					<p class="font-label-md text-ncl-blue">MIT-ADT University</p>
					<p class="mt-1 text-label-sm tracking-wider text-on-surface-variant uppercase">
						2019 — 2024
					</p>
				</div>
				<div
					class="flex h-10 w-10 items-center justify-center  "
				>
					<!-- <span class="material-symbols-outlined text-on-surface-variant">school</span> -->
					 <img src="icons/mitlogo.png" alt="">
				</div>
			</div>
			<div class="space-y-4">
				<div>
					<p class="mb-1 font-label-sm text-primary uppercase">Research Project</p>
					<p class="border-l-2 border-primary py-1 pl-4 font-body-md italic">
						Comparative Analysis of Variant Callers for Whole Exome Sequencing
					</p>
					<p class="border-l-2 border-blue-950 py-1 pl-4 font-body-md text-sm italic">
						Minor : 16S rRNA Sequencing Analysis & Pipeline for pre-eclampsia
					</p>
				</div>
				<div>
					<p class="mb-2 font-label-sm text-primary uppercase">Areas</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>NGS Data Analysis</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Bioinformatics</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Molecular Biology Labs</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Metagenomics</span
						>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</section>
