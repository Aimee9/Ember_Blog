import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        image1: this.get('image1'),
        image2: this.get('image2'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
      }
    }
});
