import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image1: this.get('image1'),
        image2: this.get('image2') ? this.get('image2'): "",
      };
      this.set('addNewPost', false),
      this.sendAction('save', params);
    }
  }
});
