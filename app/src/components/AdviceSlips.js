import React from 'react'
import {connect} from 'react-redux'
import Advice from './Advice'

const AdviceSlips = (props) => {
 console.log(props.adviceslips)
    return(
        <div className="adviceslip">
            
            <Advice />
        </div>
    )
}
function mapStateToProps(state) {
    return {
      adviceslips: state.slip
      
    };
  }

export default connect (mapStateToProps, {})(AdviceSlips)