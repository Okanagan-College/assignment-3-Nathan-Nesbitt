class Calculator {
  
    clear() {
      
    }
  
    enter(number) {
      
    }
  
    storeNumber(number) {

    }
  
    storeOperator(operator) {

    }
  
    numberHandle(number) {
      
    }
  
    operatorHandle(operator) {
      
    }
  
    calculateValue(number) {
  
    }
  
    decimalHandle() {

    }
  
    calculate(){
        // Anytime someone clicks, run the code inside
        document.addEventListener("click", (event) => {
            const { target } = event;
            
            // If the button clicked is of class "enter" run this code
            if(target.classList.contains("enter")) {
                console.log("ENTER WAS PRESSED!")
            }

            // Else if you clicked a button with class "number"
            else if(target.classList.contains("number")) {
                console.log("NUMBER WAS PRESSED!")
            }

            // Else if you clicked a button with class "operator"
            else if(target.classList.contains("operator")) {
                console.log("OPERATOR WAS PRESSED!")
            }
            
            // Else if you clicked a button with class "decimal"
            else if(target.classList.contains("decimal")) {
                console.log("DECIMAL WAS PRESSED!")
            }
            // Else if you clicked a button with class "clear"
            else if(target.classList.contains("clear")) {
                console.log("CLEAR WAS PRESSED!")
            }
        })
    }
}

// Handle the document loading and generating the code for the calculator //
document.addEventListener("DOMContentLoaded", () => {

    // Creating an instance of an Calculator object //
    var calculator = new Calculator();

    // Run the main calculator function! //
    calculator.calculate();

});