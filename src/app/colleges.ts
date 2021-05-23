export class Colleges {
    name: string;
    year_founded:number;
    state:string;
    city:string;
    facilities:string;

    constructor(name,year_founded,state,city,facilities){
        this.name=name;
        this.year_founded=year_founded;
        this.state=state;
        this.city=city;
        this.facilities=facilities;
    }
}
