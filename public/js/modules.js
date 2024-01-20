// a random choice based function
function chooseRandom(aray=[]){
    const random_num=Math.random()*10
    const factor=10/aray.length
    for(let i=0;i<aray.length;i++){
        if((i+1)*factor>=random_num){
            return aray[i]
        }
    }
}
// module.exports=chooseRandom
export{chooseRandom}