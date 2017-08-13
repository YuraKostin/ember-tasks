import Ember from 'ember';

export default Ember.Controller.extend({
  taskName: '',

  newTasks: Ember.computed.filterBy('model', 'done', false),
  finishedTasks: Ember.computed.filterBy('model', 'done', true),

  actions: {
    /**
     * Check that task name is not empty string
     * Create new todo item
     */
    create() {
      const taskTitle = this.get('taskName');

      if (!taskTitle) {
        return;
      }

      const task = this.store.createRecord('todo', {name: taskTitle});
      task.save();

      this.set('taskName', '');
    },

    /**
     * Delete task
     * @param{Object} task
     */
    delete(task) {
      task.destroyRecord();
    },

    /**
     * Update task `done` state
     * @param{Object} task
     */
    updateDoneState(task) {
      task.set('done', !task.get('done'));
      // task.save();
    },

    /**
     * Set `taskName` value
     * @param{Event} target
     */
    handleTaskTitleInput({target}) {
      const {value = ''} = target || {};
      this.set('taskName', value.trim());
    },

    /**
     * Prevent default behaviour on task form submit
     * @param{Event} e
     */
    handleSubmit(e) {
      e.preventDefault();
    }
  }
});
