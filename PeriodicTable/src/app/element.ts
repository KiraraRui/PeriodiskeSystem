export class Element {

    name: string;
    phase:string;
    color:string;
    symbol: string;
    summary: string;
    category: string;
    appearance: string;
    atomicMass: number;
    density: number;
    period: number;
    number: number;
    melt: number;
    boil: number;

    constructor(name: string, phase: string, color: string, symbol: string, summary: string, category: string, 
    apperarance: string, atomicMass: number, density: number, period: number, number: number, melt: number, boil: number){
    
    this.name = name;
    this.phase = phase;
    this.color = color;
    this.symbol = symbol;
    this.summary = summary;
    this.category = category;
    this.appearance = apperarance;
    this.atomicMass = atomicMass;
    this.density = density;
    this.period = period;
    this.number = number;
    this.melt = melt;
    this.boil = boil;

    }
}
