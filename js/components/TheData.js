function getData(cb) {

    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        
        cb(data);
        
    })
    .catch(error => console.error(error));
}

export { getData }