
const assert = require('assert');

const isValid = (text) => {
    return typeof text === 'string' && text.trim().length > 0;
};

// Test cases
assert.strictEqual(isValid("Good Morning"), true);
assert.strictEqual(isValid(""), false);
assert.strictEqual(isValid("   "), false);

console.log("All tests passed!");
