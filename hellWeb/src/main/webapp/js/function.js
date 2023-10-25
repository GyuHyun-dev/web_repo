        // // 함수선언.
        // function myFunc(std, score = 60){
        //     // if(score == undefined){
        //     //     score = 0;
        //     // }
        //     console.log(`${std} 점수는 ${score}`);
        //     return score; // 리턴이 없으면 nudefined
        // }


        // // 함수 표현식.
        var myFunc = function myFunc(std, score = 60) {
            // if(score == undefined){
            //     score = 0;
            // }
            console.log(`${std} 점수는 ${score}`);
            return score; // 리턴이 없으면 nudefined
        }
        // let myFunc = myFunc(`홍길동`);
        console.log(myFunc(`홍길동`));