import React, { Component } from 'react';



export class Bot extends Component {
    /*static displayName = Bot.name;*/

    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>

               <iframe src='https://webchat.botframework.com/embed/saganchatbot-bot?s=sXpeRhXQ4L8.dosj9pOMF0PpuBsUrrfo3MLw9WnKrEx5R4s-cH_mjC8'  style={{minWidth: '400px', width: '0', minHeight: '500px'}}></iframe>
            
            </>
        );
    }
}

