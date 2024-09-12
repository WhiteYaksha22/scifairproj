<script>
    export let nav_links;
    import { scroll } from "./stores";
    import { kebab_case} from "$lib/index";

    let show_menu = false;
    function dropdown_clicked(e) {
        show_menu = !(show_menu);
    }
</script>

<header class="bg-black text-white py-4 fixed mt-0 w-full shadow-lg shadow-slate-900 z-50">
    <div class="container flex mx-auto justify-between items-center px-4">
      <!-- Logo or Brand Name -->
      <a href="/" class="text-2xl font-bold font-serif">
        Singularity
      </a>
  
      <!-- Navigation Links -->
      <nav class="grow">
        <ul class="flex justify-end space-x-2">
          {#each nav_links as nav_link}
            {#if typeof(nav_link) === "string"}
              <li class="p-3">
                <a href="/{kebab_case(nav_link)}" class="hover:text-gray-400">
                  {nav_link}
                </a>
              </li>
            {:else}
              <div class="relative">
                <button class="hover:text-gray-400 p-3 active:bg-slate-950" on:click={dropdown_clicked}>{nav_link[0]}</button>
                <ul class="{show_menu ? "visible" : "invisible"} absolute bg-black w-full shadow-xl shadow-slate-900 divide-y-2 divide-slate-900">
                  {#each nav_link.slice(1) as item}
                    <li class="px-5 py-3 hover:text-gray-400">
                        <a href="/{kebab_case(item.title)}">
                        {item.title}
                        </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          {/each}
        </ul>
      </nav>

    </div>
</header>
<div class="pb-32"></div>