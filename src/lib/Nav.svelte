<script lang="ts">
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";
    import {navigation} from '$lib/state/navigation.svelte';

    let mobileMenuOpen = false;

</script>
<!-- TopNavBar -->
<header use:observeSection use:reveal class="sticky top-0 z-50 bg-background border-b-2 border-text-main">
    <nav class="flex justify-between items-center w-full px-base md:px-margin-desktop max-w-max-width mx-auto h-16">
        <div class="text-label-md font-headline-md font-bold text-text-main">Atharva Tikhe</div>
        <div class="hidden md:flex gap-gutter items-center">
        <a class:text-primary={navigation.activeSection === 'hero'} class="text-text-main hover:text-primary transition-colors duration-200 text-label-md font-label-md" href="#about">About</a>
        <a class:text-primary={navigation.activeSection === 'projects'} class="text-text-main hover:text-primary transition-colors duration-200 text-label-md font-label-md" href="#projects">Projects</a>
        <a class:text-primary={navigation.activeSection === 'experience'} class="text-text-main hover:text-primary transition-colors duration-200 text-label-md font-label-md" href="#experience">Experience</a>
        <a class:text-primary={navigation.activeSection === 'skills'} class="text-text-main hover:text-primary transition-colors duration-200 text-label-md font-label-md" href="#skills">Skills</a>
        <a class:text-primary={navigation.activeSection === 'contacts'} class="text-text-main hover:text-primary transition-colors duration-200 text-label-md font-label-md" href="#contact">Contact</a>
        </div>
            <button aria-label="Toggle menu" class="md:hidden text-text-main" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
                <span class="material-symbols-outlined">menu</span>
            </button>
    </nav>
    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="md:hidden bg-surface-container-low border-b-2 border-text-main px-base py-gutter flex flex-col gap-4" id="mobile-menu">
            <a class="text-label-md font-label-md py-2" href="#about">About</a>
            <a class="text-label-md font-label-md py-2" href="#projects">Projects</a>
            <a class="text-label-md font-label-md py-2" href="#experience">Experience</a>
            <a class="text-label-md font-label-md py-2" href="#skills">Skills</a>
            <a class="text-label-md font-label-md py-2" href="#contact">Contact</a>
        </div>    
    {/if}
</header>