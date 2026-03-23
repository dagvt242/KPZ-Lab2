class Subscription {
    constructor(name, monthlyFee, minimumPeriodMonths, features) {
        this.name = name;
        this.monthlyFee = monthlyFee;
        this.minimumPeriodMonths = minimumPeriodMonths;
        this.features = features;
    }
    printDetails() {
        console.log(`[${this.name}] Ціна: ${this.monthlyFee} грн/міс | Мін. період: ${this.minimumPeriodMonths} міс. | Доступ: ${this.features.join(", ")}`);
    }
}

class DomesticSubscription extends Subscription {
    constructor() {
        super("Domestic", 200, 1, ["Національні канали", "Місцеві новини", "Спортивні трансляції"]);
    }
}

class EducationalSubscription extends Subscription {
    constructor() {
        super("Educational", 120, 1, ["Наукові канали", "Документальні фільми", "Лекції та курси"]);
    }
}

class PremiumSubscription extends Subscription {
    constructor() {
        super("Premium", 400, 6, ["Усі канали", "Без реклами"]);
    }
}

class PurchaseChannel {
    createSubscription(type) {
        throw new Error("Метод 'createSubscription()' має бути реалізований у класі-насліднику.");
    }

    orderSubscription(type) {
        const subscription = this.createSubscription(type);

        if (subscription) {
            console.log("-> Підписку успішно оформлено:");
            subscription.printDetails();
        }
        return subscription;
    }
}

class WebSite extends PurchaseChannel {
    createSubscription(type) {
        console.log("Обробка запиту через Веб-сайт. Налаштування онлайн-кабінету...");
        switch(type.toLowerCase()) {
            case 'domestic': return new DomesticSubscription();
            case 'educational': return new EducationalSubscription();
            case 'premium': return new PremiumSubscription();
            default: throw new Error("Невідомий тип підписки для WebSite.");
        }
    }
}

class MobileApp extends PurchaseChannel {
    createSubscription(type) {
        console.log("Обробка запиту через Мобільний додаток. Прив'язка Google Pay/Apple Pay...");
        switch(type.toLowerCase()) {
            case 'domestic': return new DomesticSubscription();
            case 'educational': return new EducationalSubscription();
            case 'premium': return new PremiumSubscription();
            default: throw new Error("Невідомий тип підписки для MobileApp.");
        }
    }
}

class ManagerCall extends PurchaseChannel {
    createSubscription(type) {
        console.log("Обробка запиту через Дзвінок Менеджеру. Верифікація клієнта по телефону...");
        switch(type.toLowerCase()) {
            case 'domestic': return new DomesticSubscription();
            case 'educational': return new EducationalSubscription();
            case 'premium': return new PremiumSubscription();
            default: throw new Error("Невідомий тип підписки для ManagerCall.");
        }
    }
}

function main() {
    console.log("Покупка через Веб-сайт:");
    const webSite = new WebSite();
    webSite.orderSubscription("premium");

    console.log("\nПокупка через Мобільний додаток:");
    const mobileApp = new MobileApp();
    mobileApp.orderSubscription("educational");

    console.log("\nПокупка через Дзвінок менеджеру:");
    const manager = new ManagerCall();
    manager.orderSubscription("domestic");
}

main();