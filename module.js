let i=0;
function add(){
    i++
    console.log("after add",i)
}
function sub(){
    i--
    console.log("after sub",i)
}
module.exports= {add,sub}