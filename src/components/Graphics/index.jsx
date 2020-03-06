import React, { Component } from 'react'

export class Graphics extends Component {

    average(array){
        const sum = array.reduce((acc, value) => acc + value);
        const rounded = Math.round((sum/array.length + Number.EPSILON) * 100) / 100;
        if(rounded < 1) return rounded * 100 + " %";
        return rounded;
    }

    render() {
        const { data } = this.props;

        return (
            <div>
                <h1>Here goes the Graphics</h1>

                {   
                    data.map(entry => (
                        <p>{this.average(entry)}</p>
                    ))
                }

            </div>
        )
    }
}

export default Graphics

