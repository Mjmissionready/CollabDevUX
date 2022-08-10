import React from "react";
import styled from "styled-components";

const Contatiner = styled.div`
display: flex;
width: 100%;
height:100vh;
justify-content: center;
align-items: center;
`;

(function(d, m){

/*---------------- Kommunicate settings start ----------------*/

 var kommunicateSettings = {
  "appId": "<APP_ID>",  
  "automaticChatOpenOnNavigation": true,
  "popupWidget": true
  /*
  "onInit": function (){
    // paste your code here
  }
  */
  };

/*----------------- Kommunicate settings end ------------------*/

 var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0];
  h.appendChild(s);
  window.kommunicate = m;
  m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

export default function Chatbot() {
    return (
        <Contatiner>
               <iframe
                    title="chatBot"
                    allow="microphone;"
                    width="325"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/6c834e11-8cd1-4e9b-b7e0-356f7be9dd63">
                </iframe>
                
        </Contatiner>
    )
};