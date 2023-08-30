# Date Extension

- ## Installation
    1. Import the corresponding file into your webpage or application.
- ## Usage
    1. The new methods are added to the Date prototype. Ensure that you don't have any conflicting functions.
    2. Methods like `addDate` or `addHour` will modify your current object.
    3. The `compareDate` method returns one of three possible values:
       - -1 if your date object is earlier than the one passed as a parameter.
       - 0 if your date object is the same as the parameter.
       - 1 if your date object is later than the parameter.
    4. The `isWeekDay` method returns a true or false value indicating whether your date object falls on a weekday.
    5. The `nextWorkingDay` method returns the date of the next weekday.