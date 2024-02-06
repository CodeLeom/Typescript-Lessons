// Class is a blueprint for creating an object (values, functions to complement the object)
// Modifiers: ==> public: it can be called from anywhere
// ==> private : it means only the methods in the class can only access it
// ==> protected : can only be called by methods in the class or child class

class Fellow {
    name: string = 'Anob-Ejah Takon'
    
    constructor(name: string){
        this.name = name
    }

     acceptance(): void {
        console.log('Yeepee!!! I have been accepted.')
    }

    engagement(): void{
        console.log('We have been assigned a facilitator.')
    }
}

const fellow = new Fellow('Barira')
fellow.name

class wtFellow extends Fellow {
    
}
