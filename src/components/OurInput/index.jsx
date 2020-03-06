import React, { Component, Fragment } from 'react'
import { Form } from 'react-bootstrap';

class OurInput extends Component {
    constructor(){
        super();
        this.questions = this.createQuestionArray();
        this.state = {
            questions: this.questions
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    createQuestionArray(){
        const array = [];
        for(let i  = 0; i < 30; i++){
            array.push({
                text: ''
            });
        }
        return array;
    }
    handleInputChange(event){
        //event.preventDefault();
        console.log('hello')
/*        const inputName = event.target.name
        const value = event.target.value

        console.log(inputName);
        this.setState({
            [inputName]: value
        })*/
    }
    
    handleSubmission(event){
        event.preventDefault();

        const submission = {
            
        }

        // TO DO --> add to our existing data of companies
    }

    render() {
        const{ type, name, labelTrue, labelFalse, title, choices, idInput } = this.props;

        //console.log(idInput);
        console.log("HERE", this.state.questions);
        return (
            <Form.Group>
            {
                (name.includes("question") && <Form.Label>{ title }</Form.Label>)
                || <Form.Label>{ name }</Form.Label>

            }
            {
                (type === "text" && 
                <Form.Control name={idInput}></Form.Control>
                )
                ||
                (type === "dropdown" && <Form.Control as="select">
                    {
                        choices.map(choice => (
                            <option>{choice.text}</option>
                        ))
                    }
                </Form.Control>)
                ||
                (type === "boolean" && 
                <Fragment>
                    <Form.Check inline label={labelTrue} type="checkbox"/>
                    <Form.Check inline label={labelFalse} type="checkbox"/>
                </Fragment>
                )
            }
            </Form.Group>
        )
    }
}

export default OurInput;
