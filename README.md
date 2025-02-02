# 💳 Credit Card Validation

This JavaScript program validates different types of credit card numbers using **Regular Expressions (RegEx)**.

## 🛠 How It Works

1. **Define RegEx Patterns**  
   The program defines an object `cardPatterns` that stores validation rules for:
   - **Visa**: Starts with `4`, has 13 or 16 digits.
   - **MasterCard**: Starts with `51-55`, has 16 digits.
   - **Verve**: Starts with `5060`, `5078`, or `6500`, has 16-19 digits.

2. **Loop Through Patterns**  
   - The function iterates through `cardPatterns`, checking if `cardNumber` matches any pattern.
   - If a match is found, it returns `"Valid [CardType] card number."`
   - If no match is found, it returns `"Invalid card number."`

---

## 📜 Code Breakdown

### 🔹 Define Credit Card Patterns

- Each key represents a **card type**.
- The **values (RegEx)** define valid formats.

### 🔹 Loop Through the Patterns

- Iterates through `cardPatterns`.
- Uses `.test()` method to check if `cardNumber` matches a pattern.
- If no pattern matches, returns `"Invalid card number."`

---

## 📝 Test Cases & Expected Output

```javascript
console.log(validateCreditCard("4111111111111111")); // Visa
console.log(validateCreditCard("5500000000000004")); // MasterCard
console.log(validateCreditCard("5060990000000000000")); // Verve (Valid 19-digit Verve card)
console.log(validateCreditCard("5078990000000000")); // Verve
console.log(validateCreditCard("6500990000000000")); // Verve
```

| **Card Number**       | **Expected Output**            |
|----------------------|------------------------------|
| `"4111111111111111"` | ✅ Valid Visa card number    |
| `"5500000000000004"` | ✅ Valid MasterCard number   |
| `"5060990000000000000"` | ✅ Valid Verve card number  |
| `"5078990000000000"` | ✅ Valid Verve card number  |
| `"6500990000000000"` | ✅ Valid Verve card number  |

---

## 🚀 Summary
- Uses **RegEx** to validate credit card numbers.
- Supports **Visa, MasterCard and Verve** cards.
- Returns `"Valid [CardType] card number."` if matched, otherwise `"Invalid card number."`
