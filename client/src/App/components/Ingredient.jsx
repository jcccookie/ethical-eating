import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: this.props.ingredient,
            hasIssue: this.props.ingredient.hasIssue
        }
        this.setIssueIngredient = this.setIssueIngredient.bind(this);
    }

    setIssueIngredient(e) {
        e.preventDefault();
        this.props.setIngredient(this.state.ingredient);
        this.props.openModal();
    }

    render() {
        return (
            <div className="Ingredient col-sm-6">
                <div className="card mb-3">
                    <div className="card-body">
                        <span className="name">{this.state.ingredient.name}</span>
                        {this.state.hasIssue && <div className="Issue mt-2">
                            <FontAwesomeIcon icon={faExclamationCircle} />&nbsp;
                            <a href="" onClick={this.setIssueIngredient}>See possible issue with this ingredient</a>
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}
export default Ingredient;