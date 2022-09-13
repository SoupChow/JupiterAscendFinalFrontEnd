export const msalConfig = {
    auth: {
      clientId: "a3326704-06e6-4065-b978-0e89969a2d83",
      authority: "https://login.microsoftonline.com/1f4beacd-b7aa-49b2-aaa1-b8525cb257e0", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
//  export const graphConfig = {
     // graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
  //};