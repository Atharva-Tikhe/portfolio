<script lang="ts">
    import type { Company } from "$lib/types/institutes";
    import Experience from "$lib/Experience.svelte";
	
    const {companies} = $props<{companies: Array<Company>}>();

</script>

<!-- <div class="flex flex-col"> -->
<!-- <div id="company" class='flex flex-col md:flex-row mt-5 max-sm-justify-center gap-4'> -->
    
    

    {#each companies as company, i}
        {#if i == 0}
            <Experience {company} extra = "mt-5" />
        {:else}
            <Experience {company} extra = "" />
        {/if}
    {/each }    


<!-- </div> -->

<!-- </div> -->