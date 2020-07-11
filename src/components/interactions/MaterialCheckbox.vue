<template>
  <StyledWrapper
    :style="{ width: hideLabel ? '60px' : '200px' }"
    @click="isChecked = !isChecked"
    :isDark="isDark"
  >
    <Checkbox :isChecked="isChecked" :borderColor="borderColor" />
    <CheckboxLabel v-if="!hideLabel">
      {{ isChecked ? "Checked" : "Unchecked" }}
    </CheckboxLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const transitionDuration = "0.5s";

const props = { isChecked: Boolean, isDark: Boolean, borderColor: String };

const StyledWrapper = styled("button", props)`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? "#6546D8" : "white")};
  font-weight: 500;
  height: 60px;
`;

const Checkbox = styled("div", props)`
  position: absolute;
  width: ${props => (props.isChecked ? "25px" : "60px")};
  height: 60px;
  border-width: 5px;
  border-style: solid;
  border-top-color: ${props =>
    props.isChecked ? "transparent" : props.borderColor};
  border-bottom-color: ${props => props.borderColor};
  border-left-color: ${props =>
    props.isChecked ? "transparent" : props.borderColor};
  border-right-color: ${props => props.borderColor};
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
  props: {
    isDark: Boolean,
    hideLabel: Boolean
  },
  components: {
    StyledWrapper,
    Checkbox,
    CheckboxLabel
  },
  data() {
    return {
      isChecked: false,
      borderColor: this.isDark ? "#6546D8" : "white"
    };
  }
};
</script>
