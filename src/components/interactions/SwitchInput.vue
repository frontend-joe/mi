<template>
  <SwitchLabel>
    <input
      v-model="darkModeOn"
      v-on:change="$emit('toggle-dark-mode')"
      type="checkbox"
    />
    <SwitchBackground class="slider">
      <SwitchKnob class="knob">
        <IconWrapper>
          <LightModeBackground
            :src="require('@/assets/images/brightness.svg')"
            :darkModeOn="darkModeOn"
          />
          <IconCircle :darkModeOn="darkModeOn"></IconCircle>
        </IconWrapper>
      </SwitchKnob>
    </SwitchBackground>
  </SwitchLabel>
</template>

<script>
import styled from "vue-styled-components";

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 36px;

  & > input {
    transform: scale(0);
  }

  & > input:checked + .slider {
    background-color: #282835;
  }

  & > input:checked + .slider > .knob {
    transform: translateX(54px);
  }
`;

const SwitchBackground = styled.span`
  position: absolute;
  cursor: pointer;
  left: 0;
  height: 100%;
  width: 100%;
  background: #c6c8d6;
  border-radius: 20px;
  transition: background 0.4s;
`;

const SwitchKnob = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f7f7f7;
  transition: transform 0.4s;
`;

const knobProps = { darkModeOn: Boolean };

const IconWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;

const IconCircle = styled("div", knobProps)`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4c506b;
  transform: scale(${props => (props.darkModeOn ? 1 : 0.5)});
  transition: transform 0.4s;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    width: 14px;
    height: 14px;
    border-radius: inherit;
    background: #f7f7f7;
    opacity: ${props => (props.darkModeOn ? 1 : 0)};
    transform: translate(
      ${props => (props.darkModeOn ? "0,0" : "10px, -10px")}
    );
    transition: 0.4s;
  }
`;

const LightModeBackground = styled("img", knobProps)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(${props => (props.darkModeOn ? 0 : 1)});
  transition: transform 0.4s;
`;

export default {
  components: {
    SwitchLabel,
    SwitchBackground,
    SwitchKnob,
    IconWrapper,
    IconCircle,
    LightModeBackground
  },
  data() {
    return {
      darkModeOn: true
    };
  }
};
</script>
