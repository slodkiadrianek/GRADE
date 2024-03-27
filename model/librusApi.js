import Librus from "librus-api";

export default class SendData {
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
      // console.log(`Błąd ${x}`);

      // Send message to User 648158
      const results = {};

      //list info
      results.info = await client.inbox.listInbox(5);
      // List announcements
      results.announcements = await client.inbox.listAnnouncements();
      // console.log(results.announcements);

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

      results.homework = await client.homework.listHomework(24374);

      // Get notifications
      results.notifications = await client.info.getNotifications();

      // results.grade = await client.info.getGrade(id)


      return results;
    } catch (error) {
      console.error("Wystąpił problem");
    }
  }
}
