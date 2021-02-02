let playerOne = true;
let clicked = false
let a1 = [];
let a2 = [];
let pOne = document.getElementById("p1");
let pTwo = document.getElementById("p2");
let box = document.getElementsByClassName("box");

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [7, 8, 9]
let d = [1, 4, 7];
let e = [2, 5, 8];
let f = [3, 6, 9];
let g = [7, 5, 3];
let h = [1, 5, 9];


function game(clicked_id) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    

    document.getElementsByClassName("box").onclick = false;
    if (playerOne == true) {
        document.getElementsByClassName("box")[clicked_id-1].style.backgroundColor = "#919191"; 
        document.getElementsByClassName("box")[clicked_id-1].innerHTML = "X";
        document.getElementsByClassName("box")[clicked_id-1].onclick = null;
         
        arr.splice(-0, 1, clicked_id)
        console.log(arr);
        playerOne = false;


        a1.push(clicked_id);

        document.getElementById("p2").style.flex = "50%";
        document.getElementById("p1").style.flex = "0%";

        filterOne();
    }
    else if (!playerOne) {
        document.getElementsByClassName("box")[clicked_id-1].style.backgroundColor = "#919191";
        document.getElementsByClassName("box")[clicked_id-1].innerHTML = "O";
        document.getElementsByClassName("box")[clicked_id-1].onclick = null;
        
        playerOne = true;
        a2.push(clicked_id);

        document.getElementById("p2").style.flex = "0%";
        document.getElementById("p1").style.flex = "50%";

        filterTwo();
    }
    return playerOne, a2, a1;
}

function empty() {
    
    
}
function filterOne() {
    
    if(a.sort().join(',') == a1.sort().join(',')){
        console.log('APlayer 1 Won!');
        document.getElementsByClassName(box).onclick = empty();
    
    }

    /*if(a.sort().join(',') == a1.sort().join(',')){
        console.log('APlayer 1 Won!');
        box.onclick = null;
        player1();
    }*/

    else if (b.sort().join(',') == a1.sort().join(',')){
        console.log('BPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (c.sort().join(',') == a1.sort().join(',')){
        console.log('CPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (d.sort().join(',') == a1.sort().join(',')){
        console.log('DPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (e.sort().join(',') == a1.sort().join(',')){
        console.log('EPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (f.sort().join(',') == a1.sort().join(',')){
        console.log('FPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (g.sort().join(',') == a1.sort().join(',')){
        console.log('GPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (h.sort().join(',') == a1.sort().join(',')){
        console.log('HPlayer 1 Won!');
        document.getElementsByClassName("box").onclick = null;
    }
    else if (a1.length > 4){
        console.log('Draw!');
        document.getElementsByClassName("box").onclick = null;
    }
    else{
        console.log("nothing")
    }
}

function filterTwo() {
    
    if(a.sort().join(',') == a2.sort().join(',')){
        console.log('same members Player One Won!');
    }
    else if (b.sort().join(',') == a2.sort().join(',')){
        console.log('same members Player One Won!');
    }
    else if (c.sort().join(',') == a2.sort().join(',')){
        console.log('same members Player One Won!');
    }
    else if (d.sort().join(',') == a2.sort().join(',')){
        
    }
    else if (e.sort().join(',') == a2.sort().join(',')){
        
    }
    else if (f.sort().join(',') == a2.sort().join(',')){
        
    }
    else if (g.sort().join(',') == a2.sort().join(',')){
        
    }
    else if (h.sort().join(',') == a2.sort().join(',')){
        alert('same members Player One Won!');
    }
    else{
        console.log("nothing")
    }
}

function player1(){
    document.getElementsByClassName("box").onclick = null;
}

