// In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value. This is where default parameters can help.

// In the past, the general strategy for setting defaults was to test parameter values in the body of the function and assign a value if they are undefined. If in the following example, no value is provided for b in the call, its value would be undefined  when evaluating a*b and the call to multiply would have returned NaN. However, this is caught with the second line in this example:

function multiply(a, b) {
    var b = (typeof b !== 'undefined') ? b : 1;

    return a * b;
}

multiply(5); // 5


// With default parameters in ES6, the check in the function body is no longer necessary. Now, you can simply put 1 as the default value for b in the function head:

function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5
