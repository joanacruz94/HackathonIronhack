import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import OurInput from './../OurInput';

class OurForm extends Component {
    constructor(){
        super();
        this.idInput = 0;
    }

    incrementId(){
        this.idInput++;
        return this.idInput;
    }

    createKeys(elements){
        return elements.map((x) => {return this.incrementId()});
    }

    render() {
        const { dataForm } = this.props;
        const elements = dataForm[0].pages[0].elements;
        const keys = this.createKeys(elements);
        console.log(keys);

        return (
            <div>
                <Form controlId="formBasic">
                    {
                        elements.map((element, index)=> (
                            <Fragment >
                                <OurInput {...element} idInput={keys[index]}/>
                            </Fragment>
                        ))
                    }
                <Button controlId="buttonSubmit" variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default OurForm;
