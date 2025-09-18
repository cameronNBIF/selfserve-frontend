import './App.css'
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./AuthConfig";
import { AuthWrapper } from "./components/AuthWrapper";
import Page from './components/DataTable/Page.tsx'
import Homepage from './components/Homepage.tsx'
import { NavBar } from './components/NavBar.tsx'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {

  return (
    <MsalProvider instance={msalInstance}>
      <AuthWrapper>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/search" element={<Page />} />
          </Routes>
        </Router>
      </AuthWrapper>
    </MsalProvider>
  )
}

export default App