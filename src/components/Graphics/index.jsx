import React, { Component } from 'react'

class Graphics extends Component {
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
                {   
                    data.map(entry => (
                        <p>{this.average(entry)}</p>
                    ))
                }
                <div className="bk-root" id="65e27591-fd25-4f57-86b0-7a2976115cc7" data-root-id="3481"></div>
            </div>
            
        )
    }
}

export default Graphics;

