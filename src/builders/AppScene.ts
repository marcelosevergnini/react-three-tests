import {Scene, WebGLRenderer, Color, DirectionalLight, PerspectiveCamera, GridHelper} from "three";

class AppScene {
    scene: Scene;
    renderer: WebGLRenderer;
    camera: PerspectiveCamera;



    constructor(useAntialias: boolean, color: number) {
        this.scene = new Scene();
        this.scene.background = new Color(color);
        this.renderer = new WebGLRenderer({ antialias: useAntialias });
        this.camera = new PerspectiveCamera( 45, 800 / 600, 1, 10000 );
        this.renderer.setSize(0, 0, false);
        this.camera.position.set( 500, 800, 1300 );
        this.camera.lookAt( 0, 0, 0 );
    }

    updateRenderSize = (width: number, height: number, updateStyle: boolean ) => {
        this.renderer.setSize(width, height, updateStyle);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    addLights = (lights: [{color: number, position : { x: number, y: number, z: number}}]) => {
        lights.forEach((light: {color: number, position : { x: number, y: number, z: number}}) => {
            let directionalLight = new DirectionalLight( new Color(light.color));
            directionalLight.position.set(light.position.x, light.position.y , light.position.z).normalize();
            this.scene.add(directionalLight);
        });
    };

    addGrid = (grid: {size: number, dimensions: number }) => {
        this.add(new GridHelper(grid.size, grid.dimensions ));
    };

    add = (elementToAdd: any) => {
        this.scene.add(elementToAdd);
    };

    render = () => {
        this.renderer.render( this.scene, this.camera );
    }
}
export default AppScene;
