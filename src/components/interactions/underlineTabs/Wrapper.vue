<template>
  <StyledOuterWrapper>
    <StyledWrapper>
      <StyledButtonUnderline :index="items.findIndex(obj => obj.active)" />
      <StyledButton
        v-for="(item, index) in items"
        :key="item.text"
        :active="item.active"
        @click="toggleNav(index)"
      >
        <StyledButtonIcon
          :active="item.active"
          class="material-icons-outlined"
          >{{ item.icon }}</StyledButtonIcon
        >
        <StyledButtonText :active="item.active">{{
          item.text
        }}</StyledButtonText>
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
  background: #fff;
  padding: 0 1rem;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 11px 15px -7px ${rgba("#000", 0.25)};
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const animationDuration = "1.35s";

const buttonWidth = "90px";
const buttonProps = {
  active: Boolean,
  index: Number,
  translateX: String,
  paddingRight: String
};

const StyledButton = styled("button", buttonProps)`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${buttonWidth};
  height: 74px;
  color: ${props => rgba("#10132F", props.active ? 0.96 : 0.38)};
  transition: color 0.25s;

  ${"" /* &:hover {
    ${props => (!props.active ? `color: ${rgba("#10132F", 0.57)}` : "")};
  } */}
`;

const StyledButtonUnderline = styled("span", buttonProps)`
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 5px;
  width: ${buttonWidth};
  transform: translate(${props => props.index * 100}%, -50%);
  background: ${rgba("#19C8C2", 0.99)};
  transition: transform ${animationDuration};
`;

const StyledButtonIcon = styled("span", buttonProps)`
  font-size: 22px;
  margin-bottom: 0.325rem;
  transition: transform ${animationDuration};
`;

const StyledButtonText = styled("span", buttonProps)`
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.875rem;
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
    StyledButtonUnderline,
    StyledButtonIcon,
    StyledButtonText
  },
  methods: {
    toggleNav(index) {
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
          text: "Maps",
          icon: "location_on",
          active: false,
          translateX: "-18px",
          paddingRight: "12px"
        },
        {
          text: "Flights",
          icon: "flight",
          active: true,
          translateX: "-18px",
          paddingRight: "10px"
        },

        {
          text: "Trips",
          icon: "card_travel",
          active: false,
          translateX: "-15px",
          paddingRight: "15px"
        }
      ]
    };
  }
};
</script>
