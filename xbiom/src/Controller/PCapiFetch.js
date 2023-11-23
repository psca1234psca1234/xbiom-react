

export const fetchData = async  (url, options = {}) => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
    // You might want to throw the error here to handle it outside this function
    throw error;
  }




    // try {
    //   const response =  fetch(url, options);
    //   if (!response.ok) {
    //     throw new Error(`Error: ${response.status} - ${response.statusText}`);
    //   }
    //   return response.text();
    // } catch (error) {
    //   // Handle or log the error as per your app's requirements
    //   console.error('Fetch Error:', error);
    //   throw error;
    // }
  };
  
  