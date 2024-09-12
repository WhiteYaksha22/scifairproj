<script>
  import vid from '$lib/blackhole.mp4';
  import { fade } from 'svelte/transition';
  import { scroll } from './stores';
  import { kebab_case } from '$lib';
  export let data;
</script>


<div class="flex flex-col justify-center items-center bg-black" >
  <div style:transform={`translate3d(0, ${$scroll*0.7}px, 0)`}>
    <video class="blur-sm" autoplay loop muted>
      <source src="{vid}" type="video/mp4" />
      <track kind="captions" />
    </video>
  </div>

  
  <div class="z-10 h-96">
    {#if $scroll > 300}
      <h1 transition:fade class="font-sans text-8xl font-extrabold text-white opacity-60 drop-shadow-md shadow-slate-900">Peer into the Abyss</h1>
    {/if}
  </div>
  
  <div class="z-10 h-96">
    {#if $scroll > 500}
      <div transition:fade>
        <svg width="600" height="400" class="relative">
          <line x1="100" y1="300" x2="200" y2="200" stroke="white" />
          <line x1="200" y1="200" x2="300" y2="220" stroke="white" />
          <line x1="300" y1="220" x2="400" y2="120" stroke="white" />
          <line x1="400" y1="120" x2="500" y2="180" stroke="white" />

          {#each data.cats[2].slice(1) as star}
            <a href="{kebab_case(star.title)}" title={star.title}>
              <circle
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                class="fill-white hover:fill-yellow-500 transition duration-200 cursor-pointer"
              />
            </a>
          {/each}
        </svg>
      </div>
    {/if}
  </div>
</div>
