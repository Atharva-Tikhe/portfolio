<script lang="ts">
    import Hero from '$lib/hero.svelte';
    import Nav from '$lib/Nav.svelte';
    import About from '$lib/About.svelte';
    import Education from '$lib/Education.svelte';
    import Projects from '$lib/Projects.svelte';
    import Experience from '$lib/Experience.svelte';
	import Skills from '$lib/Skills.svelte';
	import Contact from '$lib/Contact.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav />

<main class="max-w-max-width mx-auto px-base md:px-margin-desktop">
    <Hero />
    <About />
    <Education />
    <Experience />
    <Projects /> 
    <Skills />
    <Contact />
</main>

<Footer />
