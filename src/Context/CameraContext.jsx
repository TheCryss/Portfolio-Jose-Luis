import { createContext,useState,useContext } from "react";

const cameraContext = createContext() 
const cameraToggleContext = createContext()


export function useCameraContext(){
    return useContext(cameraContext)
}
export function useCameraToggleContext(){
    return useContext(cameraToggleContext)
}


export function CameraProvider({children}){
    const [cameraState, setCameraState] = useState({
        "position":[0, 8, 12],
        "direction":[0,0,0],
        "player":"basketball"
    })
    return(
        <cameraContext.Provider value={cameraState}>
            <cameraToggleContext.Provider value={setCameraState}>
                {children}
            </cameraToggleContext.Provider>
        </cameraContext.Provider>

    )
}