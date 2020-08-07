<template>
  <OuterWrapper>
    <Wrapper :isFocused="focused">
      <Textbox
        type="text"
        placeholder="Email Address"
        :placeholderColor="placeholderColor"
        :textboxColor="textboxColor"
        v-model="textboxValue"
        @focus="onFocus"
        @blur="onBlur"
      />
      <ClearButton
        @click="textboxValue = ''"
        :focused="focused"
        :notEmpty="textboxValue.length > 0"
        class="material-icons-outlined"
        >cancel</ClearButton
      >
    </Wrapper>
  </OuterWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const transitionDuration = "0.45s";

const scProps = {
  textboxColor: String,
  placeholderColor: String,
  backgroundColor: String,
  outlineColor: String,
  isFocused: Boolean,
  notEmpty: Boolean
};

const OuterWrapper = styled.div`
  padding: 2px;
  position: relative;
`;

const Wrapper = styled("div", scProps)`
  &::before {
    content: "";
    opacity: ${props => (props.isFocused ? 1 : 0)};
    position: absolute;
    z-index: 1;
    background: #608dc7;
    border-radius: 0.5rem;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    transition-property: transform, opacity;
    transition-duration: 0.35s;
  }

  ${"" /* box-shadow: inset 2px 2px 0px red, inset -2px -2px 0px red; */}
`;

const Textbox = styled("input", scProps)`
  position: relative;
  z-index: 2;
  outline: none;
  border: 0;
  background: white;
  border-radius: 0.5rem;
  height: 56px;
  width: 200px;
  border: 2px solid #3977bd;
  text-indent: 0.5rem;
  color: ${props => props.textboxColor};

  &::placeholder {
    color: ${props => props.placeholderColor};
  }
`;

const ClearButton = styled("button", scProps)`
  position: absolute;
  z-index: 3;
  top: 16px;
  right: 14px;
  color: ${rgba("black", 0.5)};
  opacity: ${props => (props.isFocused && props.notEmpty ? 1 : 0)};
  transition: opacity ${transitionDuration};
`;

export default {
  props: scProps,
  components: {
    OuterWrapper,
    Wrapper,
    Textbox,
    ClearButton
  },
  data() {
    return {
      focused: false,
      textboxValue: ""
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
