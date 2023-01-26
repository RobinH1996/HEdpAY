import React, { Component } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom';

export default class proSignUpPassport extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    componentWillMount(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    navTo = () => {
      this.props.history.push("/proSignUpTerm");
    }
    render() {
        const options = [
          { value: 'Mr', label: 'Mr' },
          { value: 'Mrs.', label: 'Mrs.' },
          { value: 'Ms', label: 'Ms' }
        ]
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <div className='standardSignUpBar'>
                    <p className='limitedSignupTitle standardSignupTitleLeft' style={{ marginLeft:"10%" }}>Passport</p>
                    <p className='limitedSignupTitle standardSignupTitleRight' style={{ marginRight:"9%" }}>Employment</p>
                </div>
                <div className='limitedSignupDiv'>
                    <div className='limitedProcessBar'>
                        <span className='limitedLeftDot'></span>
                        <div className='limitedBarActive'></div>
                        <div className='limitedBar'></div>
                        <span className='limitedRightDot'></span>
                    </div>
                    <div className='row inputDetails'>
                        <div className='col-md-5'>
                            <p className='inputTitle'>Passport / ID number *</p>
                            <input className='inputStyle' type="text" name="nickName" placeholder='Enter your…' />
                            <div style={{width: "100%"}}>
                                <p className='inputTitle'>Date of expiry *</p>
                                <div style={{ display: "flex", width:"100%" }}>
                                    <input style={{ width:"30%" }} className='inputStyle' type="number" name="nickName" placeholder='MM' />
                                    <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='DD' />
                                    <input style={{ width:"30%", marginLeft: "5%" }} className='inputStyle' type="number" name="nickName" placeholder='YYYY' />
                                </div>
                            </div>
                            <p className='inputTitle'>Place of issue *</p>
                            <div style={{width:"65%"}}>
                                <Select options={options} className="selectTitle" />
                            </div>
                            <Link to="proSignUpDetail" className='goBack'>Go back</Link>
                        </div>
                        <div className='col-md-2'></div>
                        <div className='col-md-5'>
                            <p className='inputTitle unactiveInputTitle'>Employment *</p>
                            <Select options={options} className="selectTitle" />
                            <p className='inputTitle unactiveInputTitle'>Annual income *</p>
                            <Select options={options} className="selectTitle" />
                            <button className='singInButton createAccount' onClick={this.navTo}>Create account</button>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
