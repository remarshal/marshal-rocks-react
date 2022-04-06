import React, { Component } from 'react';
import Typed from 'react-typed';
import './typed.css'

class TypedWords extends Component {
    render() {
        return (
            <div className='typed--text'>
                <Typed 
                    strings={[
                        'Website Developer',
                        'Software Coder',
                        'Website Designer',
                        'Freelancer',
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={1000}
                    loop
                />
                <br/>
            </div>
        );
    }
}

export default TypedWords;