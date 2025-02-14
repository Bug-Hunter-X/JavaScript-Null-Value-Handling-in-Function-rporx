# JavaScript Null Value Handling

This repository demonstrates a common JavaScript error related to null value handling and shows how to improve it.

## Bug Description
The `foo` function correctly handles `null` values. However, it does not handle `undefined` values, which can lead to unexpected results or errors.  This improved version addresses this issue.

## Solution
The solution adds a check for `undefined` values as well, ensuring that the function behaves predictably regardless of whether the input is null or undefined.