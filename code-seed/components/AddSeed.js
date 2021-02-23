import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'

class AddSeed extends Component {

    constructor(props) {
        super(props)

        this.id = React.createRef();
        this.commonName =  React.createRef();
		this.bloomTime = React.createRef();
		this.watering = React.createRef();
		this.difficultyLevel = React.createRef();
		this.temperature = React.createRef();
		this.typeOfSeeds = React.createRef();
		this.seedDescription = React.createRef();
		this.seedStock = React.createRef();
		this.seedCost = React.createRef();
		this.seedsPerPacket = React.createRef();
    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {

        let check = this.props.returnedMessage.split(' ')
        if (check[0] === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/listseeds')
            }, 2000)
        }
    }
    add() {

        let newSeed = {
            id: this.id.current.value,
            commonName: this.commonName.current.value,
            bloomTime: this.bloomTime.current.value,
            watering: this.watering.current.value,
            difficultyLevel: this.difficultyLevel.current.value,
            temperature: this.temperature.current.value,
            typeOfSeeds:  this.typeOfSeeds.current.value,
            seedDescription: this.seedDescription.current.value,
            seedStock: this.seedStock.current.value,
            seedCost: this.seedCost.current.value,
            seedsPerPacket: this.seedsPerPacket.current.value,
        }
        this.props.onAddSeed(newSeed)
    }
    update() {
        let seed = {
            id: this.id.current.value,
            commonName: this.commonName.current.value,
            bloomTime: this.bloomTime.current.value,
            watering: this.watering.current.value,
            difficultyLevel: this.difficultyLevel.current.value,
            temperature: this.temperature.current.value,
            typeOfSeeds:  this.typeOfSeeds.current.value,
            seedDescription: this.seedDescription.current.value,
            seedStock: this.seedStock.current.value,
            seedCost: this.seedCost.current.value,
            seedsPerPacket: this.seedsPerPacket.current.value,
        }

        this.props.onUpdateSeed(seed.id, seed)

    }
    render() {
        return (
            <div>
               <div className="root-div">
                    <div className="mb-3 add-seed">
                        <input type="number" ref={this.id} pattern="[0-9]+" className="form-control" id="seedid" placeholder="Seed ID" />
                    </div>

                    <div className="mb-3 add-seed">
                        <input type="text" ref={this.commonName} className="form-control" id="seedcommonname" placeholder="Seed Common Name" />
                    </div>

                    <div className="mb-3 add-seed">
                        <input type="text" ref={this.bloomTime} className="form-control" id="seedbloomTime" placeholder="Bloom" />
                    </div>

                    <div className="mb-3 add-seed">
                        <input type="text" ref={this.watering} className="form-control" id="seedwatering" placeholder="Seed Watering Details" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="text" ref={this.difficultyLevel} className="form-control" id="difficultyLevel" placeholder="Difficulty Level" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="text" ref={this.typeOfSeeds} className="form-control" id="typeofseeds" placeholder="Type of Seed" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="text" ref={this.seedDescription} className="form-control" id="seeddescription" placeholder="Seed Description" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="number" ref={this.seedStock} className="form-control" id="seedstock" placeholder="Seed Stock" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="number" ref={this.seedCost} className="form-control" id="seedcost" placeholder="Seed Cost" />
                    </div>

                    <div className="mb-3 add-employee">
                        <input type="number" ref={this.seedsPerPacket} className="form-control" id="seedsperpacket" placeholder="Seeds Per Packet" />
                    </div>

                    <button type="button" onClick={this.add.bind(this)} className="btn btn-primary add-button">Add</button>
                    <button type="button" onClick={this.update.bind(this)} className="btn btn-primary add-button">Update</button>

                </div>

                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>  
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddSeed: (seed) => {
            dispatch(actionCreators.addSeed(seed))
        },
        onUpdateSeed: (id, newSeedObject) => {
            dispatch(actionCreators.updateSeed(id, newSeedObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddSeed))
