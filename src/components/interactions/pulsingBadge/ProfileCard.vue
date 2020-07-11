<template>
  <Card>
    <ProfileImageWrapper>
      <ProfileImage :src="require('@/assets/images/profile-pic.jpg')" />
      <PulsingBadge>
        <i class="material-icons-outlined">star</i>
      </PulsingBadge>
    </ProfileImageWrapper>
    <CardTitle>Lexi Wood</CardTitle>
    <CardSubtitle>Master • 2.4k followers</CardSubtitle>
    <FollowButton>
      <i class="material-icons-outlined">arrow_forward</i>
      <span>Follow</span>
    </FollowButton>
  </Card>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const Card = styled.div`
  width: 220px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.div`
  font-size: 1.175rem;
  font-weight: 700;
  color: ${rgba("#10132F", 0.85)};
  margin-bottom: 0.325rem;
`;

const CardSubtitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${rgba("#10132F", 0.38)};
  margin-bottom: 1rem;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  margin-bottom: 0.75rem;
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const pulseAnimation = keyframes`
  0%   {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const PulsingBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0px;
  right: 2px;
  width: 18px;
  height: 18px;
  background-color: #00c3cc;
  border-radius: 50%;
  ${"" /* box-shadow: 0 0 0 15px #8362d0; */}

  & > i {
    position: relative;
    z-index: 2;
    font-size: 10px;
    color: white;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
    animation: ${pulseAnimation} 1.75s ease-out infinite;
  }
`;

const FollowButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  height: 32px;
  border-radius: 18px;
  background: ${rgba("#9d66e4", 0.1)};

  & > i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: #9d66e4;
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  & > span {
    padding: 0 1rem 0 0.5rem;
    font-size: 0.675rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #9d66e4;
  }
`;

export default {
  components: {
    Card,
    CardTitle,
    CardSubtitle,
    ProfileImage,
    ProfileImageWrapper,
    PulsingBadge,
    FollowButton
  }
};
</script>
