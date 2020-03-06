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
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 1,
      q8: 1,
      q9: 1,
      q10: 1,
      q11: 1,
      q12: 1,
      q13: 1,
      q14: 1,
      q15: 1,
      q16: 1,
      q17: 1,
      q18: 1,
      q19: 1,
      q20: 1,
      q21: 1,
      q22: 1,
      q23: 1,
      q24: 1,
      q25: 1,
      q26: 1,
      q27: 1
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

    handleSubmission(){
        const submission = {...this.state};
        this.props.addData(submission);
        this.handleChange();
    }

  createKeys() {
    let array = [];
    for (let i = 1; i < 28; i++) array.push('q' + i);
    return array;
  }

handleChange(){
  this.props.changeComponent('activeHome', 'activeForm');
}  

render() {
    const { dataForm, data } = this.props;
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

        <Form controlId="formBasic">
          {elements.map((element, index) => (
            <OurInput
              {...element}
              idInput={this.keys[index]}
              answersState={(inputName, value) => this.changeAnswersState(inputName, value)}
            />
          ))}
          <Button controlId="buttonSubmit" variant="primary" onClick={this.handleSubmission}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default OurForm;
