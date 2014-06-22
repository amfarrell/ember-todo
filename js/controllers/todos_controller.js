Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // From the "New Todo" text field, get todo title.
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      // Create new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      // Clear "New Todo" text field for a new todo item.
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});
