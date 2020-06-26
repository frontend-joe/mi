<template>
  <OuterWrapper>
    <Outline :focused="focused" />
    <Wrapper :focused="focused">
      <Textbox
        @focus="onFocus"
        @blur="onBlur"
        type="text"
        v-model="textboxValue"
      />
      <Placeholder class="placeholder" :notEmpty="textboxValue.length !== 0">
        Username
      </Placeholder>
      <ClearButton
        @click="textboxValue = ''"
        :notEmpty="textboxValue.length !== 0"
        class="material-icons-outlined"
        >close</ClearButton
      >
    </Wrapper>
  </OuterWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const backgroundColor = "#003e88";

const OuterWrapper = styled.div`
  padding: 1rem 1px 0;
  overflow: hidden;
  position: relative;
  height: 72px;
`;

const wrapperProps = { focused: Boolean };
const Wrapper = styled("div", wrapperProps)`
  position: relative;
  z-index: 2;
  height: 56px;
  overflow: hidden;
  background: ${backgroundColor};
  border-radius: 0.5rem;
  border: 1px solid ${props => rgba("white", props.focused ? 0.85 : 0.5)};
  transition: border-color 0.35s;

  &:hover .placeholder {
    color: ${rgba("white", 0.875)};
  }
`;

const Outline = styled("div", wrapperProps)`
  position: absolute;
  z-index: 1;
  top: calc(1rem + 2px);
  border-radius: 0.5rem;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: white;

  ${props => (props.focused ? "transform: scale(1.05)" : "")};

  transition: transform 0.25s;
`;

const getTheTransform = notEmpty => {
  console.log("notEmpty", notEmpty);

  return notEmpty
    ? "translate(0.5rem, 9px) scale(0.8)"
    : "translate(0.5rem, 34px)";
};

const placeholderProps = { notEmpty: Boolean };
const Placeholder = styled("div", placeholderProps)`
  color: ${rgba("white", 0.5)};
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  padding: 0 0.5rem;
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
  width: 200px;
  height: 56px;
  line-height: 56px;
  font-weight: 700;
  padding: 0 2.5rem 0 0;
  text-indent: 1rem;
  color: ${rgba("#fff", 0.875)};

  &:focus + .placeholder {
    color: ${rgba("white", 0.875)};
    background: ${backgroundColor};
    transform: translate(0.5rem, 9px) scale(0.8);
  }
`;

const clearButtonProps = { notEmpty: Boolean };
const ClearButton = styled("button", clearButtonProps)`
  position: absolute;
  top: 33px;
  right: 10px;
  color: ${rgba("white", 0.75)};
  opacity: ${props => (props.notEmpty ? 1 : 0)};
  transition: opacity 0.25s, color 0.25s;

  &:hover {
    color: ${rgba("white", 0.875)};
  }
`;

export default {
  components: {
    OuterWrapper,
    Wrapper,
    Outline,
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
