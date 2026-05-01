Motivation, Goals, and Roadmap

Motivation 
As a middle school computer science teacher, I used Minecraft Education in the classroom and had good experiences with it. However, there are some major limitations that fundamentally change how students perceive the programming capabilities of the agent. Most notably, cheats must be enabled to use the programming features, which disappointed students who were eager to take their newfound skills into Survival! This was the moment that the idea for this project started to take shape: I could make it so that students could use their programming skills in the actual game of no cheats Survival Minecraft instead of programming being relegated to a separate, novelty game mode. This leads to other interesting ideas, like what if you could restrict 'agents' to only affect their own player's blocks to prevent trolling in multi-player worlds? What if you created resource gathering areas that players could not go to themselves, but required the use of a robotic agent to access? Eventually, I had so many exciting ideas that I decided to pull the trigger and try to build it! 

Goals
There are some non negotiable features of this project:
Free and open source, no cost to host or play
No download required to play (except hosting servers) 
Programming is a core game mechanic, and is integrated into the main PvE mode without being considered cheating 
Performance must be such that a client can run on a Chromebook, as that is the only computer that many students have


Roadmap 
1. Base Engine selection 
I do not have the time nor expertise to develop a voxel game engine from scratch, especially in Javascript/typescript. Instead, I must find an already implemented engine on which to base this project. noa seems an excellent choice
2. Core game and management logic
inventory and crafting logic and UI, world saving, and client/server management (also planning to use a library for that) 
3. Technical framework for programming integration. Hopefully using Blockly, although may start with Python to avoid needing a UI layer for the programming. Need to think about if the Blockly UI will work in a strictly client side app
4. create some blocks, items, and recipes to support testing more advanced features 
5. first 'agent', which should be a craftable object, have limited capacity for command complexity and capacity, and be upgradable through acquiring advanced resources. Agent must be able to move, mine, and pick up items. 
6. 'biomes' that have 'hazards' that can only be traversed safely (or efficiently) by an agent
7. NPCs and enemies to start making this a real game with a real goal! 