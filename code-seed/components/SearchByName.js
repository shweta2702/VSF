import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchByName extends Component {

    constructor(props) {
        super(props)
    
        this.commonName = React.createRef()
    }
    
    search() {
       this.props.onSearchByNames(this.commonName.current.value)
       
    }

    componentDidMount() {
        this.props.clearState()
    }
    

    render() {
        console.log(this.props)
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
                </tr>
            )
        })
        
        return (
            <div className="search-common-name">
                <div className="mb-3 input-search-name ">
                    <input type="text" ref={this.commonName} className="form-control" id="commonName" placeholder="Seed Common Name" />
                </div>

                <div>
                    <button className="btn btn-primary" onClick={this.search.bind(this)}>Search</button>
                </div>

                <hr />

                <div className="seed-table-div">
                    <h2>***********PLANTS WITH GIVEN NAME*************</h2>
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
                            </tr>
                        </thead>
                        <tbody>
                            {seedsList}
                        </tbody>
                    </table>

                </div>

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
        onSearchByNames: (commonName) => dispatch(actionCreators.getSeedsByCommonName(commonName)),
        clearState: () => dispatch(actionCreators.clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName)