import React, { Component } from 'react';
import AppScene from "../../builders/AppScene";

const style = {
    width: "calc(97vw)",
    height: "calc(70vh)"
};

interface EngineProps {
    backgroundColor: number,
    lights: {color: number, position: {x: number, y: number, z: number}}[],
    grid: {size: number, dimensions: number }
}

export class Engine extends Component<EngineProps> {
    containerRef: any;
    props: EngineProps;
    scene: AppScene;

    constructor(props: EngineProps) {
        super(props);
        this.props = props;
        this.containerRef = React.createRef();
        this.state = {width: 0, height: 0, mousePos: {x: 0,y: 0}};
        window.addEventListener("resize", this.resizeCanvas, true);
        window.addEventListener('mousemove', this.onDocumentMouseMove);

    }

    componentDidMount = () => {
        this.scene = new AppScene(false, this.props.backgroundColor);
        this.containerRef.appendChild(this.scene.renderer.domElement);
        const {offsetWidth, offsetHeight} = this.containerRef;
        this.setState({width: offsetWidth, height: offsetHeight});
        this.scene.updateRenderSize(offsetWidth, offsetHeight, true);
        this.scene.addLights(this.props.lights);
        this.scene.addGrid(this.props.grid);
        this.animate();
    };

    animate = () => {
        window.requestAnimationFrame(this.animate);
        this.scene.render();
    };

    resizeCanvas = () => {
        const {offsetWidth, offsetHeight} = this.containerRef;
        this.scene.updateRenderSize(offsetWidth, offsetHeight, true);
        this.setState({width: offsetWidth, height: offsetHeight});
    };

    onDocumentMouseMove = (event: MouseEvent) => {
        event.preventDefault();
        this.setState(() => {
            return {mousePos: {
                x: ((event.clientX / this.containerRef.offsetWidth) * 2 - 1),
                y: (-(event.clientY / this.containerRef.offsetHeight) * 2 + 1)
            }}
        });
    };

    render = () => {
        return (
            <div style={style} ref={ref => (this.containerRef = ref)} />
        )
    }
}
