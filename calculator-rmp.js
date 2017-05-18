/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var memory = 0, total = 0;

    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
     function load() {
      if(typeof num === "number") {
        total = num;
        return total;
      }
      throw new Error("thats not a number, try again!\n");
    }

    /**
     * Return the value of `total`
     * @return { Number }
     */
     function getTotal() {
      return total;
     }

    /**
     * Sums the value passed in with `total`
     * @param { Number } x
     */
     function add(num) {
      if(typeof num === "number") {
        total += num;
        return total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Subtracts the value passed in from `total`
     * @param  { Number } x
     */
     function subtract() {
      if(typeof num === "number") {
        total -= num;
        return total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Multiplies the value by `total`
     * @param  { Number } x
     */
     function multiply(num) {
      if(typeof num === "number") {
        total *= num;
        return total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Divides the value passing in by `total`
     * @param  { Number } x
     */
     function divide(num) {
      if(typeof num === "number") {
        total /= num;
        return total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Return the value stored at `memory`
     * @return { Number }
     */
     function recallMemory() {
      return memory;
     }

    /**
     * Stores the value of `total` to `memory`
     */
     function saveMemory() {
      memory = total;
     }

    /**
     * Clear the value stored at `memory`
     */
     function clearMemory() {
      memory = 0;
     }

    /**
     * Validation
     */

  return {
      load: load,
      getTotal: getTotal,
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide,
      recallMemory: recallMemory,
      saveMemory: saveMemory,
      clearMemory: clearMemory
  };
}