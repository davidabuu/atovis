//Get Local Storage
export const storeInLocalStorage = (name, value) => {
  localStorage.setItem(name, value);
};
export const getFromLocalStorage = (value) => {
    localStorage.getItem(value)
}