import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import OurInput from './../OurInput';
import './style.scss';

class OurForm extends Component {
  constructor() {
    super();
    this.idInput = 0;
  }

  incrementId() {
    this.idInput++;
    return this.idInput;
  }

  createKeys(elements) {
    return elements.map(x => {
      return this.incrementId();
    });
  }

  render() {
    const { dataForm } = this.props;
    const elements = dataForm[0].pages[0].elements;
    const keys = this.createKeys(elements);
    console.log(keys);

    return (
      <div>
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
            <Fragment>
              <OurInput {...element} idInput={keys[index]} />
            </Fragment>
          ))}
          <Button controlId="buttonSubmit" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default OurForm;
