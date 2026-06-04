<script>
	import { observeSection } from './actions/observeSection';
	import { reveal } from './animations/reveal';
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
<section
	use:observeSection
	use:reveal
	class="border-t border-border-subtle py-section-gap"
	id="experience"
>
	<h2 class="mb-gutter font-headline-lg text-headline-lg">Experience</h2>
	<div class="relative ml-4">
		<div class="timeline-line absolute top-0 bottom-0 -left-0.5"></div>
		<div class="space-y-12">
			<!-- Entry 1 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase">May '26 — Present</span>
				<h3 class="mt-1 font-headline-md text-headline-md">Scientific Content Creation Intern</h3>
				<p class="font-label-md text-on-surface-variant">John Walton Muscular Dystrophy Research Center | DECRI <span class="text-gray-500">| UK</span>  </p>
				<p class="mt-4 max-w-2xl font-body-md">
					Worked on making scientific visual/textual assets for the organisations, mainly about MD awareness.
				</p>
			</div>
			<!-- Entry 2 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase">Nov '25  — May '26</span>
				<h3 class="mt-1 font-headline-md text-headline-md">Teaching Resource Content Creation Intern</h3>
				<p class="font-label-md text-on-surface-variant">Faculty of Medical Sciences | Newcastle University <span class="text-gray-500">| UK</span> </p>
				<p class="mt-4 max-w-2xl font-body-md">
					Worked on managing Canvas pages for new courses under CPD
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">
					Created visual/animated/textual content for the assigned CPD course
				</p>
			</div>
			<!-- Entry 3 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase"> May '24  —  Aug '25</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>Bioinformatics Engineer</strong></h3>
				<p class="font-label-md text-on-surface-variant">MedGenome Labs PVT. LTD. <span class="text-gray-500"> | IND</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
					Designed and deployed pipelines using Nextflow with DRAGEN modules reducing alignment job times by 80%
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Managed a suite of pipelines on HPC (PBS)</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Delivered corporate training to interns</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Designed phasing, imputation and PRS pipelines</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Wrote optimization plugin in Java to cleanup work folders (saved 300GB/sample)</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Designed & deployed web-app for internal primer design/QC</p>
			</div>
            <div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase"> Jan '24  —  May '24</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>Bioinformatics Intern</strong></h3>
				<p class="font-label-md text-on-surface-variant">GreenArray Genomic Research & Solutions <span class="text-gray-500"> | IND</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
                    Developed Nextflow pipeline for clinical variant calling of WES data
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Created a full-stack webapp to process variant calling data for business needs</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Performed primer designing and validation for HPV strains.</p>
			</div>
            <div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase"> Jun '22  —  Aug '22</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>Bioinformatics Intern</strong></h3>
				<p class="font-label-md text-on-surface-variant"> IIT Bombay <span class="text-gray-500"> | IND</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
                    In silico analysis of anti-inflammatory effects of phenolics on jaggery; Performed systemic literature review;
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Designed and executed molecular docking and dynamics simulations.</p>
			</div>
		</div>
	</div>
</section>
