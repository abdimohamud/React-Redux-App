import React from 'react'
import {connect} from 'react-redux'
import Quote from './Quote'

const ProgrammerQuotes = (props) => {
 console.log(props.quotes)
    return(
        <div className="adviceslip">
            {
              props.quotes.map((item) => (
                <Quote
                key={item.id}
                item={item}
                />
              
              ))
            }
        </div>
    )
}
function mapStateToProps(state) {
    return {
      quotes: state.quotes
      
    };
  }

export default connect (mapStateToProps, {})(ProgrammerQuotes)