import React, {Component} from 'react'
import data from './data.js'/*Step 1: I'm importing data from the data.js file*/
import ListOfNames from './ListOfNames.js'

class Body extends Component {
    constructor(){
        super()

        this.state = {
            personIndex: 0
        }
        
        this.clickPrevious = this.clickPrevious.bind(this)
        this.clickNext = this.clickNext.bind(this)
    }

    clickPrevious (){/*when declaring functions in React, you don't use the function keyword*/
        this.setState({/*setState is just a method that takes in an object as an argument*/
            personIndex: this.state.personIndex - 1
        })
    }

    clickNext (){
        this.setState({
            personIndex: this.state.personIndex + 1
        })
    }

    render () {
        return (
        <div className="body-class">
            <div className="main-display">
                <ListOfNames pbdata={data} pbIndex={this.state.personIndex}/> {/*Step 2: here I assign the stuff from data.js to a variable. This is what creating a prop looks like. I just created a prop called pbData.*/}
            </div>
            <div className="instrument-pannel">
                <div>
                    <button className="click-prev" onClick={this.clickPrevious}>-</button>
                    <button className="click-next" onClick={this.clickNext}>+</button>
                </div>
            </div>
        </div>
        )
    }

}
export default Body;