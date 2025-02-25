async function sayJoke(apiUrl, jokeId){
  try{
//     fetching the joke from the given API
    const response = await fetch(apiUrl); 
    const data = await response.json()
    
//     checking if the data has the expected shape
    if (!data.jokes || !Array.isArray(data.jokes)){
      throw new Error(`No jokes at url: ${apiUrl}`)
    } 
    
    const joke = data.jokes.find(j => j.id === jokeId)
    
    if(!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }
    return {
      saySetup: () => joke.setup,
      sayPunchLine: () => joke.punchLine
    };
  } catch (error) {
    console.error('Error:', error.message);
    throw error
  }
  
}
​
​
​
​