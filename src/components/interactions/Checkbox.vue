<template>
  <StyledWrapper @click="isChecked = !isChecked">
    <Checkbox :isChecked="isChecked" />
    <CheckboxLabel>{{ isChecked ? "Checked" : "Unchecked" }}</CheckboxLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const transitionDuration = "0.5s";
const borderColor = "white";

const props = { isChecked: Boolean };

const StyledWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  width: 200px;
  height: 60px;
`;

const Checkbox = styled("div", props)`
  position: absolute;
  width: ${props => (props.isChecked ? "25px" : "60px")};
  height: 60px;
  border-width: 3px;
  border-style: solid;
  border-top-color: ${props => (props.isChecked ? "transparent" : borderColor)};
  border-bottom-color: ${borderColor};
  border-left-color: ${props =>
    props.isChecked ? "transparent" : borderColor};
  border-right-color: ${borderColor};
  transform: rotate(${props => (props.isChecked ? "45deg" : "0")})
    translate(${props => (props.isChecked ? "10px, -22px" : "0")});
  transition: transform ${transitionDuration},
    border-color ${transitionDuration}, width ${transitionDuration};
`;

const CheckboxLabel = styled.div`
  font-size: 2rem;
  margin-left: 84px;
  white-space: nowrap;
`;

export default {
  components: {
    StyledWrapper,
    Checkbox,
    CheckboxLabel
  },
  data() {
    return {
      isChecked: false
    };
  }
};
</script>
