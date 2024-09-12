<script>
    import "../app.css";
    import Header from './Header.svelte';
    import Footer from "./Footer.svelte";
    let nav_links = ["About", "FAQ", ["Black Holes", "Categories"]];
</script>

<Header {nav_links} />
<slot />
<Footer />
