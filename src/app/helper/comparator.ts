export class Comparator {

  static sortBySubmissions(things, asc) {
    if (asc) {
      things.sort((s1, s2) => s1.submissions.length - s2.submissions.length);
    } else {
      things.sort((s1, s2) => s2.submissions.length - s1.submissions.length);
    }
  }

  static sortByName(things, asc) {
    if (asc) {
      things.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      things.sort((a, b) => b.name.localeCompare(a.name));
    }
  }
}
