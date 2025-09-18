import type { Configuration, PopupRequest } from "@azure/msal-browser";

// MSAL configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: "37fe86e2-3663-46bf-85ac-9efa15eeaa4d",
    authority: "https://login.microsoftonline.com/a0e0d277-5bc2-4964-bbc5-af91a166fe98",
    redirectUri: `${import.meta.env.VITE_REDIRECT_URI}`,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

// scopes for your application
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"],
};