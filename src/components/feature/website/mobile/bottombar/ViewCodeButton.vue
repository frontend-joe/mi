<template>
  <button @click="$emit('viewcode-clicked')" class="button">
    <i class="material-icons-outlined">code</i>
    <span class="button-text">
      View Code
    </span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  pointer-events: all;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  & > i {
    font-size: 24px;
    margin-right: 0.5rem;
  }
}

.button-text {
  font-weight: 700;
  color: white;
}
</style>
