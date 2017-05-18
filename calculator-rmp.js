/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var _memory = 0, _total = 0;

    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
     function load() {
      if(typeof num === "number") {
        _total = num;
        return _total;
      }
      throw new Error("thats not a number, try again!\n");
    }

    /**
     * Return the value of `total`
     * @return { Number }
     */
     function getTotal() {
      return _total;
     }

    /**
     * Sums the value passed in with `total`
     * @param { Number } x
     */
     function add(num) {
      if(typeof num === "number") {
        _total += num;
        return _total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Subtracts the value passed in from `total`
     * @param  { Number } x
     */
     function subtract() {
      if(typeof num === "number") {
        _total -= num;
        return _total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Multiplies the value by `total`
     * @param  { Number } x
     */
     function multiply(num) {
      if(typeof num === "number") {
        _total *= num;
        return _total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Divides the value passing in by `total`
     * @param  { Number } x
     */
     function divide(num) {
      if(typeof num === "number") {
        _total /= num;
        return _total;
      }
      throw new Error("thats not a number, try again!\n");
     }

    /**
     * Return the value stored at `memory`
     * @return { Number }
     */
     function recallMemory() {
      return _memory;
     }

    /**
     * Stores the value of `total` to `memory`
     */
     function saveMemory() {
      _memory = total;
     }

    /**
     * Clear the value stored at `memory`
     */
     function clearMemory() {
      _memory = 0;
     }

    /**
     * Validation
     */

  return {
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