<template>
  <Wrapper>
    <ProjectsWrapper>
      <ProjectsTitle>More Projects</ProjectsTitle>

      <ProjectCards>
        <ProjectCard
          background="#459a79"
          href="https://vooze.vuezythemes.com/"
          target="_blank"
        >
          <ProjectIcon>
            <font-awesome-icon :icon="['fab', 'vuejs']" />
          </ProjectIcon>
          <div>
            <ProjectTitle>Vooze</ProjectTitle>
            <ProjectDescription>
              Admin template built in Vue with Styled Components.
            </ProjectDescription>
          </div>
        </ProjectCard>
        <ProjectCard
          background="#8e6ecd"
          href="http://frontendjoe.com/"
          target="_blank"
        >
          <ProjectIcon>
            <font-awesome-icon :icon="['fab', 'vuejs']" />
          </ProjectIcon>
          <div>
            <ProjectTitle>Frontendjoe</ProjectTitle>
            <ProjectDescription>
              Personal website built in Vue, SCSS & Vue's Nuxt framework.
            </ProjectDescription>
          </div>
        </ProjectCard>
      </ProjectCards>
    </ProjectsWrapper>
    <FooterMain>
      <FooterMainContent>
        <FrontendJoe :src="require('@/assets/images/joe.png')" />
        <div>
          <FooterMainTitle>By Joe Harrison</FooterMainTitle>
          <FooterMainAuthor>@frontendjoe</FooterMainAuthor>
          <FooterMainText>
            Micro Interaction Vuejs code is free to use, licensed under MIT.
            Design & code © Joe Harrison, 2020.
          </FooterMainText>
        </div>
        <SocialMedia>
          <SocialButton
            @click="
              handleSocialButtonClick('https://www.instagram.com/frontendjoe/')
            "
            class="icofont-instagram"
          />
          <SocialButton
            @click="handleSocialButtonClick('https://github.com/vuezy')"
            class="icofont-github"
          />
          <SocialButton
            v-tippy
            :content="'test'"
            disabled
            class="icofont-youtube"
          />
        </SocialMedia>
      </FooterMainContent>
    </FooterMain>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 0 8rem;
  background: #121117;
`;

const ProjectsTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${rgba("white", 0.75)};
`;

const ProjectCards = styled.div`
  display: flex;
`;

const styleProps = { background: String };

const ProjectCard = styled("a", styleProps)`
  cursor: pointer;
  width: 320px;
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  background: ${props => props.background};
  color: white;
  margin: 0 1rem;
`;

const ProjectIcon = styled.span`
  width: 60px;
  height: 60px;
  padding: 10px;
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("white", 0.1)};
  color: ${rgba("white", 0.5)};
  font-size: 40px;
  border-radius: 50%;
  margin-right: 1rem;

  & > svg {
    height: 36px;
    transform: translateY(2px);
  }
`;

const ProjectTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  *color: ${rgba("white", 0.75)};
  margin-bottom: 0.325rem;
`;

const ProjectDescription = styled.div`
  color: ${rgba("white", 0.65)};
  font-size: 0.875rem;
`;

const FooterMain = styled.div`
  background: white;
  padding: 6rem 0;
`;

const FooterMainContent = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const FrontendJoe = styled.img`
  width: 96px;
  height: 96px;
  margin-right: 2rem;
`;

const FooterMainTitle = styled.div`
  font-size: 1.25rem;
`;

const FooterMainAuthor = styled.div`
  color: ${rgba("black", 0.75)};
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
`;

const FooterMainText = styled.div`
  font-size: 0.875rem;
  color: ${rgba("black", 0.38)};
`;

const SocialMedia = styled.div`
  padding-left: 2rem;
  margin-left: 2rem;
  border-left: 1px solid ${rgba("black", 0.05)};
  display: flex;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  font-size: 3rem;
  background: ${rgba("#6e45bd", 0.1)};
  color: ${rgba("#6e45bd", 0.75)};
  border-radius: 50%;
  margin: 0 0.625rem;
  transition: transform 0.25s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  &:hover:not(:disabled) {
    transform: translateY(-10px);
  }
`;

export default {
  components: {
    Wrapper,
    ProjectsWrapper,
    ProjectsTitle,
    ProjectCard,
    ProjectCards,
    ProjectIcon,
    ProjectTitle,
    ProjectDescription,
    FooterMain,
    FooterMainContent,
    FrontendJoe,
    FooterMainAuthor,
    FooterMainTitle,
    FooterMainText,
    SocialMedia,
    SocialButton
  },
  methods: {
    handleSocialButtonClick(address) {
      window.open(address);
    }
  }
};
</script>
