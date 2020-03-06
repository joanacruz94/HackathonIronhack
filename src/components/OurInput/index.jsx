import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap';

class OurInput extends Component {
    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        event.preventDefault();
        const inputName = event.target.name;
        const value = event.target.value;

        console.log(inputName);

        this.props.answersState(inputName, value);

    }
    

    render() {
        const{ type, name, labelTrue, labelFalse, title, choices, idInput } = this.props;

        return (
            <Form.Group>
            {
                (name.includes("question") && <Form.Label>{ title }</Form.Label>)
                || <Form.Label>{ name }</Form.Label>

            }
            {
                (type === "text" && 
                <Form.Control type="text" onChange={this.handleInputChange} name={idInput}></Form.Control>
                )
                ||
                (type === "dropdown" && <Form.Control as="select" onChange={this.handleInputChange}>
                    {
                        choices.map(choice => (
                            <option>{choice.text}</option>
                        ))
                    }
                </Form.Control>)
                ||
                (type === "boolean" && 
                <Fragment>
                    <Form.Check name={idInput} inline label={labelTrue} type="checkbox" onChange={this.handleInputChange}/>
                    <Form.Check name={idInput} inline label={labelFalse} type="checkbox" onChange={this.handleInputChange}/>
                </Fragment>
                )
            }
            </Form.Group>
        )
    }
}

export default OurInput;
