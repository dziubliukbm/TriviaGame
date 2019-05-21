document.getElementById("start").addEventListener('click', startGame)
        function startGame() {
            document.getElementById("first_pg").style.display = "none";
            document.getElementById("second_pg").style.display = "block";
            var time = 41;
            var intervalId;
            function run() {

                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000)
            }
            run()
            
            function decrement() {
                time--;
                if (time === 0) {
                    clearInterval(intervalId);
                    endGame();
                }
                document.getElementById("timer_field").innerHTML = (time)

            }
        }
        document.getElementById("btn2").addEventListener('click', endGame)
        function endGame() {

            checkAnswers()
            document.getElementById("second_pg").style.display = "none";
            document.getElementById("end_page").style.display = "block";
        }


        function checkAnswers() {
            //debugger;
            var question1 = document.getElementsByClassName("question1")
            var question2 = document.getElementsByClassName("question2")
            var question3 = document.getElementsByClassName("question3")
            var question4 = document.getElementsByClassName("question4")
            var correct = 0;
            var incorrect = 0;
            var unanswered = 0;
            var unchecked = 0;

           
            //debugger;
            

            for (var i = 0; i < question1.length; i++) {
                if (question1.item(i).value === "1" && question1.item(i).checked) {
                    correct++
                } else if (question1.item(i).value === "0" && question1.item(i).checked) {
                    incorrect++
                } else {question1.item(i).unchecked
                unchecked++
                }
            }
            
            if (unchecked >= 4) {
                unanswered++
            }
            var unchecked = 0;
            for (var i = 0; i < question1.length; i++) {
                if (question2.item(i).value === "1" && question2.item(i).checked) {
                    correct++
                } else if (question2.item(i).value === "0" && question2.item(i).checked) {
                    incorrect++
                } else {question1.item(i).unchecked
                    unchecked++  
                }
            }
            if (unchecked >= 4) {
                unanswered++
                }
                var unchecked = 0;
            for (var i = 0; i < question1.length; i++) {
                if (question3.item(i).value === "1" && question3.item(i).checked) {
                    correct++
                } else if (question3.item(i).value === "0" && question3.item(i).checked) {
                    incorrect++
                } else {question1.item(i).unchecked
                    unchecked++
                }
                if (unchecked >= 4) {
                unanswered++
                }
            }
            var unchecked = 0;
            for (var i = 0; i < question1.length; i++) {
                if (question4.item(i).value === "1" && question4.item(i).checked) {
                    correct++
                } else if (question4.item(i).value === "0" && question4.item(i).checked) {
                    incorrect++
                } else {question1.item(i).unchecked
                    unchecked++  
                }
            }
            if (unchecked >= 4) {
                unanswered++
                }

            document.getElementById("correct").innerText = ("correct: " + correct);
            document.getElementById("incorrect").innerHTML = ("incorrect: " + incorrect);
            document.getElementById("unanswered").innerHTML = ("unanswered: " + unanswered);
        }