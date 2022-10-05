import React from 'react';
import axios from 'axios';


class CUD extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: [
                <>
                    <tr key={1}>
                        <td colSpan="7">No se realizo ninguna busqueda</td>
                    </tr>   
                </>
            ]
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();

        const fields = event.target.elements;
        const params = {
            firstName: fields.firstName.value,
            city: fields.city.value,
            quantity: fields.quantity.value,
        };

        const response = await axios.get('/rest/search', {
            params: {
                name: params.firstName,
                city: params.city,
                quantity: params.quantity
            }
        });
        
        this.tableRow(response.data);

        this.setState({
            tableToggle: true
        })
    }

    tableRow(data){
        let row;

        if(data.length > 0){
            row = data.map( (item, index) => {
                return (
                    <>
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.location}</td>
                            <td>{item.city}</td>
                        </tr>   
                    </>
                )
            })
        } else {
            row = [
                <>
                    <tr key={1}>
                        <td colSpan="7">No se encontraron datos</td>
                    </tr>   
                </>
            ]
        }
        


        this.setState({
            tableData: row
        });
    }

    render() {
        const style = {
            input: {
                display: 'inline-block',
                marginRight: '20px'
            },
            table: {
                marginTop: '50px'
            }
        }


        return (
            <>
                <div className="container">

                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Vibra Gaming Challenge</a>
                        </div>
                    </nav>

                    <div style={{ marginTop: '50px' }}>

                        <form onSubmit={this.onSubmit} className="needs-validation">
                            <div className="mb-3" style={style.input}>
                                <label htmlFor="firstName" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>

                            <div className="mb-3" style={style.input}>
                                <label htmlFor="city" className="form-label">Ciudad</label>
                                <input type="text" className="form-control" id="city" />
                            </div>

                            <div className="mb-3" style={style.input}>
                                <label htmlFor="quantity" className="form-label">limite</label>
                                <input type="number" className="form-control" id="quantity" required/>
                            </div>

                            <button type="submit" className="btn btn-primary">Buscar</button>
                        </form>

                        <table className="table" style={style.table}>
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Localidad</th>
                                    <th scope="col">Ciudad</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {this.state.tableData}
                            </tbody>
                        </table>
                        
                    </div>

                </div>
            </>
        )
    }
}

export default CUD;