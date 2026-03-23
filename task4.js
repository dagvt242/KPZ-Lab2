class Virus {
    constructor(weight, age, name, species) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = [];
    }

    addChild(childVirus) {
        this.children.push(childVirus);
    }

    clone() {
        const clonedVirus = new Virus(this.weight, this.age, this.name, this.species);
        clonedVirus.children = this.children.map(child => child.clone());

        return clonedVirus;
    }

    printFamilyTree(level = 0) {
        const indent = "  ".repeat(level);
        console.log(`${indent}- ${this.name} (${this.species}) | Вік: ${this.age}, Вага: ${this.weight}`);

        for (const child of this.children) {
            child.printFamilyTree(level + 1);
        }
    }
}

function main() {
    console.log("Створюємо сім'ю вірусів:");

    const grandParentVirus = new Virus(0.5, 10, "Alpha", "Covid-19");

    const child1 = new Virus(0.2, 5, "Beta", "Covid-19");
    const child2 = new Virus(0.3, 6, "Gamma", "Covid-19");

    const grandChild1 = new Virus(0.1, 1, "Delta", "Covid-19");
    const grandChild2 = new Virus(0.1, 2, "Omicron", "Covid-19");

    child1.addChild(grandChild1);
    child1.addChild(grandChild2);

    grandParentVirus.addChild(child1);
    grandParentVirus.addChild(child2);

    console.log("Оригінальний вірус та його нащадки:");
    grandParentVirus.printFamilyTree();

    console.log("\nКлонуємо прабатька:");
    const clonedGrandParent = grandParentVirus.clone();

    clonedGrandParent.name = "Клон_Alpha";
    clonedGrandParent.children[0].children[0].name = "Клон_Delta";

    console.log("\nКлон:");
    clonedGrandParent.printFamilyTree();

    console.log("\nОригінал:");
    grandParentVirus.printFamilyTree();

    console.log("\nПеревірка: Якщо оригінал не змінився після модифікації клону, глибоке клонування працює!");
}

main();