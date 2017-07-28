import Ember from 'ember';

export default Ember.Controller.extend({

	emailAdress: '',

	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid')
	
});
