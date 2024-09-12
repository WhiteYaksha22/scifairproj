<script>
    export let nav_links;
    function kebab_case(text) {
      return text.toLowerCase().replace(" ", "-")
    }
</script>

<header class="bg-black text-white py-4">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Logo or Brand Name -->
      <a href="/" class="text-2xl font-bold font-serif">
        Singularity
      </a>
  
      <!-- Navigation Links -->
      <nav>
        <ul class="flex space-x-4">
          {#each nav_links as nav_link}
            {#if typeof(nav_link) === "string"}
              <li>
                <a href="/{kebab_case(nav_link)}}" class="hover:text-gray-400">
                  {nav_link}
                </a>
              </li>
            {:else}
              <div class="dropdown">
                <button class="drop-btn">{nav_link[0]}</button>
                <div class="drop-content">
                  {#each nav_link.slice(1) as item}
                    <a href="/{kebab_case(item)}">
                      {item}
                    </a>
                  {/each}
                </div>
              </div>
            {/if}
          {/each}
        </ul>
      </nav>

    </div>
</header>