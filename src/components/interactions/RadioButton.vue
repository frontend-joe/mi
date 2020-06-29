<template>
  <Wrapper>
    <div>
      <RadioButton type="radio" id="test" v-model="radioValue" />
      <RadioButtonWrapper for="test">
        <RadioButtonDotWrapper>
          <RadioButtonDot :isChecked="radioValue" />
        </RadioButtonDotWrapper>
        <RadioButtonLabel> {{ radioValue }} </RadioButtonLabel>
      </RadioButtonWrapper>
    </div>
    <div>
      <RadioButton type="radio" id="test2" v-model="radioValue" />
      <RadioButtonWrapper for="test2">
        <RadioButtonDotWrapper>
          <RadioButtonDot :isChecked="radioValue" />
        </RadioButtonDotWrapper>
        <RadioButtonLabel> {{ radioValue }} </RadioButtonLabel>
      </RadioButtonWrapper>
    </div>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div``;

const props = { isChecked: String };

const RadioButton = styled.input`
  ${"" /* position: absolute;
  top: 0;
  left: -9999px; */}
`;

const RadioButtonWrapper = styled.label`
  display: flex;
`;

const RadioButtonDotWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid white;
`;

const RadioButtonDot = styled("div", props)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  opacity: ${props => (props.isChecked === "true" ? 1 : 0)};
  transform: scale(${props => (props.isChecked === "true" ? 1 : 0.25)});

  transition: transform 0.35s, opacity 0.35s;
`;

const RadioButtonLabel = styled.span`
  color: white;
`;

export default {
  components: {
    Wrapper,
    RadioButton,
    RadioButtonWrapper,
    RadioButtonDot,
    RadioButtonDotWrapper,
    RadioButtonLabel
  },
  data() {
    return {
      radioValue: "true"
    };
  }
};
</script>
