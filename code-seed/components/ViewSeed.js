import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreated from '../actions/actions'

class ViewSeed extends Component {

    componentDidMount() {
        this.props.onGetSeeds()
    }

    delete(id) {
        this.props.onDeleteSeed(id);
    }

    render() {

        let seedsList = this.props.seedsList.map((seed, index) => {
            return (
                <tr key={index}>
                   <th>{seed.id}</th>
                    <td>{seed.commonName}</td>
                    <td>{seed.bloomTime}</td>
                    <td>{seed.watering}</td>
                    <td>{seed.difficultyLevel}</td>
                    <td>{seed.temperature}</td>
                    <td>{seed.typeOfSeeds}</td>
                    <td>{seed.seedDescription}</td>
                    <td>{seed.seedStock}</td>
                    <td>{seed.seedCost}</td>
                    <td>{seed.seedsPerPacket}</td>
                    <td>
                        <button onClick={this.delete.bind(this, seed.id)} className="btn btn-primary">DELETE</button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="seed-table-div">

                <h2>*******SEED DETAILS********</h2>

                <table className="table table-info seed-table">
                    <thead>
                        <tr>
                        <th scope="col">Seed Id</th>
                        <th scope="col">BloomTime</th>
                        <th scope="col">Watering</th>
                        <th scope="col">Difficulty Level</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Type Of Seeds</th>
                        <th scope="col">Seed Description</th>
                        <th scope="col">Seed Stock</th>
                        <th scope="col">Seed Cost</th>
                        <th scope="col">Seeds Per Packet</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seedsList}
                    </tbody>
                </table>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        seedsList: state.seedsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSeeds: () => {
            return dispatch(actionCreated.getAllSeeds())
        },
        onDeleteSeed: (id) => {
            return dispatch(actionCreated.deleteSeed(id))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSeed)
