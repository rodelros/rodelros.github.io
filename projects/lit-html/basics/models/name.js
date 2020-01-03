class Name {
    constructor(firstNames, middleName, lastName, prefix, suffix) {
        this.firstNames = [];
        this.middleName;
        this.lastName;
        this.prefix;
        this.suffix;
    }

    get firstName(){ 
        return this.firstNames.length > 0 ? this.firstNames[0] : '';
    }

    set firstName(firstName){
        this.firstNames.length > 0 ? this.firstNames[0] = firstName : this.firstNames.push(firstName);
    }

    addFirstName(firstName){
        this.firstNames.push(firstName);
    }
}

export { Name };