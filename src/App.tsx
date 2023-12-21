import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LIME } from "@transitions_dev/look-into-my-eyes";

function App() {
  const [limeProps, setLimeProps] = useState({
    framesrc:
      "https://grandvision-images.imgix.net/media/61DFCDC7-BCC8-4E8A-ACCB81165ADF1B09/86BFBA58-9D52-4A2A-AF5225CC9D029374/original_png-31DEB2C0-C2CE-43ED-8A488065E2AF2547.png?w=352&fm=jpeg&auto=format?w=877&auto=format",
    upc: "000000000000",
    color: "Amethyst",
    showloading: "1",
    integrator: "qa-site",
    generatemask: "1",
    "transitions-type": "signature",
    containerId: "lime-container",
    spinnerColor: "#6986B0",
    onSuccessMessage: "FUNCTION SUCCESS",
    onErrorMessage: "FUNCTION ERROR",
    showlogo: "1",
  });
  return (
    <>
      <div
        className="border-2 border-gray-100 flex flex-col justify-center items-center"
        id="lime-container"
        style={{ height: 200 , width: 500 }}
      >
        {/* TFPA GOES HERE */}
        <LIME
          frameSrc={limeProps.framesrc} // Url of the frame
          generateMask={limeProps.generatemask} // If to generate a mask or not for the frame
          lensColor={limeProps.color} // To change the color of the frame
          upc={limeProps.upc} // UPC of the frame
          // original-frame-color="Blue" // Defined frame color
          // original-frame-shape="Round" // Defined frame shape
          integrator={limeProps.integrator} // Name of the integrator site eg. transitionscom (transitions.com)
          transitionsType={limeProps["transitions-type"]}
          containerId={limeProps.containerId}
          showLoading={limeProps.showloading}
          spinnerColor={limeProps.spinnerColor}
          showLogo={limeProps.showlogo}
        />
      </div>
    </>
  )
}

export default App
