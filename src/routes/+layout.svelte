<script>
  import "../app.postcss";
  import SVG_Itniqua from "$lib/icons/SVG_Itniqua.svelte";
  import SVG_User from "$lib/icons/SVG_User.svelte";
  import SVG_MenuBars from "$lib/icons/SVG_MenuBars.svelte";
</script>

<nav class="w-full top-0 left-0 sticky bg-white z-50">
  <div class="w-full flex items-center">
    <div class="flex justify-start ml-2">
      <SVG_Itniqua />
    </div>
    <header
      class="flex justify-center flex-grow text-center font-semibold text-xs sm:text-lg">
      Rating Wizard Demonstration
    </header>
    <div class="flex justify-end items-center">
      <div class="mt-1 px-2 sm:px-4 md:px-6 bg-black text-white">
        <SVG_User />
      </div>
      <div class="mt-1 px-2 sm:px-4 md:px-6">
   <SVG_MenuBars />
      </div>
    </div>
  </div>
</nav>

<slot />

