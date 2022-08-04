export const createRoom = (topic,link) =>{
    var allCurrentRooms = getAllRooms();
    if (allCurrentRooms != null){
        allCurrentRooms.push(topic,link);
        localStorage.setItem('rooms',JSON.stringify(allCurrentRooms));    
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
// export const deleteRoom = (topic) =>{
//     var myRooms = getAllRooms();
//     var fixedRooms = [...myRooms];
//     var i;
//     var indxToDelete;
//     // iterate just over the topics indx [0,2,4,6]
//     for (i = 0;i < myRooms.length; i+=2){
//         if (myRooms[i] === topic){
//             indxToDelete = i;
//             console.log(`INDICE: ${i}`);
//             fixedRooms.splice(i,2);
//         }
//     }
//     localStorage.setItem('rooms',JSON.stringify(fixedRooms))
// }
export const ShowRoomsOnConsole = () =>{
    console.log(getAllRooms());
}
export const createDatabaseIfNotExists = () =>{
    const newEmptyRoom = [];
    if (getAllRooms() === null){
        console.log("Creating new object Rooms");
        localStorage.setItem('rooms',JSON.stringify(newEmptyRoom));
    }else{
        console.log("Object Rooms already created");
    }
}
// createDatabaseIfNotExists();