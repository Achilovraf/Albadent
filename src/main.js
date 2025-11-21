// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";
import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUndoAlt,
  faTruck,
  faHeadset,
  faShieldAlt,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faQuestionCircle,
  faUsers,
  faClock,
  faCheck,
  faShoppingCart,
  faArrowRight,
  faUser,
  faComment,
  faPaperPlane,
  faChevronDown,
  faChevronRight,
  faInfoCircle,
  faBullseye,
  faEye,
  faMedal,
  faShippingFast,
  faUserFriends,
  faChartLine,
  faHandshake,
  faDownload,
  faCogs,
  faTooth,
  faMicroscope,
  faPills,
  faTools,
  faShieldVirus,
  faGraduationCap,
  faBox,
  faCalendar,
  faHome,
  faSitemap,
  faBook,
  faBuilding,
  faHeart,
  faQuoteLeft,
  faStar,
  faTag,
  // Добавьте эти иконки сюда:
  faLink,
  faCopy,
  faClipboard,
  faArrowLeft,
  faNewspaper,
  faExclamationTriangle,
  faShare
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn
  // Только социальные иконки остаются здесь
} from "@fortawesome/free-brands-svg-icons";

// Add icons to library
library.add(
  faUndoAlt,
  faTruck,
  faHeadset,
  faShieldAlt,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faQuestionCircle,
  faUsers,
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faClock,
  faCheck,
  faShoppingCart,
  faArrowRight,
  faUser,
  faComment,
  faPaperPlane,
  faChevronDown,
  faChevronRight, // Добавлена в library
  faInfoCircle,
  faBullseye,
  faEye,
  faMedal,
  faShippingFast,
  faUserFriends,
  faChartLine,
  faHandshake,
  faDownload,
  faCogs,
  faTooth,
  faMicroscope,
  faPills,
  faTools,
  faShieldVirus,
  faGraduationCap,
  faBox,
  faCalendar,
  faHome,
  faSitemap,
  faBook,
  faBuilding,
  faHeart,
  faQuoteLeft,
  faStar,
  faTag,
  faLink,
  faCopy,
  faClipboard,
  faArrowLeft,
  faNewspaper,
  faExclamationTriangle,
  faShare
  
);

const app = createApp(App);

// Register FontAwesome component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.mount("#app");

AOS.init({
  duration: 800,
  once: false,
  mirror: true,
});

router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});
