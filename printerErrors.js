function printerError(s) {
    // your code
  // Calculate the total length of the string
    const totalLength = s.length;

   // Count characters that are errors (characters not within 'a' to 'm')
    const errorCount = s.split('').filter(char => char > 'm').length;

 // Return the error rate
    return `${errorCount}/${totalLength}`;
}