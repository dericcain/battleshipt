```
██████╗  █████╗ ████████╗████████╗██╗     ███████╗███████╗██╗  ██╗██╗██████╗ ████████╗
██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝██╔════╝██║  ██║██║██╔══██╗╚══██╔══╝
██████╔╝███████║   ██║      ██║   ██║     █████╗  ███████╗███████║██║██████╔╝   ██║   
██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝  ╚════██║██╔══██║██║██╔═══╝    ██║   
██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗███████║██║  ██║██║██║        ██║   
╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
```

_**The legendary game of Player vs Robot.**_

## Install

Clone the repo and then type `npm start`. There are no dependencies so there is no need to type `npm install`.

## Game Instructions

### Setup
The first thing that you will need to do is place your ships on the board. You will be asked to give the starting 
coordinate of your ship, e.g., "c2". Once you type the starting coordinate and press "Enter", you will be given the 
options for where the end coordinate of your ship will be. You will notice that a board will show a boat on the 
coordinate you entered for your start coordinate and you will see green checkmarks on all of the available end 
coordinates. Choose one of the coordinates where the green checkmark resides and the game will fill in the coordinates 
in between the start and end coordinates.

![BattleShipt Setup](https://cl.ly/8e7dba/Screen%252520Recording%2525202019-01-09%252520at%25252008.58%252520AM.gif)

> The recorded .gif above is not displaying the emojis in the terminal for some reason.

### Playing
Once all of the ships have been placed on the board, it is time to play. The player will go first and then the robot 
will go. The player should enter a coordinate to fire a shot. If a ship is hit, then you will see "Hit", otherwise, you
will see "Miss". If you have already fired at the coordinate, you will be told.

#### Commands
There are two helpful commands that can be typed at any time during game play (after setup):

- `robot` - Shows the robots board and where all the player has fired shots (hits 🔥 and misses 🚫). 
- `me` - Shows the players board and where the robot has fired shots and also where the player's boats reside.

![BattleShipt Commands](https://cl.ly/caaab3/Screen%252520Recording%2525202019-01-09%252520at%25252008.42%252520AM.gif)

## Notes

> This is not the Github account that I use on a daily basis. For that account, see here: https://github.com/dericgw 
