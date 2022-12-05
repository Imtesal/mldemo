import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilNotes,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Machine Learning',
  },
  {
    component: CNavGroup,
    name: 'NLP',
    to: '/nlp',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sentiment Analysis',
        to: '/nlp/sentimentanalysis',
      },
      {
        component: CNavItem,
        name: 'Text Summarization',
        to: '/nlp/summarization',
      },
      {
        component: CNavItem,
        name: 'Topic Modelling',
        to: '/nlp/topicmodelling',
      },
      {
        component: CNavItem,
        name: 'Web Scrapping',
        to: '/nlp/scrapper',
      },
      {
        component: CNavItem,
        name: 'Content Generation',
        to: '/nlp/scrapper',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Customer Analytics',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Recommendation Engine',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Cross Sell / UP Sell',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Customer Churn',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Customer Segmentation',
        to: '/buttons/button-groups',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Image/Video Analytics',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Object recognition',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'One-Shot learning',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'OCR',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'AutoML',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'IOT',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
]

export default _nav
