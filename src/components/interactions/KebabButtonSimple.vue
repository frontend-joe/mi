<template>
  <button class="button" @click="isClicked = !isClicked">
    <span class="icon">
      <span class="dot" :class="{ clicked: isClicked }" />
      <span class="dot" :class="{ clicked: isClicked }" />
      <span class="dot" :class="{ clicked: isClicked }" />
      <span class="rectangle first" :class="{ clicked: isClicked }" />
      <span class="rectangle" :class="{ clicked: isClicked }" />
    </span>
  </button>
</template>

<style lang="scss">
.button {
  height: 76px;
  padding: 16px;
  border-radius: 50%;
  background: #6e42a7;
  box-shadow: 0px 10px 20px rgba(black, 0.05);
}

.icon {
  display: block;
  position: relative;
  width: 44px;
  height: 44px;
}

.dot {
  position: absolute;
  top: 0;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fbfbfb;
  transition: transform 0.5s;

  &:nth-child(1) {
    transform: translateY(2px);
  }
  &:nth-child(2) {
    transform: translateY(17px);
  }
  &:nth-child(3) {
    transform: translateY(34px);
  }

  &.clicked:nth-child(1) {
    transform: translateY(17px);
  }

  &.clicked:nth-child(2) {
    transform: translateY(17px);
  }

  &.clicked:nth-child(3) {
    transform: translateY(17px);
  }
}

.rectangle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 8px;
  height: 5px;
  border-radius: 5px;
  background: #fbfbfb;
  transition-property: opacity, height;
  transition-duration: 0.5s;

  &.first {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.clicked {
    height: 44px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isClicked: false
    };
  }
};
</script>
