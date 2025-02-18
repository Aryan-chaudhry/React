import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header'
import Content from './content'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Content></Content>
  </StrictMode>,
)
