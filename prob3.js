var peoplesList=[{firstName:"Jimmy",lastName:"Page",age:"62",zipcode:"00821"}];

peoplesList.push({firstName: "Rick",lastName: "Nielsen",age:"57",zipcode:"61016"});

peoplesList.push({firstName: "Jimi",lastName: "Hendrix",age:"58",zipcode:"90001"});

peoplesList.push({firstName: "Lemmy",lastName: "Kilmister",age:"57",zipcode:"21120"});

peoplesList[2].famousSong="Purple Haze";

peoplesList[0].getBandandZip= function () {
    alert("led zeplin");
    return ("led zeplin"+this.zipcode)

};



