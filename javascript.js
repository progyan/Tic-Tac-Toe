let restartLite = undefined;
            
            let board = [
                [9, 9, 9],
                [9, 9, 9],
                [9, 9, 9]
            ];
            
            let tac = 'X';
            
            function addTic(el){
                if(el.innerHTML === ''){
                    el.innerHTML = tac;
                    if(tac == 'X'){
                        el.style.color = 'maroon';
                        board[parseInt(el.id.charAt(0)) - 1][parseInt(el.id.charAt(1)) - 1] = 1;
                        checkIfPlayerWins();
                        tac = 'O';
                    }else{
                        el.style.color = 'yellowgreen';
                        board[parseInt(el.id.charAt(0)) - 1][parseInt(el.id.charAt(1)) - 1] = 0;
                        checkIfPlayerWins();
                        tac = 'X';
                    }
                    document.getElementById('display').innerHTML = tac + '\'s turn'
                }
            }
            
            function checkIfPlayerWins(){
               /*********\
                * a b c * 
                * d e f *  
                * g h i *
               \*********/
                
                /////////////////////////////////////
                // abc def ghi adg beh cfi aei ceg //
                /////////////////////////////////////
                
                function eqs(aX, aY, bX, bY, cX, cY){
                    let a = board[aX][aY];
                    let b = board[bX][bY];
                    let c = board[cX][cY];
                    if((a == 0 || a == 1) && (a == b && b == c)){
                        return true;
                    }else{
                        return false;
                    }
                }
                
                let cond = 
                    eqs(0, 0, 0, 1, 0, 2) ||
                    eqs(1, 0, 1, 1, 1, 2) ||
                    eqs(2, 0, 2, 1, 2, 2) ||
                    eqs(0, 0, 1, 0, 2, 0) ||
                    eqs(0, 1, 1, 1, 2, 1) ||
                    eqs(0, 2, 1, 2, 2, 2) ||
                    eqs(0, 0, 1, 1, 2, 2) ||
                    eqs(2, 0, 1, 1, 0, 2);
                
                if(cond){
                    let toe = tac;
                    setTimeout(function(){document.getElementById('display').innerHTML = 'The ' + toe + ' sign win!'}, 1);
                    document.getElementById('11').onclick = '';
                    document.getElementById('12').onclick = '';
                    document.getElementById('13').onclick = '';
                    document.getElementById('21').onclick = '';
                    document.getElementById('22').onclick = '';
                    document.getElementById('23').onclick = '';
                    document.getElementById('31').onclick = '';
                    document.getElementById('32').onclick = '';
                    document.getElementById('33').onclick = '';
                    restartLite = setInterval(restartLight, 1500);
                }
            }
            
            function restartLight(){
                document.getElementById('restart').style.transform = 'scale(1.6)';
                setTimeout(function(){
                    document.getElementById('restart').style.transform = 'scale(1)';
                }, 600);
            }
            
            function restart(){
                /*board = [
                    [9, 9, 9],
                    [9, 9, 9],
                    [9, 9, 9]
                ];*/
                /*for(let i = 0; i < 3; i++){
                    for(let j = 0; j < 3; j++){
                        setTimeout(function(){}, 1)// = '';
                    }
                }*/
                /*document.getElementById('11').innerHTML = '';
                document.getElementById('12').innerHTML = '';
                document.getElementById('13').innerHTML = '';
                document.getElementById('21').innerHTML = '';
                document.getElementById('22').innerHTML = '';
                document.getElementById('23').innerHTML = '';
                document.getElementById('31').innerHTML = '';
                document.getElementById('32').innerHTML = '';
                document.getElementById('33').innerHTML = '';
                document.getElementById('11').onclick = 'addTic(this)';
                document.getElementById('12').onclick = 'addTic(this)';
                document.getElementById('13').onclick = 'addTic(this)';
                document.getElementById('21').onclick = 'addTic(this)';
                document.getElementById('22').onclick = 'addTic(this)';
                document.getElementById('23').onclick = 'addTic(this)';
                document.getElementById('31').onclick = 'addTic(this)';
                document.getElementById('32').onclick = 'addTic(this)';
                document.getElementById('33').onclick = 'addTic(this)';*/
                
                //tac = 'X';
                //document.getElementById('display').innerHTML = 'X\'s turn';
                //clearInterval(restartLite);
                location.reload();
            }