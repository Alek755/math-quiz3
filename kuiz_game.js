function Send() {
    number1 = document.getElementById("Number_Input_1").value;
    number2 = document.getElementById("Number_Input_2").value;
    answer = parseInt(number1) * parseInt(number2);

    Multiplication_Sentence = "<h4>" + number1 + "X" + number2 + "</h4>";
    Input_Box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = Multiplication_Sentence + Input_Box + check_button;

    document.getElementById("Output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}