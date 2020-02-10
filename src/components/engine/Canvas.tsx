import * as React from 'react';
import {createRef, useEffect, useRef, useState} from 'react';
import AppScene from "../../builders/AppScene";

const style = {
    height: "calc(70vh)",
    width: "calc(100vw)"
};

interface Props {
    backgroundColor: number,
    lights: [{color: number, position: {x: number, y: number, z: number}}],
    grid: {size: number, dimensions: number }
}

const Canvas: React.FunctionComponent<Props> = ({backgroundColor, lights, grid = {} as any, ...props}) => {
    let canvasRef = useRef(null);
    let scene: AppScene = new AppScene(false, backgroundColor);

    const [state, setState] = useState({width: 0, height: 0, mousePos: {x: 0,y: 0}});

    useEffect(() => {
        // @ts-ignore
        const {offsetWidth, offsetHeight} = canvasRef.current;

        // @ts-ignore
        canvasRef.current.appendChild(scene.renderer.domElement);
        scene.updateRenderSize(offsetWidth, offsetHeight, true);
        scene.addLights(lights);
        scene.addGrid(grid);
        update();

        const resizeCanvas = () => {
            // @ts-ignore
            const {offsetWidth, offsetHeight} = canvasRef.current;
            scene.updateRenderSize(offsetWidth, offsetHeight, true);
            console.log({offsetWidth, offsetHeight});
            setState({width: offsetWidth, height: offsetHeight, ...state});

        };

        window.addEventListener("resize", resizeCanvas, false);
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };

    }, []);



    const update = () => {
        requestAnimationFrame(update);
        scene.render();
    };





    return (
        <div style={style} ref={canvasRef} />
    )
};

export default Canvas;