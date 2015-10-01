import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image1: DS.attr(),
  image2: DS.attr(),
  comments: DS.hasMany('comment', {async:true})
});
