import Ember from 'ember';

export default Ember.Component.extend({
  isContentShowing: false,
  actions: {
    contentShow: function() {
      this.set('isContentShowing', true);
    },
      contentHide: function() {
        this.set('isContentShowing', false);
    },
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
