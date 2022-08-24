function result(){
    var score = 0;

    // QUESTION 1

    if (document.getElementById("correct1").checked)
    {
        score ++;
        document.getElementById("correct1").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer1]");
        correct.style.color = 'green';

        var radio = document.getElementsByName("question1");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question1"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 2
    
    if (document.getElementById("correct2").checked)
    {
        score ++;
        document.getElementById("correct2").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer2");
        correct.style.color = 'green';

        var radio=document.getElementsByName("question2");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question2"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 3

    if (document.getElementById("correct3").checked)
    {
        score ++;
        document.getElementById("correct3").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer3]");
        correct.style.color = 'green';

        var radio = document.getElementsByName("question3");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question3"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 4
    
    if (document.getElementById("correct4").checked)
    {
        score ++;
        document.getElementById("correct4").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer4]");
        correct.style.color = 'green';

        var radio=document.getElementsByName("question4");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question4"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 5

    if (document.getElementById("correct5").checked)
    {
        score ++;
        document.getElementById("correct5").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer5]");
        correct.style.color = 'green';

        var radio = document.getElementsByName("question5");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question5"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 6
    
    if (document.getElementById("correct6").checked)
    {
        score ++;
        document.getElementById("correct6").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer6]");
        correct.style.color = 'green';

        var radio=document.getElementsByName("question6");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question6"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 7
    
    if (document.getElementById("correct7").checked)
    {
        score ++;
        document.getElementById("correct7").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer7]");
        correct.style.color = 'green';

        var radio=document.getElementsByName("question7");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question7"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 8

    if (document.getElementById("correct8").checked)
    {
        score ++;
        document.getElementById("correct8").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer8]");
        correct.style.color = 'green';

        var radio = document.getElementsByName("question8");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question8"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 9

    if (document.getElementById("correct9").checked)
    {
        score ++;
        document.getElementById("correct9").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer9]");
        correct.style.color = 'green';

        var radio = document.getElementsByName("question9");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question9"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }

    // QUESTION 10
    
    if (document.getElementById("correct10").checked)
    {
        score ++;
        document.getElementById("correct10").style.accentColor="green";
        var correct = document.querySelector("label[for=correctanswer10]");
        correct.style.color = 'green';

        var radio=document.getElementsByName("question10");
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    else {
        var radio=document.querySelectorAll('[name="question10"]');
        var len = radio.length;
        for(var i = 0; i < len; i++)
        {
            radio[i].disabled = true;
        }
    }
    
    document.getElementById("result").innerHTML = ("You scored: " + String(score) + " out of 10");
    document.getElementById("tryagain").innerHTML = '<button class="tryagain" onclick="reload()">Try Again</button>';
   
    if (score === 10)
    {
        document.getElementById("praise").innerHTML = ("All correct - well done!");
    }
}

function reload() {
    location.reload();
}

