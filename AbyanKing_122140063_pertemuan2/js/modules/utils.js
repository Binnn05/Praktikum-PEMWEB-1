export const formatTime = async (isoString) => {
    await delay(200); 
    const date = new Date(isoString);
    return date.toLocaleString(); 
  };
  
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  