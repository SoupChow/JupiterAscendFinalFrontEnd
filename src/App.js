import './App.css';
import React from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { SignInButton } from './components/SignInButton';
import { SignOutButton } from './components/SignOutButton';
import Header from './components/Header';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className='App'>
      <AuthenticatedTemplate>
        <Header><SignOutButton /></Header>
        <div className='uploader'>
          <div className='row'>
          <div className='col-md-6'>
              <FileUpload/>
            </div>
          </div>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div>
          <div className='welcomepart'>
            <div id='welcome'>Welcome to CertiVerify</div>
            <div id='welcomedesc'>A Persistent way of verifying certifications</div>
          </div>
          <div className='ssopart'> 
            <SignInButton/>
          </div>
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;