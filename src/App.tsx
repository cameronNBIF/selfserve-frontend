import './App.css'
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./AuthConfig";
import { AuthWrapper } from "./components/AuthWrapper";
import Page from './components/DataTable/Page.tsx'
import { NavBar } from './components/NavBar.tsx'

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthWrapper>
        <div>
          <NavBar/>
        </div>
        <div className="card">
          <Page/>
        </div>
      </AuthWrapper>
    </MsalProvider>
  )
}

export default App