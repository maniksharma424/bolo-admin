import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilAddressBook,
  cilAirplaneMode,
  cilAppsSettings,
  cilBell,
  cilBrush,
  cilCalculator,
  cilCalendar,
  cilCart,
  cilChartPie,
  cilClipboard,
  cilCommand,
  cilCompress,
  cilContact,
  cilCursor,
  cilDrop,
  cilFace,
  cilFilterSquare,
  cilInfo,
  cilLanguage,
  cilLoopCircular,
  cilMedicalCross,
  cilMoney,
  cilMugTea,
  cilNewspaper,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSitemap,
  cilSpeedometer,
  cilStar,
  cilSwapHorizontal,
  cilTablet,
  cilTags,
  cilTennisBall,
  cilText,
  cilUser
  ,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: "Products",
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    to: "/products",
  },
  // {
  //   component: CNavItem,
  //   name: 'Departures',
  //   icon: <CIcon icon={cilAirplaneMode} customClassName="nav-icon" />,
  //   to: '/departures',
  // },
  {
    component: CNavItem,
    name: "Testimonials",
    icon: <CIcon icon={cilCompress} customClassName="nav-icon" />,
    to: "/testimonials",
  },
  {
    component: CNavItem,
    name: "Contact Requests",
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    to: "/contact/request",
  },

  // {
  //   component: CNavItem,
  //   name: 'Information',
  //   icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  //   to: '/informations',
  // },

  {
    component: CNavItem,
    name: "Appointments",
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    to: "/appointments",
  },

  {
    component: CNavItem,
    name: "Users",
    icon: <CIcon icon={cilTennisBall} customClassName="nav-icon" />,
    to: "/users",
  },
  {
    component: CNavGroup,
    name: "Franchisee Orders",
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "New",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/new",
      },
      {
        component: CNavItem,
        name: "Paid",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/returned",
      },
      {
        component: CNavItem,
        name: "Processing",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/processing",
      },
      {
        component: CNavItem,
        name: "Dispatched",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/dispatched",
      },
      {
        component: CNavItem,
        name: "Delivered",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/delivered",
      },
      {
        component: CNavItem,
        name: "Cancelled",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        to: "/orders/cancelled",
      },
    ],
  },

  {
    component: CNavItem,
    name: "Recipients",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    to: "/recipents",
  },
  {
    component: CNavItem,
    name: "Campaigns",
    icon: <CIcon icon={cilUser
    } customClassName="nav-icon" />,
    to: "/campaigns",
  },
  {
    component: CNavGroup,
    name: "Configuration",
    icon: <CIcon icon={cilAppsSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Purpose",
        icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
        to: "/purpose",
      },
      {
        component: CNavItem,
        name: "Business Type",
        icon: <CIcon icon={cilBrush} customClassName="nav-icon" />,
        to: "/business_type",
      },

      // {
      //   component: CNavItem,
      //   name: 'States',
      //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      //   to: '/states',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Standard Shipping',
      //   icon: <CIcon icon={cilCommand} customClassName="nav-icon" />,
      //   to: '/shipping',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Custom Shipping',
      //   icon: <CIcon icon={cilCommand} customClassName="nav-icon" />,
      //   to: '/custom-shipping',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Pincode',
      //   icon: <CIcon icon={cilCommand} customClassName="nav-icon" />,
      //   to: '/pincode',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Tax Rates',
      //   icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
      //   to: '/tax',
      // },
      {
        component: CNavItem,
        name: "Languages",
        icon: <CIcon icon={cilLanguage} customClassName="nav-icon" />,
        to: "/languages",
      },
      {
        component: CNavItem,
        name: "Policies",
        icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
        to: "/policies",
      },
      {
        component: CNavItem,
        name: "Social Media",
        icon: <CIcon icon={cilMedicalCross} customClassName="nav-icon" />,
        to: "/socialmedia",
      },
      {
        component: CNavItem,
        name: "Application Name",
        icon: <CIcon icon={cilText} customClassName="nav-icon" />,
        to: "/application/name",
      },

      {
        component: CNavItem,
        name: "Address",
        icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
        to: "/address",
      },
      {
        component: CNavItem,
        name: "Logos",
        icon: <CIcon icon={cilCommand} customClassName="nav-icon" />,
        to: "/logo",
      },
      {
        component: CNavItem,
        name: "Copyright Message",
        icon: <CIcon icon={cilText} customClassName="nav-icon" />,
        to: "/copyright/message",
      },
    ],
  },
];

export default _nav;
