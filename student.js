class Student {
    constructor(name, surname, doBYear, doBMonth, doBDay) {
        this.name = name;
        this.surname = surname;
        this.doBYear = doBYear;
        this.doBMonth = doBMonth;
        this.doBDay = doBDay;
    }
    isBirthday() {
        let todayMonth = new Date().getMonth() + 1;
        let todayDay = new Date().getDate();
        if (this.doBMonth === todayMonth && this.doBDay === todayDay) {
            return true;
        }
        else {
            return false;
        }
    }
}