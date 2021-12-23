function gameObject() {
    return {
home: {
  teamName: "Brooklyn Nets",
  colors:['Black', 'White'],
  players: {
      'Alan Anderson': {
     number: '24',
      shoe:'11',
      points: '17',
      rebounds:'2',
      assists: '3',
     steals:'1'
     blocks: '3',
     slamDunks: '1',
      
  },
'Reggi Evans': {
    number: '28',
      shoe:'11',
      points: '17',
      rebounds:'2',
      assists: '3',
     steals:'1'
     blocks: '3',
     slamDunks: '1',
} , 

'Brooks Lopez': {
  number: '28',
    shoe:'11',
    points: '17',
    rebounds:'2',
    assists: '3',
   steals:'1'
   blocks: '3',
   slamDunks: '15',
}
},

  away: {
      teamName: "Chicago Bulls",
      colors: ['Purple'],
      players: {
          'Lebron James': {
          number: '24',
          shoe: '12',
          points: '21',
          rebounds: '1',
          assists: '11',
          steals: '7',
          blocks: '3',
          slamDunks: '1',
   },
   'Nikola Jokic': {
    number: '15',
    shoe: '12',
    points: '33',
    rebounds: '11',
    assists: '16',
    steals: '7',
    blocks: '3',
    slamDunks: '1',
   } ,

   'Brandan Haywood': {
    number: '33',
    shoe: '15',
    points: '33',
    rebounds: '11',
    assists: '16',
    steals: '7',
    blocks: '3',
    slamDunks: '12',
  }
  } 
} }
}
}
function players() {
  const game = gameObject()
  const homePlayers = game.home.players
  const awayPlayers = game.away.players
  
  // return Object.assign({}, homePlayers, awayPlayers)
  return {...homePlayers, ...awayPlayers}
}

function numPointsScored(playerInput) {
   const game = gameObject()
    for(const gameKey in game) { //iterate through game keys(home, away)
      const teamObj = game[gameKey]
// for(const teamKey in teamObj) { //iterate through team keys(teamName, colors, players..)
  const playerObj = teamObj.players
for(const playerKey in playerObj) { //itetate through players
if(playerKey === playerInput) { //check to see ig player matches function
return playerObj[playerKey].points //return the player's points
}
}
}
    }
  
 
function shoeSize(){
  return
}
function teamColors(){
  return
}
function teamNames() {
  return
}
function playerNumbers(){
  return
}
function platerStats() {
  return
}