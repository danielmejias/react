import { useState } from "react";

import { Grid } from './Grid'
import { Mode } from './Mode'

import "../styles/Main.css";
import sun from '../styles/img/sun.jpg'
import moon from '../styles/img/moon.jpg'



export const Main = () => {
    const [lightMode, setLightMode] = useState(false)

    return (
        <>
            <div className={lightMode ? "dark-mode" : "light-mode"}>
                <Mode
                    className='mode-switch ml-auto'
                    onClick={() => setLightMode(prevMode => !prevMode)}
                    src={lightMode ? sun : moon}
                    alt='lightning-bolt'
                    height='50px'
                />
                <Grid />
            </div>
        </>
    );
};
