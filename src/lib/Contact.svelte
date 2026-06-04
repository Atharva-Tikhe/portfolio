<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<section use:observeSection use:reveal class="py-section-gap border-t-2 border-text-main text-center" id="contact">
<div class="">
<h2 class="font-headline-lg text-headline-lg mb-4">Get in Touch</h2>
<p class="font-body-lg text-body-lg mb-10 max-w-xl mx-auto">Open for collaboration on bioinformatics tooling, research pipelines, and computational biology projects.</p>
</div>
<div class="flex flex-wrap justify-center gap-gutter ">
<a class="flex flex-col items-center gap-2 group" href="mailto:email@example.com">
<div class="w-16 h-16 flex items-center justify-center bg-primary text-white transition-all duration-300 group-hover:bg-[#004a80] group-hover:-translate-y-1">
<span class="material-symbols-outlined text-3xl">mail</span>
</div>
<span class="font-label-md text-label-md">Email</span>
</a>
<a class="flex flex-col items-center gap-2 group" href="#">
<div class="w-16 h-16 flex items-center justify-center bg-text-main text-white transition-all duration-300 group-hover:bg-primary group-hover:-translate-y-1">
<span class="material-symbols-outlined text-3xl">code</span>
</div>
<span class="font-label-md text-label-md">GitHub</span>
</a>
<a class="flex flex-col items-center gap-2 group" href="#">
<div class="w-16 h-16 flex items-center justify-center bg-link-blue text-white transition-all duration-300 group-hover:bg-[#004a80] group-hover:-translate-y-1">
<span class="material-symbols-outlined text-3xl">groups</span>
</div>
<span class="font-label-md text-label-md">LinkedIn</span>
</a>
</div>
</section>