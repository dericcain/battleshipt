module.exports.name = `
██████╗  █████╗ ████████╗████████╗██╗     ███████╗███████╗██╗  ██╗██╗██████╗ ████████╗
██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝██╔════╝██║  ██║██║██╔══██╗╚══██╔══╝
██████╔╝███████║   ██║      ██║   ██║     █████╗  ███████╗███████║██║██████╔╝   ██║   
██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝  ╚════██║██╔══██║██║██╔═══╝    ██║   
██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗███████║██║  ██║██║██║        ██║   
╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝   
                                                                                      
`;

module.exports.instructions = `=============================================\n
Instructions:\n
1. You will be asked for the coordinates of your ships. First, you will place the front of your ship by choosing a
coordinate, e.g., "a1". After you have chosen where the front of your ship will go, you will need to choose where the 
end of your ship will go, e.g., if "a1" is the front of your ship and your ship takes 3 spaces, then the back of your ship
may go at "a3" so that the whole ship takes coordinates "a1", "a2" and "a3". The game will give you hints about where the
end of your ship can go. You will do this until all of your ships are on the board. 
2. The robot's board will be setup with his ships (this happens in the background).
3. You will be prompted to fire a shot. As soon as you fire a shot, the robot will fire his shot.\n
Once the game has started, there are a couple of commands you need to know:
If you want to see your board and where the robot has fired, type: "me"
If you want to see the robot's board and where you have fired, type: "robot"\n
The first one to sink the other's ships will be the winner. Good luck!\n
=============================================\n`;

module.exports.letsPlay = `  _______      ___      .___  ___.  _______      ______   .__   __.  __  
 /  _____|    /   \\     |   \\/   | |   ____|    /  __  \\  |  \\ |  | |  | 
|  |  __     /  ^  \\    |  \\  /  | |  |__      |  |  |  | |   \\|  | |  | 
|  | |_ |   /  /_\\  \\   |  |\\/|  | |   __|     |  |  |  | |  . \`  | |  | 
|  |__| |  /  _____  \\  |  |  |  | |  |____    |  \`--'  | |  |\\   | |__| 
 \\______| /__/     \\__\\ |__|  |__| |_______|    \\______/  |__| \\__| (__) 
                                                                         `;

module.exports.won = `
____    ____  ______    __    __     ____    __    ____  ______   .__   __.  __  
\\   \\  /   / /  __  \\  |  |  |  |    \\   \\  /  \\  /   / /  __  \\  |  \\ |  | |  | 
 \\   \\/   / |  |  |  | |  |  |  |     \\   \\/    \\/   / |  |  |  | |   \\|  | |  | 
  \\_    _/  |  |  |  | |  |  |  |      \\            /  |  |  |  | |  . \`  | |  | 
    |  |    |  \`--'  | |  \`--'  |       \\    /\\    /   |  \`--'  | |  |\\   | |__| 
    |__|     \\______/   \\______/         \\__/  \\__/     \\______/  |__| \\__| (__) 
                                                                                 
`;

module.exports.lost = `____    ____  ______    __    __      __        ______        _______.___________.       ___
\\   \\  /   / /  __  \\  |  |  |  |    |  |      /  __  \\      /       |           |    _ /  /
 \\   \\/   / |  |  |  | |  |  |  |    |  |     |  |  |  |    |   (----\`---|  |----\`   (_)  | 
  \\_    _/  |  |  |  | |  |  |  |    |  |     |  |  |  |     \\   \\       |  |          |  | 
    |  |    |  \`--'  | |  \`--'  |    |  \`----.|  \`--'  | .----)   |      |  |         _|  | 
    |__|     \\______/   \\______/     |_______| \\______/  |_______/       |__|        (_)  | 
                                                                                        \\__\\`;

module.exports.sunk = `
  ██████  █    ██  ███▄    █  ██ ▄█▀
▒██    ▒  ██  ▓██▒ ██ ▀█   █  ██▄█▒ 
░ ▓██▄   ▓██  ▒██░▓██  ▀█ ██▒▓███▄░ 
  ▒   ██▒▓▓█  ░██░▓██▒  ▐▌██▒▓██ █▄ 
▒██████▒▒▒▒█████▓ ▒██░   ▓██░▒██▒ █▄
▒ ▒▓▒ ▒ ░░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
░ ░▒  ░ ░░░▒░ ░ ░ ░ ░░   ░ ▒░░ ░▒ ▒░
░  ░  ░   ░░░ ░ ░    ░   ░ ░ ░ ░░ ░ 
      ░     ░              ░ ░  ░   
                                    
`;
