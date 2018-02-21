interface IPerson {
    Id: number;
    PersonName: string;
    HobbyId: number;
}

function PersonLabel (labelledObj: IPerson) {
    console.log(labelledObj.PersonName);
}
