// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Sports{

    uint playerId;  
    mapping(uint => uint) public playerGoalScored;
    mapping(uint => uint) public playerRedCards;
    mapping(uint=>uint) public playerYellowCards;


    constructor(){
        
    }


    function registerPlayer(uint _pid)external{
        playerGoalScored[_pid] = 0;
    }


    function scoreGoal(uint _pId,uint _goalScored) external {
        playerGoalScored[_pId]+=_goalScored;
    }

    function redCards(uint _pid) external{
        playerRedCards[_pid]+=1;
    }
    function yellowCards(uint _pid)external{
        playerYellowCards[_pid]+=1;
    }


    function getPlayerInfo(uint _pid)external view returns(uint){
        return playerGoalScored[_pid];
    }
    function getRedCards(uint _pid)external view returns(uint){
        return playerRedCards[_pid];
    }

    function gerYellowCards(uint _pid) external view returns(uint){
        return playerYellowCards[_pid];
    }
}