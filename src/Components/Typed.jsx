import React, { Component } from 'react';
import Typed from 'react-typed';
import './typed.css'

class TypedWords extends Component {
    render() {
        return (
            <div className='typed--text'>
                <Typed 
                    strings={[
                        'Application Developer',
                        'Oracle Engineer',
                        'Cloud Specialist',
                        'Software Coder',
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={4000}
                    loop
                />
                <br/>
            </div>
        );
    }
}

export default TypedWords;