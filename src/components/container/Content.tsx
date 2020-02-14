import React from "react";
import {Engine} from "../engine/Engine";

function Content() {
    return (
        <div className="container is-fluid">
           <Engine backgroundColor={0xd9d9d9} lights={[{color: 0xffffff, position: { x: 1, y: 0.75, z: 0.5 }}]} grid={{ size: 1000, dimensions: 50 }}/>
        </div>
    );
}

export default Content;
