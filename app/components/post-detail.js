import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    }
  }
});
