const useGetDevices = async () => {
  const response = await fetch('http://localhost:3000/api/', {
    next: {
      tags: ['devices'],
    },
  });
  const data = await response.json();
  return data;
};

export default useGetDevices;
