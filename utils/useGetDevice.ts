const useGetDevice = async (ID: number) => {
  const response = await fetch(`http://localhost:3000/api/${ID}`, {
    next: {
      tags: [`device-${ID}`],
    },
  });
  const data = await response.json();
  return data;
};

export default useGetDevice;
