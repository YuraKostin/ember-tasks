import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    /**
     * Handle click
     * Calling controller function with task object
     * @param{function} controllerAction
     * @param{Object} task
     */
    onRemoveClick(controllerAction, task) {
      controllerAction(task);
    },

    /**
     * Handle checkbox state change
     * Toggle task element class name
     * @param{function} controllerAction
     * @param{Object} task
     * @param{Event} target
     */
    onChange(controllerAction, task, {target}) {
      const {checked = false} = target || {};
      target.parentNode.classList.toggle('done', checked);
      controllerAction(task);
    }
  }
});
