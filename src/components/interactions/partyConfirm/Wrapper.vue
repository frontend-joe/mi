<template>
  <StyledButton @click="onClick" :clicked="clicked" :disabled="clicked">
    <PartyPopperWrapper>
      <PartyPopperCylinderWrapper :clicked="clicked">
        <PartyPopperCylinder :src="partyPopper" />
        <PartyPopperStrings :src="partyPopperStrings" :clicked="clicked" />
        <PartyPopperParticle
          :particleAnimation="1"
          particleColor="#FE6A81"
          particleSize="4px"
          particleStartDegrees="50"
          :particleScale="140"
          particleTop="4px"
          particleLeft="3px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          :particleAnimation="2"
          particleColor="#52C8FC"
          particleSize="4px"
          particleStartDegrees="50"
          :particleScale="120"
          particleTop="-9px"
          particleLeft="11px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          :particleAnimation="3"
          particleColor="#BEA1FB"
          particleSize="4px"
          particleStartDegrees="90"
          :particleScale="120"
          particleTop="-21px"
          particleLeft="18px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          :particleAnimation="1"
          particleColor="#FE6A81"
          particleSize="4px"
          particleStartDegrees="50"
          :particleScale="180"
          particleTop="2px"
          particleLeft="-1px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          :particleAnimation="2"
          particleColor="#BEA1FB"
          particleSize="4px"
          particleStartDegrees="50"
          :particleScale="160"
          particleTop="-16px"
          particleLeft="7px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          :particleAnimation="3"
          particleColor="#52C8FC"
          particleSize="4px"
          particleStartDegrees="90"
          :particleScale="120"
          particleTop="-25px"
          particleLeft="24px"
          :clicked="clicked"
        />
        <!-- <PartyPopperParticle
          particleColor="#BEA1FB"
          particleSize="3px"
          particleStartDegrees="55"
          :particleScale="150"
          particleTop="6px"
          particleLeft="4px"
          :clicked="clicked"
        />
        <PartyPopperParticle
          particleColor="#52C8FC"
          particleSize="2px"
          particleStartDegrees="50"
          :particleScale="180"
          particleTop="2px"
          particleLeft="1px"
          :clicked="clicked"
        /> -->
      </PartyPopperCylinderWrapper>
    </PartyPopperWrapper>
    <ButtonText class="button-text" :clicked="clicked">
      <span>Confirm</span>
      <ButtonText2 :clicked="clicked">ed</ButtonText2>
    </ButtonText>
  </StyledButton>
</template>

<script>
import styled, { keyframes, css } from "vue-styled-components";

const animationDurationNumber = 3;
const animationDuration = `${animationDurationNumber}s`;

const buttonProps = {
  clicked: Boolean,
  particleScale: Number,
  particleSize: String,
  particleColor: String,
  particleTop: String,
  particleLeft: String,
  particleStartDegrees: String,
  particleAnimation: Number
};

const cylyinderAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-8px, 8px);
  }
  25% {
    transform: translate(0, 0);
  }
`;

const cylyinderStringsAnimation = keyframes`
  0% {
    opacity: 1;
    transform: scale(1, 1) translate(0,0);
  }
  20% {
    opacity: 0;
    transform: scale(0.5, 0.5) translate(0,0);
  }
  25% {
    transform: scale(0, 0) translate(0,0);
  }
  100% {
    transform: scale(0, 0) translate(0,0);
  }
`;

const particleAnimation1 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-50deg);
  }
  20% {
    opacity:0;
    transform: rotate(-50deg);
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: rotate(70deg);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: rotate(70deg);
  }
`;

const particleAnimation2 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-70deg);
  }
  20% {
    opacity: 0;
    transform: rotate(-70deg);
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: rotate(50deg);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: rotate(50deg);
  }
`;

const particleAnimation3 = keyframes`
  0% {
    opacity: 0;
    transform: rotate(-90deg);
  }
  20% {
    opacity: 0;
    transform: rotate(-90deg);
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: rotate(50deg);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: rotate(50deg);
  }
`;

const buttonTextAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, 5px);
  }
  25% {
    transform: translate(0, 0);
  }
`;

