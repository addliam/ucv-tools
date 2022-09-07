export const createRoom = (topic,link) =>{
    const MAX_STR_LENGTH = 32; 
    const VALID_LINK_START = "https://zoom.us/j/";
    if (link.startsWith("zoom.us/j/")){
        let roomCodeString="";
        // get roomCode
        for (let character of link){
            let characterInteger = parseInt(character);                    
            if (!isNaN(characterInteger)){
                roomCodeString += `${characterInteger}`;
            }
        }
        link = `${VALID_LINK_START}${roomCodeString}`;
    }
    const isValidLength = (str) => {
        return (str.length <= MAX_STR_LENGTH && str.length > 0)
    }
    var allCurrentRooms = getAllRooms();
    if (allCurrentRooms != null && isValidLength(topic)){
        allCurrentRooms.push(topic,link);
        localStorage.setItem('rooms',JSON.stringify(allCurrentRooms));
        // 0 means success
        return 0;    
    }else{
        // 1 means failure
        return 1;
    }
}
export const getAllRooms = () =>{
    return (JSON.parse(localStorage.getItem('rooms')))
}
export const deleteRoomByID = (topicId) => {
    var myRooms = getAllRooms();
    var fixedRooms = [...myRooms];
    const realIndex = topicId*2;
    // check if index is out of range
    if (realIndex <= myRooms.length){
        // At position realIndex, remove 2 items
        fixedRooms.splice(realIndex,2);
    }else{
        console.log("Index out of range");
    }
    localStorage.setItem('rooms',JSON.stringify(fixedRooms))
}
export const ShowRoomsOnConsole = () =>{
    console.log(getAllRooms());
}
export const createDatabaseIfNotExists = () =>{
    const newEmptyRoom = [];
    if (getAllRooms() === null){
        // console.log("Creating new object Rooms");
        localStorage.setItem('rooms',JSON.stringify(newEmptyRoom));
    }else{
        console.log("Object Rooms already created");
    }
}
// createDatabaseIfNotExists();