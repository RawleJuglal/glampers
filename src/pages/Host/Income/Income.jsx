import React from 'react'
import IncomeGraph from '../../../assets/images/income-graph.png'
import './Income.css'

export default function Income(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return(
        <section className="--income-page-container limit-width">
                <h1 className='--income-title XXXVIpt bold'>Income</h1>
                <p className='--income-monthly-p grey'>
                    Last <span className='underline bold'>30 days</span>
                </p>
                <h2 className='--income-total XLVIIIpt extra-bold black'>$2,260</h2>
                <img
                    className="--income-graph"
                    src={IncomeGraph}
                    alt="Income graph"
                />
                <div className="--income-info-header flex flex-wrap flex-align-center">
                    <h3 className='--income-summary XXIVpt bold black'>Your transactions (3)</h3>
                    <p className='--income-monthly-p push-right grey'>
                        Last <span className='underline bold'>30 days</span>
                    </p>
                </div>
                <div className="--income-transactions">
                    {transactionsData.map((item) => (
                        <div key={item.id} className="--income-transaction flex flex-wrap flex-align-center">
                            <h3 className='XXXVIpt semi-bold black'>${item.amount}</h3>
                            <p className='--income-date XXpt push-right'>{item.date}</p>
                        </div>
                    ))}
                </div>
        </section>
    )
}