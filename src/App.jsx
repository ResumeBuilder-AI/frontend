import './App.css'
import './components/Supertokens';
import { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";
import * as reactRouterDom from "react-router-dom";
import { Test } from './components/Test';
import { Protected } from './components/Protected';
import { ResumeAI } from './views/ResumeAI';
import { ResumeHome } from './views/ResumeHome';



function App() {

  return (
    <SuperTokensWrapper>
      <BrowserRouter>
          <Routes>
              {/*This renders the login UI on the /auth route*/}
              {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyEmailPasswordPreBuiltUI])}
              {/*Your app routes*/}
              <Route path="/Test" element={<Protected Component={Test} />} />
              <Route path="/e" Component={ResumeHome} /> {/* 👈 Testing route/ */}
              <Route path="/home" element={<Protected Component={ResumeHome} />} /> 
              <Route path="/resume/:slug/edit" element={<Protected Component={ResumeAI} />} /> 

              {/* if not found redirect */}
              <Route path='*' element={<Navigate replace to="/home" />} />
          </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  )
}

export default App
