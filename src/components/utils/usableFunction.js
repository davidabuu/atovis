//Get Local Storage
export const storeInLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
export const getFromLocalStorage = (value) => {
    (localStorage.getItem(JSON.parse(value)))
}