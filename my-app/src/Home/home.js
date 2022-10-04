import React from 'react';
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let toggle = this.state.tableShow

        return (
            <>
                Hola Mundo!
            </>
        )
    }
}

export default Home;