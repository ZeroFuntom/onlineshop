interface IHobby {
    Id: number;
    HobbyName: string;
}

function HobbyLabel(labelledObj: IHobby) {
    console.log(labelledObj.HobbyName);
}
