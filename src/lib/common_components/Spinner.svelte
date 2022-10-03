<script>
  /* 
Reason for not combining size & units is that size is required as a value to maniplulate border-width
*/
  export let size = 1.5;
  export let unit = "em";
  export let color = "currentColor";
 
  let inner = 65;
  let outer = 230;
  let center = 120;
  let min = 10;
  let mid = 175;
</script>

<div class="mx-auto" style="width:{size}{unit}">
  <svg viewBox="0 0 240 240">
    <g stroke-width="24" stroke-linecap="round" stroke={color} fill="none">
      <line
        opacity="0.13"
        x1={center}
        y1={inner}
        x2={center}
        y2={min}
        class="origin-center rotate-45"
      />
      <line opacity="0.25" x1={mid} y1={center} x2={outer} y2={center} />
      <line
        opacity="0.38"
        x1={mid}
        y1={center}
        x2={outer}
        y2={center}
        class="origin-center rotate-45"
      />
      <line opacity="0.5" x1={center} y1={mid} x2={center} y2={outer} />
      <line
        opacity="0.68"
        x1={center}
        y1={mid}
        x2={center}
        y2={outer}
        class="origin-center rotate-45"
      />
      <line opacity="0.75" x1={min} y1={center} x2={inner} y2={center} />
      <line
        opacity="0.88"
        x1={min}
        y1={center}
        x2={inner}
        y2={center}
        class="origin-center rotate-45"
      />
      <line opacity="1" x1={center} y1={inner} x2={center} y2={min} />
    </g>
  </svg>
</div>

<style>
  svg {
    animation: spinIOS 0.75s steps(7) infinite;
  }
  @keyframes spinIOS {
    to {
      transform: rotate(315deg);
    }
  }
</style>
