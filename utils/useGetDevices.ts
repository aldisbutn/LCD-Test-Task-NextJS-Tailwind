const useGetDevices = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/devices', {
      next: {
        tags: ['devices'],
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default useGetDevices;
