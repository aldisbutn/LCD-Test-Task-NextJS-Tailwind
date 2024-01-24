const useGetDevice = async (ID: number) => {
  try {
    const response = await fetch(`http://localhost:3000/api/devices/${ID}`, {
      next: {
        tags: [`device-${ID}`],
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default useGetDevice;
