export default class DateInfo {
  constructor() {
    this.actualMonth;
    this.daysInMonth;
    this.longMonths = [0, 2, 4, 6, 7, 9, 11];
    this.actualDate;
    this.actualDay;
  }
  getActualDate() {
    this.actualDate = new Date();
    this.actualMonth = this.actualDate.getMonth();
    this.actualYear = this.actualDate.getFullYear();
    this.actualDay = this.actualDate.getDate();

    this.longMonths.includes(this.actualMonth)
      ? (this.daysInMonth = 32)
      : (this.daysInMonth = 31);
  }
}
