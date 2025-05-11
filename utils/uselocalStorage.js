
const uselocalStorage = () => {
    function getData(key) {
       return window.localStorage.getItem(key);
    }
    function setData(key,value) {
      window.localStorage.setItem(key,value);
    }
    return [getData,setData];
}

export default uselocalStorage;