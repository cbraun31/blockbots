# Motivation, Goals, and Roadmap

## Motivation 
As a middle school computer science teacher, I used Minecraft Education in the classroom and had good experiences with it. However, there are some major limitations that fundamentally change how students perceive the programming capabilities of the agent. Most notably, cheats must be enabled to use the programming features, which disappointed students who were eager to take their newfound skills into Survival! This was the moment that the idea for this project started to take shape: I could make it so that students could use their programming skills in the actual game of no cheats Survival Minecraft instead of programming being relegated to a separate, novelty game mode. 

This leads to other interesting ideas, like what if you could restrict 'agents' to only affect their own player's blocks to prevent trolling in multi-player worlds? What if you created resource gathering areas that players could not go to themselves, but required the use of a robotic agent to access? Eventually, I had so many exciting ideas that I decided to pull the trigger and try to build it! 

## Goals
There are some non negotiable features of this project:
1. Free and open source, no cost to host or play
2. No download required to play (except hosting servers) 
3. Programming is a core game mechanic, and is integrated into the main PvE mode without being considered cheating 
4. Performance must be such that a client can run on a Chromebook, as that is the only computer that many students have


## Roadmap 
### 1. Base Engine selection 
I do not have the time nor expertise to develop a voxel game engine from scratch, especially in Javascript/typescript (the use of which is essentially enforced by goal #2). Instead, I must find an already implemented engine in js/ts on which to base this project. 
###### noa seems to be an excellent choice for voxel mechanics, which is based on babylonjs for the graphics handling.
Both licences (MIT for noa and Apache for babylon) are free and open. Need to explore their interaction and what that means the license of this repo can/should be.
### 2. Core game and management logic
Inventory and crafting logic and UI, world saving, and client/server management (also planning to use a library for that) 
###### this stage should include making a testing plan and setting up any needed infrastructure/patterns, which should be used from here on.
### 3. Technical framework for programming integration. 
Hopefully using Blockly, although may start with Python to avoid needing a UI layer for the programming. Need to think about if the Blockly UI will work in a strictly client side app. 
### 4. create some blocks, items, and recipes
To support testing more advanced features, like: 
### 5. first 'agent'
An agent should be a craftable object, placeable as an entity, and able to run some 'commands'. It should have limited capacity for command complexity and capacity, and be upgradable through acquiring advanced resources. Agent must be able to move, mine, and pick up items. Also needs to be associated with its creator for multiplayer permissions reasons.
### 6. 'biomes' 
There should be different resource gathering areas that have 'hazards' that can only be traversed safely (or efficiently) by an agent. Could be cute and make some potions/food/items that give incomplete/temporary protection from certain hazards, which would let players naturally come to the conclusion that building an agent would be a better choice
### 7. NPCs and enemies 
Start making this a real game with a real goal! 
### 8. Tutorial
Create logic for bounding a player by 'checkpoints' to ensure tutorial completion.
### 9. Menu and UI implementation and cleanup
Make menus, buttons, and logic for game open splash, main menu, submenus of main, world start splash, main game HUD overlay, 'pause' menu, settings menu, programming UI menu, crafting menu, dialog and NPC interaction.

# noa-engine

An experimental voxel game engine.

Some projects using `noa`:
 * [bloxd.io](https://bloxd.io/) - multiplayer voxel games with editable worlds, by [Arthur](https://github.com/MCArth)
 * [Minecraft Classic](https://classic.minecraft.net/) - from Mojang (I'm as surprised as you are)
 * [VoxelSrv](https://github.com/Patbox/voxelsrv) - a voxel game inspired by Minecraft, by [patbox](https://github.com/Patbox)
 * [CityCraft.io](https://citycraft.io/) - multiplayer voxel cities, by [raoneel](https://github.com/raoneel)
 * [OPCraft](https://github.com/latticexyz/opcraft) - a voxel game running on Ethereum smart contracts, by [Lattice](https://github.com/latticexyz)
 * [noa-examples](https://github.com/fenomas/noa-examples) - starter repo with minimal hello-world and testbed games


----

## Usage

The easiest way to start building a game with `noa` is to clone the 
[examples](https://github.com/fenomas/noa-examples) repo and start hacking 
on the code there. The comments in the `hello-world` example source walk 
through how to instantiate the engine, define world geometry, and so forth. 
The example repo also shows the intended way to import noa's 
peer dependencies, test a world, build for production, etc.


## Docs

See the [API reference](https://fenomas.github.io/noa/API/) 
for engine classes and methods. 

Documentation PRs are welcome! See the source for details, API docs 
are generated automatically via `npm run docs`.


## Status, contributing, etc.

This engine is under active development and contributions are welcome.
Please open a discussion issue before submitting large changes.
**PRs should be sent against the `develop` branch!**

Code style/formatting are set up with config files and dev dependencies, 
if you use VSCode most of it should work automatically. If you send PRs, 
please try to be sorta-kinda consistent with what's already there.



## Change logs

See [history.md](docs/history.md) for full changes and migration for each version.

Recent changes:

 * `v0.33`: 
   * Much improved [API docs](https://fenomas.github.io/noa/API/)
   * Terrain now supports texture atlases! See `registry.registerMaterial`.
   * Added a fast way to specify that a worldgen chunk is entirely air/dirt/etc.
   * Modernized keybinds to use [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) strings, and changed several binding state properties
   * Bunch of internal improvements to support shadows - see [examples](https://github.com/fenomas/noa-examples)

 * `v0.32`: Fixes npm versioning issue - no code changes.
 * `v0.31`: 
   * Change the speed of the world! See `noa.timeScale`
   * Now possible to control chunk processing order: `noa.world.chunkSortingDistFn`
   * Much improved type exports and [API docs](https://fenomas.github.io/noa/API/) 
 * `v0.30`: 
   * Engine now a named export, use `import {Engine} from 'noa-engine'`
   * many performance and size optimizations
   * now generates proper type declarations and API references!
   * can now configure separate vert/horiz values for chunk load distance
   * core option `tickRate` is now in **ticks per second**, not ms per tick
   * adds several init options, e.g. `maxRenderRate`, `stickyFullscreen`
 * `v0.29`: 
   * maximum voxel ID is now `65535`
   * adds option `worldGenWhilePaused`
   * adds option `manuallyControlChunkLoading` and related APIs
   * performance and bug fixes


----

## Credits

Made with 🍺 by [@fenomas](https://fenomas.com), license is [MIT](LICENSE.txt).

Uses [Babylon.js](https://www.babylonjs.com/) for 3D rendering.
