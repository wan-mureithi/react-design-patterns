import React from "react"
import ProfileCard from "./ProfileCard"
import AlexaImage from "./images/alexa.png"
import CortanaImage from "./images/cortana.png"
import SiriImage from "./images/siri.png"

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@alexa99" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@alexa99" image={SiriImage} />
    </div>
  )
}

export default App
