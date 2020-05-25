<template>
  <StyledOuterWrapper>
    <StyledWrapper>
      <StyledButtonHighlight :index="items.findIndex(obj => obj.active)" />
      <StyledButton
        v-for="(item, index) in items"
        :key="item.text"
        :active="item.active"
        @click="toggleNav(index)"
      >
        <StyledButtonText
          :active="item.active"
          :paddingRight="item.paddingRight"
          >{{ item.text }}</StyledButtonText
        >
        <StyledButtonIcon
          :translateX="item.translateX"
          :active="item.active"
          class="material-icons-outlined"
          >{{ item.icon }}</StyledButtonIcon
        >
      </StyledButton>
    </StyledWrapper>
  </StyledOuterWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const StyledOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #4e3dc8;
  height: 56px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 11px 15px -7px ${rgba("#4e3dc8", 0.5)};
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const animationDuration = "0.35s";

const buttonWidth = "74px";
const buttonProps = {
  active: Boolean,
  index: Number,
  translateX: String,
  paddingRight: String
};

const StyledButton = styled("button", buttonProps)`
  position: relative;
  padding: 0;
  flex: 1;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${buttonWidth};
  height: 30px;
  color: rgba(255, 255, 255, 0.85);
`;

const StyledButtonHighlight = styled("span", buttonProps)`
  position: absolute;
  top: 50%;
  left: 0;
  height: 30px;
  width: ${buttonWidth};
  border-radius: 6px;
  transform: translate(${props => props.index * 100}%, -50%);
  background: rgba(255, 255, 255, 0.175);
  transition: transform ${animationDuration};
`;

const StyledButtonIcon = styled("span", buttonProps)`
  font-size: 18px;
  transform: translateX(${props => (props.active ? props.translateX : 0)});
  transition: transform ${animationDuration};
`;

const StyledButtonText = styled("span", buttonProps)`
  opacity: ${props => (props.active ? 1 : 0)};
  position: absolute;
  right: 0;
  padding-right: ${props => props.paddingRight};
  font-weight: 600;
  transform: translateY(-1px);
  transition: opacity ${animationDuration};
`;

export default {
  props: {
    animationDuration: String
  },
  components: {
    StyledOuterWrapper,
    StyledWrapper,
    StyledButton,
    StyledButtonHighlight,
    StyledButtonIcon,
    StyledButtonText
  },
  methods: {
    toggleNav(index) {
      console.log("nodeEnv", process.env.NODE_ENV);

      this.items.forEach((item, i) => {
        if (index === i) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    }
  },
  data() {
    return {
      items: [
        {
          text: "Stats",
          icon: "equalizer",
          active: false,
          translateX: "-18px",
          paddingRight: "12px"
        },
        {
          text: "Inbox",
          icon: "mail",
          active: true,
          translateX: "-18px",
          paddingRight: "10px"
        },

        {
          text: "Find",
          icon: "search",
          active: false,
          translateX: "-15px",
          paddingRight: "15px"
        }
      ]
    };
  }
};
</script>
