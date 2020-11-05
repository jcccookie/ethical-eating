import React, { Component } from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class ManageApp extends Component {
  constructor(props) {
    super(props);

    // Here we initialize our components state
    this.state = {
      showForm: false,
      recipeIngredients: []
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    // On click we change our state – this will trigger our `render` method
    this.setState({ showForm: true });

    // On click we iterate through the "saved recipe prop and push all text into recipeIngredients state"
    var recipeTextArray = []
    for (var i = 0; i < this.props.recipe.length; i++){
      recipeTextArray.push(this.props.recipe[i].text);
    }
    this.setState({recipeIngredients: recipeTextArray});
  }

  handleForm = (event) => {
    event.preventDefault(); // stops form from "refreshing" automatically - it follows action, hence the refresh
    alert(`We Saved the Recipe: ${event.target.name.value}, Ingredients:  ${this.state.recipeIngredients}`); // show a simple dialog box with the values

    this.setState({ showForm: false });
    // INSERT DATABASE CODE
  };

  renderForm() {
    return (
      <div style={styles}>
        <form id="someForm" onSubmit={this.handleForm}>
          {/* the `onSubmit` event-listener of the form, calls the function*/}
          <label htmlFor="name">Recipe Name:</label>
          <input name="name" type="text" required />

          <input style={{width: "100px", height: "40px"}}name="done" type="submit" class="dx-button dx-button-mode-contained dx-widget dx-button-has-text" aria-label="More" />
        </form>
      </div>
    );
  }

  render() {
    // We get the state for showing the form from our components state
    const { showForm } = this.state;

    return (
      <div className="manage-app">
        
        <div onClick={this.onClick} style={{border: "2px solid"}} class="dx-button dx-button-mode-contained dx-widget dx-button-has-text" aria-label="More" tabindex="0" role="button"><div class="dx-button-content"><span class="dx-button-text">Save Recipe</span></div></div>

        {/* We want to show the form if the state is true */}
        {showForm && this.renderForm()}
      </div>
    );
  }
}

export default ManageApp;