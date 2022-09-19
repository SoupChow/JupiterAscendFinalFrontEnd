import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
const image = require('../MSbutton.jpg');

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <div >
        <input type="image" id="msbutton" src={image} onClick={() => handleLogin(instance)}/>
        </div>
    );
}