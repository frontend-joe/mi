<template>
  <StyledOuterWrapper>
    <StyledWrapper :open="open">
      <StyledButton @click="open = !open">
        <StyledText>Filter By</StyledText>
        <StyledIconWrapper>
          <StyledIconRectangle1 class="rectangle" :open="open" />
          <StyledIconRectangle2 class="rectangle" :open="open" />
        </StyledIconWrapper>
      </StyledButton>
      <StyledMenu :open="open">
        <StyledMenuItem v-for="item in menuItems" :key="item.title">
          <StyledMenuItemIcon class="material-icons-outlined">
            {{ item.icon }}
          </StyledMenuItemIcon>
          <StyledMenuItemText>{{ item.title }}</StyledMenuItemText>
        </StyledMenuItem>
      </StyledMenu>
    </StyledWrapper>
  </StyledOuterWrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { darken } from "polished";

const props = { open: Boolean };

const backgroundColor = "#7C12BA";
const colorTextActive = "#fff";
const colorTextHover = darken(0.1, colorTextActive);
const colorBorder = "#f1f1f3";
const colorMenuItemHover = "rgba(0,0,0,0.5)";

const transitionDuration = "0.35s";

const StyledOuterWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 56px;
`;

const StyledWrapper = styled("div", props)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  background: ${backgroundColor};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
  border-radius: 0.5rem;
  ${"" /* border: 1px solid ${colorBorder}; */}
  max-height: ${props => (props.open ? "204px" : "56px")};
  transition: max-height ${transitionDuration},
    border-color ${transitionDuration};

  &:hover {
    border-color: ${darken(0.075, colorBorder)};
  }
`;

const StyledMenu = styled("div", props)`
  padding: 0 0.5rem 0.5rem;
  transition: all ${transitionDuration};
`;

const StyledMenuItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    color: ${colorTextActive}
    background: ${colorMenuItemHover};
  }
`;

const StyledMenuItemIcon = styled.span`
  margin-right: 0.325rem;
  font-size: 20px;
  color: ${colorTextActive}
  border-radius: 50%;
  padding: 2px;
`;

const StyledMenuItemText = styled.div`
  color: ${colorTextActive};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem 0 1rem;
  font-weight: 500;
  color: ${colorTextActive};
  height: 56px;
  line-height: 64px;
  width: 100%;
  cursor: pointer;
  transition: border-color ${transitionDuration}, color ${transitionDuration};

  &:hover {
    color: ${colorTextHover};
  }

  &:hover .rectangle {
    background: ${colorTextHover};
  }
`;

const StyledText = styled.div`
  font-size: 1.075rem;
`;

const StyledIconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

const rectangleDefaults = css`
  position: absolute;
  width: 3px;
  height: 10px;
  border-radius: 2px;
  transform-origin: 50% 50%;
  background: ${colorTextActive};
  transition: transform ${transitionDuration}, background ${transitionDuration};
`;

const StyledIconRectangle1 = styled("div", props)`
  ${rectangleDefaults};
  transform: rotate(-45deg) scaleY(${props => (props.open ? 1.75 : 1)})
    translate(${props => (props.open ? "2px, 1px" : 0)});
  top: 8px;
  left: 8px;
`;

const StyledIconRectangle2 = styled("div", props)`
  ${rectangleDefaults};
  transform: rotate(45deg) scaleY(${props => (props.open ? 1.75 : 1)})
    translate(${props => (props.open ? "-2px, 1px" : 0)});
  top: 8px;
  right: 8px;
`;

export default {
  components: {
    StyledOuterWrapper,
    StyledWrapper,
    StyledButton,
    StyledMenu,
    StyledMenuItem,
    StyledMenuItemIcon,
    StyledMenuItemText,
    StyledText,
    StyledIconWrapper,
    StyledIconRectangle1,
    StyledIconRectangle2
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
