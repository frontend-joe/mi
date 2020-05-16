<template>
  <StyledCard>
    <StyledBackgroundImage
      :open="open"
      :src="require('@/assets/images/card.png')"
    />
    <StyledCrossButton
      :open="open"
      v-on:crossbutton-clicked="handleCrossButtonClicked"
    />
    <StyledSidebar @click="handleCrossButtonClicked" :open="open">
      <template v-if="open">
        <MenuItem :index="1" :open="open" icon="share"> </MenuItem>
        <MenuItem :index="2" :open="open" icon="download"> </MenuItem>
        <MenuItem :index="3" :open="open" icon="bookmark_outline"> </MenuItem>
      </template>
    </StyledSidebar>
  </StyledCard>
</template>

<script>
import styled from "vue-styled-components";
import CrossButton from "./CrossButton";
import MenuItem from "./MenuItem";

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ebebeb;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 240px;
  height: 200px;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const imageProps = { open: Boolean };
const StyledBackgroundImage = styled("img", imageProps)`
  position: absolute;
  top: -10%;
  left: 0;
  width: 110%;
  transform: translateX(${props => (props.open ? "10px" : 0)})
    scale(${props => (props.open ? "1.2, 1.2" : "1, 1")});
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-in-out;
`;

const StyledCrossButton = styled(CrossButton)`
  position: absolute;
  z-index: 1;
  top: 0.75rem;
  left: 1rem;
`;

const sidebarProps = { open: Boolean };
const StyledSidebar = styled("div", sidebarProps)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #14123e;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  height: 100%;
  padding: 2rem 1rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(${props => (props.open ? 0 : "-100%")});
  transition: transform 0.25s ease-out;
`;

export default {
  components: {
    StyledCard,
    StyledBackgroundImage,
    StyledCrossButton,
    StyledSidebar,
    MenuItem
  },
  methods: {
    handleCrossButtonClicked() {
      this.open = !this.open;
    }
  },
  data: function() {
    return {
      open: undefined
    };
  }
};
</script>
