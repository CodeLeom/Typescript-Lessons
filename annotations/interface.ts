const wtFellow = {
    name: 'Sindiswa Toli',
    email: 'sindiswa.toli@wtf.org',
    country: 'Nigeria',
    year: 2024,
    isConsistent: false
}

const logFellow = (fellow: {name: string; email: string; country: string; year: number; isConsistent: boolean}) => {
    console.log(`
        ${fellow.name} is a Women Techsters Fellow of ${fellow.year}, her email address is ${fellow.email} but is she consistent? (${fellow.isConsistent})
    `)
}

logFellow(wtFellow);