// interface is a type
interface Summarize {
   summary(): string
}

const wtFellow = {
    name: 'Sindiswa Toli',
    email: 'sindiswa.toli@wtf.org',
    country: 'Nigeria',
    year: new Date,
    isConsistent: false,
    summary() {
       return `${this.name} is a Women Techsters Fellow of class ${this.year}. She is from ${this.country}. This program is an amazing one!`
    }
}

const drink = {
    color: 'black',
    carbonated: true,
    sugar: 12,
    summary() {
       return `My drink has ${this.sugar} cubes of sugar. I want to stop taking it, but I am addicted to it. :_:`
    }
}

const logSummary = (summary: Summarize) => {
    console.log(summary.summary())
}


logSummary(wtFellow);
logSummary(drink);