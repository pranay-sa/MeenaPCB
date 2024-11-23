import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import OurProducts from './OurProducts'
import InfrastructureSection from './InfrastructureSection'
import CustomerReviews from './CustomerReviews'
import CertificationsSection from './CertificationsSection'
import SponsorsSection from './SponsorsSection'
import AboutPage from './AboutPage'
import IndustriesWeServe from './IndustriesWeServe'
import ContactUs from './ContactUs'
import FourLayerPcb from './FourLayerPcb.jsx'
import SixLayerPcb from './SixLayerPcb.jsx'
import SingleLayerPcb from './SingleLayerPcb.jsx'
import MetalCorePCB from './MetalCorePcb.jsx'
import EightLayerPcb from './EightLayerPcb.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
            <OurProducts />
            <InfrastructureSection />
            <CustomerReviews />
            <CertificationsSection />
            <SponsorsSection />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
            <AboutPage />
          </Layout>
        } />
        <Route path="/industries" element={
          <Layout>
            <IndustriesWeServe />
          </Layout>
        } />
        
        <Route path="/contact" element={
          <Layout>
            <ContactUs />
          </Layout>
        } />
        <Route path="/fourlayer" element={
          <Layout>
            <FourLayerPcb />
          </Layout>
        } />
        <Route path="/sixlayer" element={
          <Layout>
            <SixLayerPcb />
          </Layout>
        } />
        <Route path="/eightlayer" element={
          <Layout>
            <EightLayerPcb />
          </Layout>
        } />
        <Route path="/metalcore" element={
          <Layout>
            <MetalCorePCB />
          </Layout>
        } />
        <Route path="/singlepcb" element={
          <Layout>
            <SingleLayerPcb />
          </Layout>
        } />
      </Routes>
      
    </Router>
  )
}

export default App