import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    async onclick() {
        const response = await axios.get('/api/');
        console.log({response});
    }

    render() {
        return (
            <>
                <button type='button' onClick={async () => this.onclick()}>Boton</button>
            </>
        )
    }
}

export default Home;