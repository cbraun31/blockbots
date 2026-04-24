import { StandardMaterial, Texture, Vector4, MeshBuilder } from "@babylonjs/core";
export function makeBlock(){
    const mat = new StandardMaterial("mat");
    const texture = new Texture("https://assets.babylonjs.com/environments/numbers.jpg");
    mat.diffuseTexture = texture;

    var columns = 6;
    var rows = 1;

    const faceUV = new Array(6);

    for (let i = 0; i < 6; i++) {
        faceUV[i] = new Vector4(i / columns, 0, (i + 1) / columns, 1 / rows);
    }

    const options = {
        faceUV: faceUV,
        wrap: true
    };

    const box = MeshBuilder.CreateBox("box", options);
    box.material = mat;
    return box;
}