const buttonText2Animation = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  35% {
    opacity: 1;
  }
`;

const StyledButton = styled("button", buttonProps)`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  min-width: 184px;
  max-width: 184px;
  padding: 0 1.25rem 0 0;
  border: 0;
  border-radius: 0.325rem;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  background: #1d1f34;
  color: white;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  outline: none;
  transition: background 0.25s;

  ${"" /* &:focus .button-text {
    transform: translate(0, 4px);
  } */}

  &:disabled {
    cursor: not-allowed;
  }
`;

const ButtonText = styled("span", buttonProps)`
  display: block;
  font-size: 1.25rem;
  height: 56px;
  line-height: 56px;

  ${props =>
    props.clicked
      ? `animation: ${buttonTextAnimation} ease-in-out
      ${animationDuration}`
      : ""}
`;

const ButtonText2 = styled("span", buttonProps)`
  opacity: ${props => (props.clicked ? 1 : 0)};
  ${props =>
    props.clicked
      ? `animation: ${buttonText2Animation} ease-in-out
      ${animationDuration}`
      : ""}
`;

const PartyPopperWrapper = styled.span`
  position: relative;
  height: 56px;
  width: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PartyPopperCylinderWrapper = styled("span", buttonProps)`
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s;

  ${props =>
    props.clicked
      ? `animation: ${cylyinderAnimation} ease-in-out
      ${animationDuration}`
      : ""}
`;

const PartyPopperCylinder = styled("img", buttonProps)`
  width: 24px;
  height: 24px;
`;

const PartyPopperStrings = styled("img", buttonProps)`
  position: absolute;
  top: 13px;
  right: 12px;
  width: 17px;
  transform-origin: 0% 100%;

  ${props =>
    props.clicked
      ? `animation: ${cylyinderStringsAnimation} ease-in-out
      5s`
      : ""}
`;

const getParticleAnimation = particleAnimation => {
  let animation;

  switch (particleAnimation) {
    case 1:
      animation = particleAnimation1;
      break;
    case 2:
      animation = particleAnimation2;
      break;
    case 3:
      animation = particleAnimation3;
      break;
    default:
  }

  return css`
    animation: ${animation} ${animationDuration} ease-out;
  `;
};

const getParticleStartDegress = particleAnimation => {
  let startDegrees;

  switch (particleAnimation) {
    case 1:
      startDegrees = 50;
      break;
    case 2:
      startDegrees = 70;
      break;
    case 3:
      startDegrees = 90;
      break;
    default:
      startDegrees = 50;
      break;
  }

  return startDegrees;
};

const PartyPopperParticle = styled("span", buttonProps)`
  position: absolute;
  top: ${props => props.particleTop || 0};
  left: ${props => props.particleLeft || "30px"};
  width: ${props => props.particleScale}px;
  height: ${props => props.particleScale * 0.75}px;
  border-top-left-radius: 50%;
  border-top-right-radius: 40%;
  border-bottom-right-radius: 80%;
  background: rgba(255, 0, 0, 0);
  opacity: ${props => (props.clicked ? 1 : 0)};
  transform: rotate(
    -${props => getParticleStartDegress(props.particleAnimation)}deg
  );
  transform-origin: 50% 50%;

  ${props =>
    props.clicked ? getParticleAnimation(props.particleAnimation) : ""}

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.particleSize};
    height: ${props => props.particleSize};
    border-radius: 50%;
    background: ${props => props.particleColor};
  }
`;

export default {
  components: {
    StyledButton,
    ButtonText,
    ButtonText2,
    PartyPopperWrapper,
    PartyPopperCylinder,
    PartyPopperCylinderWrapper,
    PartyPopperStrings,
    PartyPopperParticle
  },
  data: function() {
    return {
      clicked: false,
      partyPopper: require("@/assets/images/party-popper.png"),
      partyPopperStrings: require("@/assets/images/party-popper-strings.png")
    };
  },
  methods: {
    onClick() {
      this.clicked = !this.clicked;

      setTimeout(() => {
        // setTimeout(() => {
        this.clicked = false;
        // }, 2000);
      }, animationDurationNumber * 1000);
    }
  }
};
</script>
