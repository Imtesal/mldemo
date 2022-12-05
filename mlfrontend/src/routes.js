import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//NLP
const Sentimentanalysis = React.lazy(() => import('./views/nlp/sentimentanalysis/Sentimentanalysis'))
const Topicmodelling = React.lazy(() => import('./views/nlp/topicmodelling/Topicmodelling'))
const Summarization = React.lazy(() => import('./views/nlp/summarization/Summarization'))
const Scrapper = React.lazy(() => import('./views/nlp/scrapper/Scrapper'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/nlp/sentimentanalysis', name: 'Sentimentanalysis', element: Sentimentanalysis },
  { path: '/nlp/summarization', name: 'Summarization', element: Summarization },
  { path: '/nlp/scrapper', name: 'Scrapper', element: Scrapper },
  { path: '/nlp/topicmodelling', name: 'Topicmodelling', element: Topicmodelling },
]

export default routes
