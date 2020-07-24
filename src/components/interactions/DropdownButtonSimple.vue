<template>
  <Wrapper @click="open = !open">
    <IconWrapper>
      <Rectangle1 class="rectangle" :open="open" />
      <Rectangle2 class="rectangle" :open="open" />
    </IconWrapper>
  </Wrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";

const props = { open: Boolean };

const backgroundColor = "#7C12BA";
const colorTextActive = "#fff";

const transitionDuration = "0.35s";

const Wrapper = styled.button`
  cursor: default;
  padding: 10px;
  border-radius: 0.5rem;
  background: ${backgroundColor};
`;

const IconWrapper = styled.span`
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
`;

const rectangleDefaults = css`
  position: absolute;
  width: 3px;
  height: 10px;
  border-radius: 2px;
  background: ${colorTextActive};
  transition: transform ${transitionDuration};
`;

const Rectangle1 = styled("span", props)`
  ${rectangleDefaults};
  transform: rotate(-45deg) scaleY(${props => (props.open ? 1.75 : 1)})
    translate(${props => (props.open ? "2px, 1px" : 0)});
  top: 8px;
  left: 8px;
`;

const Rectangle2 = styled("span", props)`
  ${rectangleDefaults};
  transform: rotate(45deg) scaleY(${props => (props.open ? 1.75 : 1)})
    translate(${props => (props.open ? "-2px, 1px" : 0)});
  top: 8px;
  right: 8px;
`;

export default {
  components: {
    Wrapper,
    IconWrapper,
    Rectangle1,
    Rectangle2
  },
  data() {
    return {
      open: false,
      menuItems: [
        { title: "Distance", icon: "location_on" },
        { title: "Best Match", icon: "grade" },
        { title: "Rating", icon: "emoji_events" }
      ]
    };
  }
};
</script>
