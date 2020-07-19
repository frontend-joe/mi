<template>
  <Wrapper :focused="focused">
    <Textbox
      @focus="onFocus"
      @blur="onBlur"
      type="text"
      v-model="textboxValue"
    />
    <Placeholder class="placeholder" :notEmpty="textboxValue.length !== 0">
      Best Library
    </Placeholder>
    <ClearButton
      @click="textboxValue = ''"
      :notEmpty="textboxValue.length !== 0"
      class="material-icons-outlined"
      >close</ClearButton
    >
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const backgroundColor = "#7C12BA";

const wrapperProps = { focused: Boolean };
const Wrapper = styled("div", wrapperProps)`
  position: relative;
  display: flex;
  z-index: 2;
  height: 56px;
  background: ${backgroundColor};
  border-radius: 0.5rem;
  border: 2px solid ${props => rgba("white", props.focused ? 0.85 : 0.5)};
  transition: border-color 0.35s;

  &:hover {
    border-color: ${rgba("white", 0.85)};
  }

  &:hover .placeholder {
    color: ${rgba("white", 0.875)};
  }
`;

const getTheTransform = notEmpty => {
  return notEmpty
    ? "translate(0.625rem, -10px) scale(0.8)"
    : "translate(0.5rem, 15px)";
};

const placeholderProps = { notEmpty: Boolean };
const Placeholder = styled("div", placeholderProps)`
  color: ${rgba("white", 0.425)};
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  padding: 0 0.25rem;
  font-weight: 700;
  transform: ${props => getTheTransform(props.notEmpty)};
  background: ${props => (props.notEmpty ? backgroundColor : "transparent")};
  transform-origin: 0% 0%;
  pointer-events: none;
  transition: transform 0.35s, background 0.35s, color 0.35s;
`;

const Textbox = styled.input`
  position: relative;
  outline: none;
  z-index: 0;
  background: transparent;
  border: 0;
  width: 140px;
  height: 56px;
  line-height: 56px;
  font-weight: 700;
  text-indent: 0.75rem;
  color: ${rgba("#fff", 0.875)};

  &:focus + .placeholder {
    color: ${rgba("white", 0.875)};
    background: ${backgroundColor};
    transform: ${getTheTransform(true)};
  }
`;

const clearButtonProps = { notEmpty: Boolean };
const ClearButton = styled("button", clearButtonProps)`
  padding: 0 0.5rem;
  color: ${rgba("white", 0.57)};
  opacity: ${props => (props.notEmpty ? 1 : 0)};
  transition: opacity 0.25s, color 0.25s;

  &:hover {
    color: ${rgba("white", 0.875)};
  }
`;

export default {
  components: {
    Wrapper,
    Placeholder,
    Textbox,
    ClearButton
  },
  data() {
    return {
      textboxValue: "",
      focused: false
    };
  },
  methods: {
    onFocus() {
      if (!this.focused) {
        this.focused = true;
      }
    },
    onBlur() {
      this.focused = false;
    }
  }
};
</script>
