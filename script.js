$(document).ready(function() {
    //Adding Inputted Numbers
    $(".number").click(function() {
        // if it does not have a class not
        if (!$(this).hasClass("not")) {
            // nested if: if the inputted number is 0
            if ($("#pre-screen").val() == 0)
            // return number
                $("#pre-screen").val($(this).text());
            else
            // add inputted numbers
                $("#pre-screen").val($(
                  "#pre-screen").val() + $(this).text());
        }
    });
    //Delete
    $('#backspace').click(function() {
        let value = $("#pre-screen").val();
        // if value whether decimal or whole number is not equal to zero and let is not 1
        if (!(parseInt(parseFloat(value)) == 0 && value.length == 1))
        // slice it by -1 (from the back)
            $("#pre-screen").val(value.slice(0, value.length - 1));
            // if value is 1, equate it to zero, on click!
        if (value.length == 1)
            $("#pre-screen").val("0");
    });
});
// All Clear
// On click, let values and solutions be equated to zero.
$("#clear").click(function() {
    $("#pre-screen").val("0");
    $("#screen").val("0");
});
Evaluation
$("#equal").click(function() {
    let result;
    //Check for syntax error
    try {
        result = (eval(($("#pre-screen").val())));
    } catch (error) {
        // if the error is syntaxError, alert!
        if (error instanceof SyntaxError) {
            alert("Error! Resetting values.");
            $("#pre-screen").val("0");
            $("#screen").val("0");
        }
        // if error is typeError, alert!
        if (error instanceof TypeError) {
            alert("Error! Resetting values.");
            $("#pre-screen").val("0");
            $("#screen").val("0");
        }
    }
    // Append if the result is correct
    $("#screen").val(result);
    $("#pre-screen").val("0");
});
// if you click on number not after clicking on equal
// let solution display on inputted numbers then whatever you input.
// adding solution to other inputted numbers and then performing the action






























// let preScreen = document.getElementById("pre-screen");
// let screenItem = ""
// let screen = document.getElementById("screen");
// let backspace = document.getElementById("backspace")
// let buttons = Array.from(document.getElementsByClassName("button"));
// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         screen.innerText = "";
//         break;
//       case "":
//         screen.innerText = screen.innerText.slice(0, -1);
//         break;
//       case "=":
//         // try {
//             screen.innerText = eval(screen.innerText);
//         // } catch {
//         //     screen.innerText = "invalid!"
//         // }
//         break;
//       default:
//         screen.innerText  += e.target.innerText;
//     }
//   });
// //   backspace.addEventListener('click', ()=>{
// //     // screen.innerHTML  += e.target.innerHTML;
// //     screen.innerHTML= screen.substring()
// //   })
// });
