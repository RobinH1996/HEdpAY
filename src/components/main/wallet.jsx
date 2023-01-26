import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts'
import { SET_AUTH } from '../../constants/actionTypes';
import "./wallet.css"

const mapStateToProps = state => {
    return {
      email: state.auth.email,
      psw: state.auth.psw
    }};
  
const mapDispatchToProps = dispatch => ({
    setAuth: (data) => dispatch({ type: SET_AUTH, data })  
});

class wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        series: [{
            name: 'Wallet total($)',
            data: [4000, 3200, 10000, 900, 290, 1900, 2200, 90, 12000, 700, 190, 5000, 1300, 9000, 170, 200, 700, 5000]
        }],
        options: {
            chart: {
            height: 350,
            type: 'line',
            },
            forecastDataPoints: {
            count: 7
            },
            stroke: {
            width: 5,
            curve: 'smooth'
            },
            xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 12,
            labels: {
                formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
            }
            },
            title: {
            text: '',
            align: 'left',
            style: {
                fontSize: "16px",
                color: '#2DCCD3'
            }
            },
            fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ '#2DCCD3'],
                shadeIntensity: 2,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [100, 100, 100, 100]
            },
            },
            yaxis: {
            min: 0,
            max: 15000
            }
        },
        };
    }
    componentWillMount(){
        if(!this.props.email)
            this.props.history.push('/logIn');
        else
            window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        return (
            <div style={{ marginTop: "170px" }} className="footer_padding">
                <div className='wallet_div'>
                    <p className='wallet_left_title'>Wallet total</p>
                    <div className='wallet_right_title'>
                        <p className='wallet_amount'>11,139.46 USD</p>
                        <p className='wallet_updated_date'>Last updated June 14, 2021, 12:00</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 padding_left_none'>
                            <div className='wallet_hdp'>
                                
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='wallet_btc'></div>
                        </div>
                        <div className='col-md-3'>
                            <div className='wallet_eth'></div>
                        </div>
                        <div className='col-md-3 padding_right_none'>
                            <div className='wallet_usdt'></div>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: "24px" }}>
                        <div className='col-md-3 padding_left_none'>
                            <div className='wallet_hdp'></div>
                        </div>
                        <div className='col-md-3'>
                            <div className='wallet_btc'></div>
                        </div>
                        <div className='col-md-3'>
                            <div className='wallet_eth'></div>
                        </div>
                        <div className='col-md-3 padding_right_none'>
                            <div className='wallet_usdt'></div>
                        </div>
                    </div>
                    <div className='chart_div'>
                        <div className='chart_head'>
                        <p className='chart_title'>Show the chart</p>
                        <p className='chart_title chart_title_wallet'>Wallet total</p>
                        </div>
                        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(wallet);