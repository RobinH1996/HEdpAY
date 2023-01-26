import React, { Component } from 'react'
import Select from 'react-select'
import set from  "../../../../assets/images/set.png"
import HDP from  "../../../../assets/images/HDP@2x.png"
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class chooseCurrency extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:[
                {
                    key: 'HDP - Hdp.ф',
                    text: 'HDP - Hdp.ф',
                    value: 'HDP - Hdp.ф',
                    image: { avatar: true, src: "currency/HDP.png" },
                }
            ]
        }
    }
    componentWillMount(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        const friendOptions = [
            {
              key: 'HDP - Hdp.ф',
              text: 'HDP - Hdp.ф',
              value: 'HDP - Hdp.ф',
              image: { avatar: true, src: "currency/HDP.png" },
            },
            {
              key: 'BTC - Bitcoin',
              text: 'BTC - Bitcoin',
              value: 'BTC - Bitcoin',
              image: { avatar: true, src: "currency/BTC.png" },
            },
            {
              key: 'ETH - Ethereum',
              text: 'ETH - Ethereum',
              value: 'ETH - Ethereum',
              image: { avatar: true, src: "currency/ETH.png" },
            },
            {
              key: 'USDT - Tether',
              text: 'USDT - Tether',
              value: 'USDT - Tether',
              image: { avatar: true, src: "currency/USDT.png" },
            },
            {
              key: 'USD - Dollar',
              text: 'USD - Dollar',
              value: 'USD - Dollar',
              image: { avatar: true, src: "currency/USD.png" },
            },
            {
              key: 'EUR - Euro',
              text: 'EUR - Euro',
              value: 'EUR - Euro',
              image: { avatar: true, src: "currency/EUR.png" },
            },
            {
              key: 'GBP - British Pound',
              text: 'GBP - British Pound',
              value: 'GBP - British Pound',
              image: { avatar: true, src: "currency/GBP.png" },
            },
          ]
        return (
        <div style={{ marginTop: "170px" }} className="footer_padding">
            <div className='verify'>
                <img className='warning' src={ set } alt="set" />
                <p className='verifyTitle'>Your account has been validated</p>
                <p className='verifyTitle' style={{ color: "#08253E", marginTop:"20px" }}>Welcome to Hedpay</p>
                <p className='greetWord'>Thank you for creating your account</p>
                <div className='verifyBody'>
                    <p style={{ color: "#002554" }}>The USD - Dollar is the default currency of your account.</p>
                    <p style={{ color: "#002554", fontWeight: "500", marginTop:"-13px" }}>You can choose another currency before you continue.</p>
                    <p className='loginTitle' style={{ marginTop:"30px", color: "#002554" }}>Default account currency *</p>
                        <Dropdown style={{ marginRight:"0px" }}
                            placeholder='Select Currency'
                            fluid
                            selection
                            options={friendOptions}
                            defaultValue={this.state.selected}
                        />
                    <button className='singInButton activeButton' onClick={this.handleCode} style={{ marginTop: "33px" }}>Explore my account</button>
                </div>
            </div>
        </div>
        )
    }
}
