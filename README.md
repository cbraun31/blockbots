# Initial setup for Ubuntu 24.04:
I already had npm installed, so do that first if you don't
npm init
npm install --save-dev @babylonjs/core
npm install --save-dev @babylonjs/inspector
sudo apt install node-typescript
tsc --init
change tsconfig to 

{
  "compilerOptions": {
    "target": "es6",
    "module": "ESNext",
    "moduleResolution": "node",
    "noResolve": false,
    "noImplicitAny": false,
    "sourceMap": true,
    "preserveConstEnums":true,
    "lib": [
        "dom",
        "es6"
    ],
    "rootDir": "src"
  }
}

npm install --save-dev typescript webpack ts-loader webpack-cli
// babylon tutorial says you might have to run that twice
