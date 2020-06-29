<template>
  <MaterialSwitch>
    <input type="checkbox" />
    <Slider class="slider" />
  </MaterialSwitch>
</template>

<script>
import styled from "vue-styled-components";

const MaterialSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;

  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & > input:checked + .slider {
    ${"" /* background-color: #2196f3; */}
  }

  & > input:checked + .slider::before {
    transform: translateX(56px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 17px;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
  transition: background-color 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 2px;
    bottom: 2px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
    transition: transform 0.4s;
  }
`;

export default {
  components: {
    MaterialSwitch,
    Slider
  }
};
</script>
