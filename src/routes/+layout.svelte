<script>
    import "../app.css";
    import { scroll } from "./stores";
    import Header from './Header.svelte';
    import Footer from "./Footer.svelte";
    export let data;
</script>

<svelte:window bind:scrollY={$scroll} />


<Header nav_links={data.cats}/>
<slot style="height: calc(100vh - 74px)"/>
<Footer />
