import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            table: false
        };
    }

    async onclick() {
        const response = await axios.get('/rest/search', {
            params: {
                name: 'KimberlyTilliards',
                city: 'Živinice',
                quantity: 2
            }
        });
        console.log({ response });
        this.setState({
            table: true
        })
    }

    render() {

        return (
            <>
                <div className="container">

                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Navbar</a>
                        </div>
                    </nav>

                    <div style={{ marginTop: '50px' }}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        {this.state.table ?
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Tabla</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>

                            : <button type='button' onClick={async () => this.onclick()}>Boton</button>
                        }
                    </div>

                </div>
            </>
        )
    }
}

export default Home;