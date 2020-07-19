<template>
  <div class="wrapper">
    <input type="text" />
    <div class="placeholder">
      Best Library
    </div>
  </div>
</template>

<style lang="scss">
$backgroundColor: #7c12ba;

.wrapper {
  position: relative;
  height: 56px;
  background: $backgroundColor;
  border-radius: 0.5rem;
  border: 2px solid rgba(white, 0.875);
}

input {
  position: relative;
  background: transparent;
  border: 0;
  width: 180px;
  height: 56px;
  line-height: 56px;
  font-weight: 700;
  text-indent: 0.75rem;
  color: rgba(#fff, 0.875);

  &:focus + .placeholder {
    background: $backgroundColor;
    transform: translate(0.625rem, -10px) scale(0.8);
  }
}

.placeholder {
  color: rgba(white, 0.875);
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  padding: 0 0.25rem;
  font-weight: 700;
  transform: translate(0.5rem, 15px);
  transform-origin: 0% 0%;
  background: transparent;
  pointer-events: none;
  transition: transform 0.35s, background 0.35s;
}
</style>
