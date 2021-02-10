class Calculator {

    // This gets the display for the document //
    display = document.getElementsByClassName("screen")[0];

    firstNumber = null;

    operation = null;
  
    clear() {
        // Clears the display //
        this.display.value = "0";
    }
  
    enter(number) {
      
    }
  
    storeNumber(number) {

    }
  
    storeOperator(operator) {

    }
  
    numberHandle(number) {
        // Checks to see if the display already has a 0 or NaN and erases it //
        if(this.display.value === "0" || this.display.value === "NaN")
            this.display.value = "";
        // Adds the inputted number to the display as a string //
        this.display.value += String(number)
    }
  
    operatorHandle(operator) {
        this.operation = operator;
        this.display.value += String(operator);
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
                // Send the value of the button pressed to the function numberHandle //
                this.numberHandle(target.value);
            }

            // Else if you clicked a button with class "operator"
            else if(target.classList.contains("operator")) {
                this.firstNumber = this.display.value;
                this.operatorHandle(target.value);
            }
            
            // Else if you clicked a button with class "decimal"
            else if(target.classList.contains("decimal")) {
                console.log("DECIMAL WAS PRESSED!")
            }
            // Else if you clicked a button with class "clear"
            else if(target.classList.contains("clear")) {
                // Run the clear function //
                this.clear()
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