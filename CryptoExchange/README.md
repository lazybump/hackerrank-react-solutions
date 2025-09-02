# Crypto Exchange

This task was to build an app that estimates the number of cryptocurrency coins a user can receive based on an entered amount of fiat currency.

## Task Requirements

1. Fields and Display
   - Input field: Allows entry of the amount to be exchanged.
   - Table: Displays "Exchange Rate" and "Number of Coins" for each cryptocurrency.
2. User Interactions
   - Users input an amount within their available balance.
   - Amount is mandatory, ranging from $0.01 to the available balance.
   - If invalid, show an error message.
   - By default, the input field is empty with no error message and "Number of Coins" as 0.00000000.
   - Table updates dynamically as the amount is modified.
3. Conversion Calculation - "Number of Coins" = (Amount \* Exchange Rate), rounded to 8 decimal places. - Invalid amounts display "n/a" in the "Number of Coins" column.
   Error Messages - Emtpy input: "Amount cannot be empty". - Amount < 0.0l: "Amount cannot be less than 0.01". - Amount > available balance: "Amount cannot exceed available balance".
