<script>
  // Define an array of stars with coordinates and corresponding URLs
  let stars = [
    { id: 1, cx: 100, cy: 150, r: 5, link: '/types', title: 'Types of Black Holes' },
    { id: 2, cx: 200, cy: 80, r: 5, link: '/detection', title: 'Detection of Black Holes' },
    { id: 3, cx: 300, cy: 200, r: 5, link: '/hawking-radiation', title: 'Hawking Radiation' },
    { id: 4, cx: 400, cy: 120, r: 5, link: '/famous', title: 'Famous Black Holes' },
    { id: 5, cx: 500, cy: 180, r: 5, link: '/faq', title: 'FAQs' }
  ];
</script>

<!-- Constellation Container -->
<div class="flex justify-center items-center h-screen bg-gray-900">
  <!-- SVG for the constellation -->
  <svg width="600" height="400" class="relative">
    <!-- Draw lines connecting stars -->
    <line x1="100" y1="150" x2="200" y2="80" stroke="white" />
    <line x1="200" y1="80" x2="300" y2="200" stroke="white" />
    <line x1="300" y1="200" x2="400" y2="120" stroke="white" />
    <line x1="400" y1="120" x2="500" y2="180" stroke="white" />

    <!-- Map over stars array to create circles -->
    {#each stars as star}
      <a href={star.link} title={star.title}>
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

<style>
  /* Add custom styles if necessary */
</style>