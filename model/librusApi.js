const Librus = require("librus-api");

module.exports = class SendData {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }
  useData() {
    console.log(this.login, this.password);
  }
  async showData(login, password) {
    try {
      const client = new Librus();
      await client.authorize(login, password);
      // Send message to User 648158
      const results = {};

      //list info
      results.info = client.inbox.listInbox(5);
      // List announcements
      results.announcements = await client.inbox.listAnnouncements();

      // Get all absences
      results.absences = await client.absence.getAbsences();

      // Get calendar
      results.calendar = await client.calendar.getCalendar();

      // Get grades
      results.grades = await client.info.getGrades();

      // Get name, surname and other account info
      results.accountInfo = client.info.getAccountInfo(); // Nie używamy await, ponieważ nie zwraca ona obietnicy

      // Get lucky number
      results.luckyNumber = await client.info.getLuckyNumber();

      // Get notifications
      results.notifications = await client.info.getNotifications();

      return results;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Rzuć błąd, aby można go było obsłużyć na wyższym poziomie
    }
  }
};
