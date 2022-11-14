import { RouteType } from "./config";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import HomePage from "../pages/home/HomePage";
import ReferralsPage from "../pages/referrals/ReferralsPage";
import ExamplesPage from "../pages/examples/ExamplesPage";
import AboutUsPage from "../pages/aboutus/AboutUsPage";
import ContactPage from "../pages/contact/ContactPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/referrals",
    element: <ReferralsPage />,
    state: "referrals",
    sidebarProps: {
      displayText: "Referrals",
      icon: <PeopleAltOutlinedIcon />
    }
  },
  {
    path: "/examples",
    element: <ExamplesPage />,
    state: "examples",
    sidebarProps: {
      displayText: "Examples",
      icon: <DescriptionOutlinedIcon />
    }
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
    state: "aboutus",
    sidebarProps: {
      displayText: "About Us",
      icon: <LocalLibraryOutlinedIcon />
    }
  },
  {
    path: "/contact",
    element: <ContactPage />,
    state: "contact",
    sidebarProps: {
      displayText: "Contact Us",
      icon: <ContactMailOutlinedIcon />
    }
  }
];

export default appRoutes;