class Building {
    constructor(name, builtIn) {
        this.name = name;
        this.builtIn = builtIn;
    }

    calcAge() {
        return new Date().getFullYear() - this.builtIn;
    }
}

class Park extends Building {
    constructor(name, builtIn, numberOfTrees, area) {
        super(name, builtIn);
        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    treeDensity() {
        const density = this.numberOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square kilometer.`);
    }

    hasMoreThan1000() {
        if (this.numberOfTrees > 1000) {
            return true;
        } else {
            return false;
        };
    }
}

class Street extends Building {
    constructor(name, builtIn, streetLength, size = 3) {
        super(name, builtIn);
        this.streetLength = streetLength;
        this.size = size;
    }

    streetClassification() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.builtIn}, is a ${classification.get(this.size)} street.`);
    }
}

// Creating the parks
const parkArray = [new Park('Green Park', 1945, 975, 1120),
                    new Park('National Park', 1968, 3200, 1560),
                    new Park('Oak Park', 1920, 800, 700)];

// Creating the streets
const streetArray = [new Street('Ocean Avenue', 1999, 3.6, 4),
                        new Street('Evergreen Street', 2008, 2.125, 2),
                        new Street('4th Street', 2015, 3.2),
                        new Street('Sunset Boulevard', 1982, 4.5, 5)];

console.log('----PARKS REPORT----');
// Average age of all parks
let totalAge = 0;
parkArray.forEach(element => totalAge += element.calcAge());

console.log(`Our ${parkArray.length} parks have an average age of ${totalAge / parkArray.length} years.`);

// Tree density
parkArray.forEach(element => element.treeDensity());

// Has more than one thousand trees
parkArray.forEach(element => {
    if (element.numberOfTrees > 1000) {
        console.log(`${element.name} has more than 1000 trees.`);
    };
});

console.log('----STREETS REPORT----');
//Total length of all streets and average length
let totalLength = 0;
streetArray.forEach(element => {
    totalLength += element.streetLength;
});
console.log(`Our ${streetArray.length} streets have a total length of ${totalLength} km, with an average of ${totalLength / streetArray.length} km.`);

// Streets info
streetArray.forEach(element => {
    element.streetClassification();
});