import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, UniversalCamera } from "@babylonjs/core";
import { makeBlock } from './block'
class App {
    constructor() {
        // create the canvas html element and attach it to the webpage
        var canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);

        // initialize babylon scene and engine
        var engine = new Engine(canvas, true);
        var scene = new Scene(engine);
        // Create FPS-style camera
        const camera = new UniversalCamera(
            "FPSCamera",
            new Vector3(0, 2, -10),
            scene
        );

        // Attach mouse + keyboard controls
        camera.attachControl(canvas, true);

        // Movement speed & mouse sensitivity
        camera.speed = 0.5;
        camera.angularSensibility = 5000;

        // Simple ground
        const ground = MeshBuilder.CreateGround(
            "ground",
            { width: 50, height: 50 },
            scene
        )
        var light1: HemisphericLight = new HemisphericLight("light1", new Vector3(1, 1, 0), scene);
        var b1 = makeBlock();

        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && (ev.key === "I" || ev.key === "i")) {
                if (scene.debugLayer.isVisible()) {
                    scene.debugLayer.hide();
                } else {
                    scene.debugLayer.show();
                }
            }
        });

        // run the main render loop
        engine.runRenderLoop(() => {
            scene.render();
        });
    }
}
new App();