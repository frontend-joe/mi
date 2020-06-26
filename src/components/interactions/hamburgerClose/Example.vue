<template>
  <StyledWrapper>
    <StyledBackground>
      <StyledCrossButton
        :style="{ transform: 'scale(0.5, 0.5)' }"
        size="50px"
        background="transparent"
        iconColor="#ffffff"
        v-on:crossbutton-clicked="handleCrossButtonClicked"
        :open="open"
      />
      <StyledOverlay @click="handleCrossButtonClicked" :open="open" />
      <StyledSidebar :open="open">
        <StyledRectangleLabel />
        <StyledRectangleItem itemWidth="100px" />
        <StyledRectangleItem itemWidth="50px" />
        <StyledRectangleItem itemWidth="70px" />
        <StyledRectangleItem itemWidth="50px" />
        <StyledRectangleItem itemWidth="30px" />
      </StyledSidebar>
    </StyledBackground>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import CrossButton from "./CrossButton";

const StyledWrapper = styled.div``;

const StyledCrossButton = styled(CrossButton)`
  position: absolute;
  z-index: 3;
  top: 0rem;
  left: 0.25rem;
`;

const StyledBackground = styled.div`
  position: relative;
  overflow: hidden;
  width: 400px;
  height: 400px;
  background-image: url(${require("@/assets/images/arctic-app.png")});
  border-radius: 20px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const props = { open: false };

const StyledOverlay = styled("div", props)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.25);
  transition: opacity 0.25s, visibility 0.25s;
`;

const StyledSidebar = styled("div", props)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 170px;
  height: 100%;
  padding: 4rem 1.25rem;
  background: black;
  transform: translateX(${props => (props.open ? 0 : "-170px")});
  transition: transform 0.25s;
`;

const StyledRectangleLabel = styled.div`
  height: 12px;
  width: 40px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.5rem;
`;

const itemProps = { itemWidth: String };
const StyledRectangleItem = styled("div", itemProps)`
  height: 12px;
  width: ${props => props.itemWidth};
  background: rgba(255, 255, 255, 0.75);
  margin-bottom: 0.75rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledBackground,
    StyledOverlay,
    StyledCrossButton,
    StyledSidebar,
    StyledRectangleLabel,
    StyledRectangleItem
  },
  methods: {
    handleCrossButtonClicked() {
      this.open = !this.open;
    }
  },
  data: function() {
    return {
      open: false
    };
  }
};
</script>
