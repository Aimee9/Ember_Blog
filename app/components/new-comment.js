import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    newCommentForm() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        name: this.get('name'),
        note: this.get('note'),
      };
      this.set('addNewComment', false),
      this.sendAction('saveComment', params);
    }
  }
  });
