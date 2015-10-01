import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },

    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('post', post_id);
    },

    destroyPost(post) {
      debugger;
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
