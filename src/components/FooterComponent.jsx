import React, { Component } from 'react';

class FooterComponent extends Component {
    
    render() {
        return (
            <div>
                <footer className='footer' style={{position :'fixed',bottom:0}}>
                    <span className='text-muted'>All Rights Reserved 2021 @OumaimaOUGGA</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;