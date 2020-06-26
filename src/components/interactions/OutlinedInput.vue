<template>
  <Wrapper>
    <Outline :outlineColor="outlineColor" class="outline" :focused="focused" />
    <TextboxWrapper :backgroundColor="backgroundColor">
      <Textbox
        type="text"
        placeholder="Email Address"
        :placeholderColor="placeholderColor"
        :textboxColor="textboxColor"
        v-model="textboxValue"
        @focus="onFocus"
        @blur="onBlur"
      />
    </TextboxWrapper>
    <ClearButton
      @click="textboxValue = ''"
      :focused="focused"
      :notEmpty="textboxValue.length > 0"
      :outlineColor="outlineColor"
      class="material-icons-outlined"
    >
      cancel
    </ClearButton>
  </Wrapper>
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
  focused: Boolean,
  notEmpty: Boolean
};

const Wrapper = styled.div`
  position: relative;
  padding: 2px;
  height: 56px;
  width: 200px;
  border-radius: 8px;
`;

const Outline = styled("div", scProps)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props =>
    props.focused
      ? rgba(props.outlineColor, 1)
      : rgba(props.outlineColor, 0.8)};
  border-radius: 9px;
  ${props => (props.focused ? "transform: scale(1.010, 1.04)" : "")};
  transition: transform ${transitionDuration}, background ${transitionDuration};
`;

const TextboxWrapper = styled("div", scProps)`
  position: relative;
  z-index: 2;
  height: 100%;
  border-radius: 8px;
  background: ${props => props.backgroundColor};
`;

const Textbox = styled("input", scProps)`
  outline: none;
  border: 0;
  background: transparent;
  width: 100%;
  height: 100%;
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
  color: ${props => rgba(props.outlineColor, 0.5)};
  opacity: ${props => (props.focused && props.notEmpty ? 1 : 0)}
  transition: opacity ${transitionDuration}, color ${transitionDuration};

  &:hover {
    color: ${props => props.outlineColor};
  }
`;

export default {
  props: scProps,
  components: {
    Wrapper,
    Outline,
    TextboxWrapper,
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
