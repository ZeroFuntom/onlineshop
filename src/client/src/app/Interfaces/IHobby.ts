interface IHobby {
    label: string;
}

function HobbyLabel(labelledObj: IHobby) {
    console.log(labelledObj.label);
}

let HobbyObj = {size: 10, label: 'My Hobby'};
HobbyLabel(HobbyObj);
