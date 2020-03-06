import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import OurInput from './../OurInput';
import './style.scss';

class OurForm extends Component {
  constructor() {
    super();
    this.idInput = 0;
    this.state = {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      q17: true,
      q18: true,
      q19: true,
      q20: true,
      q21: true,
      q22: true,
      q23: true,
      q24: true,
      q25: true,
      q26: true,
      q27: true
    };
    this.keys = this.createKeys();
    this.changeAnswersState = this.changeAnswersState.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }

  incrementId() {
    this.idInput++;
    return this.idInput;
  }

  changeAnswersState(inputName, value) {
    this.setState(previousState => {
      return {
        [inputName]: value
      };
    });
  }

  handleSubmission() {
    const submission = { ...this.state };

    console.log(submission);
  }

  createKeys() {
    let array = [];
    for (let i = 1; i < 28; i++) array.push('q' + i);
    return array;
  }

  render() {
    const { dataForm } = this.props;
    const elements = dataForm[0].pages[0].elements;

    return (
      <div className="container">
        <img
          className="formDisplay"
          src="https://www.alislam.org/wp-content/uploads/2019/08/Gender-Equality-in-Islam-1024x512.jpg"
          alt="Equality"
        />
        <div className="formInfo">
          <h1>Your experiences matter!</h1>
          <br />
          <p>
            The form below is for you to share your experience of previous employers. You can make a
            real impact on someones career choice and future prospects.{' '}
          </p>
        </div>
        <Form controlid="formBasic">
          {elements.map((element, index) => (
            <OurInput
              {...element}
              idInput={this.keys[index]}
              answersState={(inputName, value) => this.changeAnswersState(inputName, value)}
            />
          ))}
          <Button controlid="buttonSubmit" variant="primary" onClick={this.handleSubmission}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default OurForm;
