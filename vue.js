new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // data is an attribute (value) of the defined Vue.js instance
  data: {
    name: 'A mountain B ro',
    course: 'Web Engineer coursee',
    acceptancePeriod: 'January 2019',
    defaultLastId: 4,
    students: [
      { id: 1, name: 'Hiroyoshi Noro', course: 'Web Engineer course', acceptancePeriod: 'January 2019' },
      { id: 2, name: 'Shuji Tominaga', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017' },
      { id: 3, name: 'Kazuki Saito', course: 'Web Engineer coursee', acceptancePeriod: 'November 2017' }
    ]
  },
  // In methods, describe the method you want to use for the instance of Vue.js
  methods: {
    addStudent: function() {
      this.students.push({
        id: this.defaultLastId++,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod,
      });
      this.name = '';
      this.course = '';
      this.acceptancePeriod = '';
    }
  }
})