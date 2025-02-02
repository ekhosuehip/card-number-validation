// Function to validate credit card number
function validateCreditCard(cardNumber) {
    const cardPatterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        verve: /^((5060|5078|6500)[0-9]{12,15})$/
    };

    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            return `Valid ${cardType} card number.`;
        }
    }
    return "Invalid card number.";
}

// Test Cases
console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5500000000000004")); // MasterCard
console.log(validateCreditCard("5060990000000000000")); // Verve (Valid 19-digit Verve card)
console.log(validateCreditCard("5078990000000000")); // Verve
console.log(validateCreditCard("6500990000000000")); // Verve
