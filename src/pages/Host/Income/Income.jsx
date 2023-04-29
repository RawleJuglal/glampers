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
        <section className="--income-page-container">
            <h1 className='XXXVIpt bold'>Income</h1>
            <p className='--income-monthly-p'>
                Last <span className='underline'>30 days</span>
            </p>
            <h2 className='XLVIIIpt extra-bold black'>$2,260</h2>
            <img
                className="graph"
                src={IncomeGraph}
                alt="Income graph"
            />
            <div className="--income-info-header">
                <h3>Your transactions (3)</h3>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <div className="--income-transactions">
                {transactionsData.map((item) => (
                    <div key={item.id} className="transaction">
                        <h3>${item.amount}</h3>
                        <p>{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}