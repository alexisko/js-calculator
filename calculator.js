/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var memory, total = 0;
  var calculator = {

    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
    load: function(num) {
      if(typeof num === "number") {
        total = num;
        return total;
      }
      return "Error: thats not a number, try again!\n";
    },

    /**
     * Return the value of `total`
     * @return { Number }
     */
    getTotal: function() {
      return total;
    }
  };

  return calculator;
}

  


  


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

