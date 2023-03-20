import { Component } from 'react';
import './DestinationStyles.css'

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.cName}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className={this.props.imgc}>
                    <img src={this.props.img1} alt="img" />
                    <img src={this.props.img2} alt="img" />
                </div>
            </div>
        )
    }
}

export default DestinationData