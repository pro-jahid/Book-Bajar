const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList = (id) =>{
    const storedLIst = getStoredReadList();
    if(storedLIst.includes(id)){
        console.log(id, 'already exists in the read list');
        
    }
    else{

        storedLIst.push(id)
        const storedListStr = JSON.stringify(storedLIst);
        localStorage.setItem('read-list',storedListStr)
    }
}


const getStoredWishList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) =>{
    const storedLIst = getStoredWishList();
    if(storedLIst.includes(id)){
        console.log(id, 'already exists in the wish list');
        
    }
    else{

        storedLIst.push(id)
        const storedListStr = JSON.stringify(storedLIst);
        localStorage.setItem('wish-list',storedListStr)
    }
}

export {addToStoredReadList, addToStoredWishList}