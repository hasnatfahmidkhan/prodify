export const loadStoredData = () => {
  try {
    const storedData = localStorage.getItem("installApp");
    return storedData ? JSON.parse(storedData) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const saveAppData = (id) => {
  const storedids = loadStoredData();

  try {
    const isExits = storedids.find((storedId) => storedId === id);
    if (isExits) return;
    const updatedList = [...storedids, id];
    localStorage.setItem("installApp", JSON.stringify(updatedList));
  } catch (er) {
    console.log(er);
  }
};

export const removeAppData = (id) => {
  const storedids = loadStoredData();

  try {
    const updatedList = storedids.filter((storedId) => storedId !== id);
    localStorage.setItem("installApp", JSON.stringify(updatedList));
  } catch (er) {
    console.log(er);
  }
};
