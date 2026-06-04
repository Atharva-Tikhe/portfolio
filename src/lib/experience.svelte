<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<!-- <script lang="ts">
    import type { Company } from "$lib/types/institutes";
    import {onMount} from "svelte";
    import {gsap} from 'gsap';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const {company, extra} = $props<{company: Company, extra: any}>();
    
    onMount(() => {
        const tl = gsap.timeline();

        tl.fromTo("#marker", {top: 300, opacity: 0}, {top: 0, opacity: 1, backgroundColor: "rgba(104, 31, 62, 1)", duration: 1, ease: "power1"}).fromTo("#ruler", {opacity: 0}, {opacity: 1, stagger: 0.5});
        
        gsap.fromTo("#unique", {backgroundColor: "#004430"}, {
            opacity: 1,
            // scale: 1.2,
            backgroundColor: "#009368",
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })

    });



</script> -->
<section use:observeSection use:reveal class="py-section-gap border-t border-border-subtle" id="experience">
<h2 class="font-headline-lg text-headline-lg mb-gutter ">Experience &amp; Education</h2>
<div class="relative ml-4">
<div class="absolute -left-0.5 top-0 bottom-0 timeline-line"></div>
<div class="space-y-12">
<!-- Entry 1 -->
<div class="relative pl-10 ">
<div class="absolute left-[-8px] top-2 w-4 h-4 bg-primary"></div>
<span class="text-label-sm font-label-sm text-primary uppercase">2022 — Present</span>
<h3 class="font-headline-md text-headline-md mt-1">Bioinformatics Engineer</h3>
<p class="text-on-surface-variant font-label-md">Genomics Research Institute</p>
<p class="mt-4 max-w-2xl font-body-md">Leading the development of production-grade WGS/WES analysis pipelines. Implementing CI/CD for bioinformatics tools and managing large-scale HPC workloads.</p>
</div>
<!-- Entry 2 -->
<div class="relative pl-10 ">
<div class="absolute left-[-8px] top-2 w-4 h-4 bg-primary"></div>
<span class="text-label-sm font-label-sm text-primary uppercase">2020 — 2022</span>
<h3 class="font-headline-md text-headline-md mt-1">MTech in Bioengineering</h3>
<p class="text-on-surface-variant font-label-md">Premier Engineering Institute</p>
<p class="mt-4 max-w-2xl font-body-md">Thesis: Computational modeling of protein-ligand interactions in oncology. Focused on structural biology and molecular dynamics.</p>
</div>
<!-- Entry 3 -->
<div class="relative pl-10 ">
<div class="absolute left-[-8px] top-2 w-4 h-4 bg-primary"></div>
<span class="text-label-sm font-label-sm text-primary uppercase">2018 — 2020</span>
<h3 class="font-headline-md text-headline-md mt-1">MSc in Bioinformatics</h3>
<p class="text-on-surface-variant font-label-md">Science University</p>
<p class="mt-4 max-w-2xl font-body-md">Specialized in sequence analysis, structural bioinformatics, and statistical programming for large biological datasets.</p>
</div>
</div>
</div>
</section>