// Uppercase const?
// importance: 4
// Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// Here we have a constant birthday for the date, and also the age constant.

// The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const AGE = someCode(BIRTHDAY); // make age uppercase?






/* answer: 
uppercase for BIRTHDAY since it is a constant aka immutable
lowercase for age because it is not constant and can therefore change  */