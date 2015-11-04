import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaTwitter () {
      let route = this;
      this.get('session').open('twitter').then(() => {
        route.transitionTo('index');
      },() => {
        console.log('auth failed');
      });
    }
  }
});
