const main=document.querySelector("main")
const human_player="X"
// a random choice based function
function chooseRandom(aray){
    const random_num=Math.random()*10
    const factor=10/aray.length
    for(let i=0;i<aray.length;i++){
        if((i+1)*factor>=random_num){
            return aray[i]
        }
    }
}


class Game{
    constructor(){
        this.board=this.makeBoard();//will interact in the backend using this
        this.availableSpots=[0,1,2,3,4,5,6,7,8]
        this.winner=null

    }
    makeBoard(){
        let box
        let board=[]
        for(let i=0;i<9;i++){
            box=document.createElement("div")
            // box.addEventListener("click",(e)=>{
            //     this.mark(null,e,human_player)
            // })
            board=board.concat(box)
            main.appendChild(box)
        }
        return board
    }
    mark(spot=null,target=null,player_sign){
        let box
        console.log(spot)
        if (spot){
            box=this.board[spot]
        }
        else{
            box=target.target
        }

        console.log(this.board.indexOf(box))
        this.availableSpots=this.availableSpots.filter(x=>x!=this.board.indexOf(box))
        if (player_sign=="X"){
            box.classList.add("cross")

            
        }
        else{
            box.classList.add("zero")
        
        }
        this.winner=this.winnerCheck()
       
    }

    winnerCheck(){
        //rows
        
        for(let i of [0,3,6]){
            if(this.board[i].classList!=undefined && this.board[i].classList[0]==this.board[i+1].classList[0] && this.board[i].classList[0]==this.board[i+2].classList[0]){
                return this.board[i].classList[0]
            }
        }
        //column
        for(let i of [0,1,2]){
            if(this.board[i].classList!=undefined && this.board[i].classList[0]==this.board[i+3].classList[0] && this.board[i].classList[0]==this.board[i+6].classList[0]){
                return this.board[i].classList[0]
            }
        }
        //diagonal
        //left to right
        for(let i of [[-4,4],[-2,2]]){
            if(this.board[4].classList!=undefined && this.board[4+i[0]].classList[0]==this.board[4].classList[0] && this.board[4+i[1]].classList[0]==this.board[4].classList[0] ){
                return this.board[4].classList[0]
            }
        }
        return NaN

    }
    

}

class Human_player{
    constructor(letter="X"){
        this.letter=letter
    }
    make_move(game){
        game.availableSpots.forEach(x=>game.board[x].addEventListener("click",(e)=>{
            game.mark(spot=null,target=e,player_sign=this.letter)
        }))
        
    }

}
class Computer_player{
    constructor(letter="O"){
        this.letter=letter

    }
    make_move(game){//takes the game object and finds the current abailable spots then chooses randomly form those spots
        console.log(game.availableSpots)
        const move=chooseRandom([game.availableSpots])
        console.log(move)

        game.mark(move,null,this.letter)
    }
}
function play(game,player1,player2){
    // game.makeBoard()
    while(!game.winner){
        player1.make_move(game);
        player2.make_move(game);       
    }
    console.log(game.winner)
}

const game=new Game()
const human=new Human_player()
const computer=new Computer_player()
play(game,human,computer)