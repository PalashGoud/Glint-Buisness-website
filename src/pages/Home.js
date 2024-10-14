import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import About from '../components/About'
import Services from '../components/Services'
import Work from '../components/Work'
import Clients from '../components/Clients'
import Worknew from '../components/Worknew'
import Contact from '../components/Contact'
import Last from '../components/Last'



function Home() {
  return (
    <div>
        <Header></Header>
        <Intro></Intro>
        <About></About>
        <Services></Services>
        <Work></Work>
        <Worknew></Worknew>
        <Clients></Clients>
        <Contact></Contact>
        <Last></Last>
    </div>
  )
}

export default Home