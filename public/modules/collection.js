(function () {


  class Collection {

    constructor(attributes) {
      this.attributes = attributes;
      this.models = attributes.models || [];
    }

    saveAll() {
      for (let model in this.models) {
        model.save();
      }
    }

    push_back(model) {
      this.models.push(model);
      return true;
    }

    pop() {
      return this.models.pop();
    }

    shiht(model) {
      this.models.shift(models);
      return true;
    }

    unshift() {
      return this.models.unshift();
    }

    fetch() {

    }


  }


})();