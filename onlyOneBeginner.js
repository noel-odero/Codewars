function check(a, x) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        return true;  // Return true if x is found
      }
    }
    return false;     // Return false if the loop completes and x wasn't found
  }