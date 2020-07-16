<template>
  <Wrapper>
    <Mobile :slides="slides" />
    <Desktop :components="slides" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";

import TrashcanShredder from "@/components/interactions/trashcanShredder/Wrapper";
import HamburgerClose from "@/components/interactions/hamburgerClose/Wrapper2";
import NavbarSlider from "@/components/interactions/NavbarSlider";
import RippleButton from "@/components/interactions/rippleButton/WrapperCss";
import PaperPlaneSend from "@/components/interactions/PaperPlaneSend";
import UnderlineButton from "@/components/interactions/UnderlineButton";
import PasswordValidator from "@/components/interactions/PasswordValidator";
import UnderlineTabs from "@/components/interactions/UnderlineTabs";
import CopyButton from "@/components/interactions/CopyButton";
import MaterialCheckbox from "@/components/interactions/MaterialCheckboxWebsite";
import FillUpButton from "@/components/interactions/FillUpButton";
import OutlinedInput from "@/components/interactions/OutlinedInputWebsite";
import ShadowButton from "@/components/interactions/ShadowButton";
import PulsingBadge from "@/components/interactions/pulsingBadge/Navbar";
import HighlightLink from "@/components/interactions/highlightButton/HighlightButton";
import SwitchInput from "@/components/interactions/SwitchInput";
import PasswordValidator2 from "@/components/interactions/PasswordValidator2";
import ProgressButton from "@/components/interactions/ProgressButton";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Wrapper,
    Mobile,
    Desktop
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "hamburger-close",
          collab: "leeohgonzalez",
          image: require("@/assets/images/leeo.png"),
          component: HamburgerClose,
          background: "#1b215d",
          githubUrl: "hamburgerClose/CrossButton.vue"
        },
        {
          id: 2,
          name: "trashcan-shredder",
          collab: "bydanromero",
          image: require("@/assets/images/dan.png"),
          component: TrashcanShredder,
          background: "#59bf97",
          githubUrl: "trashcanShredder/Wrapper.vue"
        },
        {
          id: 3,
          name: "navbar-slider",
          collab: "ux.ale",
          image: require("@/assets/images/ale.png"),
          component: NavbarSlider,
          background: "#323553",
          githubUrl: "NavbarSlider.vue"
        },
        {
          id: 4,
          name: "ripple-button",
          collab: "andrew.eugene",
          image: require("@/assets/images/eugene.png"),
          component: RippleButton,
          background: "#1b2650",
          githubUrl: "rippleButton/WrapperCss.vue"
        },
        {
          id: 5,
          name: "paper-plane-send",
          collab: "mikevdijssel",
          image: require("@/assets/images/mike.png"),
          component: PaperPlaneSend,
          background: "#1b2650",
          githubUrl: "PaperPlaneSend.vue"
        },
        {
          id: 6,
          name: "underline-button",
          collab: "janm_ux",
          image: require("@/assets/images/jan.png"),
          component: UnderlineButton,
          background: "#f8f8fd",
          githubUrl: "UnderlineButton.vue"
        },
        {
          id: 7,
          name: "password-validator",
          collab: "misaac85",
          image: require("@/assets/images/miriam.png"),
          component: PasswordValidator,
          background: "#fbfaff",
          githubUrl: "PasswordValidator"
        },
        {
          id: 8,
          name: "underline-tabs",
          collab: "lianascimentto",
          image: require("@/assets/images/lia.png"),
          component: UnderlineTabs,
          background: "#6e46bb",
          githubUrl: "UnderlineTabs.vue"
        },
        {
          id: 9,
          name: "copy-button",
          collab: "alex.arutuynov",
          image: require("@/assets/images/alex.png"),
          component: CopyButton,
          background: "#262439",
          githubUrl: "CopyButton.vue"
        },
        {
          id: 10,
          name: "material-checkbox",
          collab: "abdulldsgnr",
          image: require("@/assets/images/abdul.png"),
          component: MaterialCheckbox,
          background: "#ebebeb",
          githubUrl: "MaterialCheckbox.vue"
        },
        {
          id: 11,
          name: "fill-up-button",
          collab: "janm_ux",
          image: require("@/assets/images/jan.png"),
          component: FillUpButton,
          background: "#11141a",
          githubUrl: "FillUpButton.vue"
        },
        {
          id: 12,
          name: "outlined-input",
          collab: "gabrielemalaspina",
          image: require("@/assets/images/gabriele.png"),
          component: OutlinedInput,
          background: "#001128",
          githubUrl: "OutlinedInput.vue"
        },
        {
          id: 13,
          name: "shadow-button",
          collab: "mauricio.bucardo",
          image: require("@/assets/images/mauricio.png"),
          component: ShadowButton,
          background: "#40009c",
          githubUrl: "ShadowButton.vue"
        },
        {
          id: 14,
          name: "pulsing-badge",
          collab: "bydanromero",
          image: require("@/assets/images/dan.png"),
          component: PulsingBadge,
          background: "#59bf97",
          githubUrl: "pulsingBadge/NavbarBadge.vue"
        },
        {
          id: 15,
          name: "highlight-link",
          collab: "trupsfolio",
          image: require("@/assets/images/trups.png"),
          component: HighlightLink,
          background: "#59bf97",
          githubUrl: "highlightButton/HighlightButton.vue"
        },
        {
          id: 16,
          name: "switch-input",
          collab: "thalion_pb",
          image: require("@/assets/images/thalion.png"),
          component: SwitchInput,
          background: "#59bf97",
          githubUrl: "SwitchInput"
        },
        {
          id: 17,
          name: "password-validator-2",
          collab: "misaac85",
          image: require("@/assets/images/miriam.png"),
          component: PasswordValidator2,
          background: "#59bf97",
          githubUrl: "PasswordValidator2.vue"
        },
        {
          id: 18,
          name: "progress-button",
          collab: "mikevdijssel",
          image: require("@/assets/images/mike.png"),
          component: ProgressButton,
          background: "#59bf97",
          githubUrl: "ProgressButton.vue"
        }
      ]
    };
  }
};
</script>
