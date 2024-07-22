import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';



function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()


    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    padding: 2rem;
    height: 100vh;
    overflow: hidden;

    .stats-con {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        height: 100%;
        
        .chart-con {
            grid-column: 1 / 4;
            height: 100%;
            display: flex;
            flex-direction: column;
            
            .amount-con {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
                margin-top: 1.5rem;
                
                .income, .expense {
                    grid-column: span 2;
                }
                .income{
                    color: #4CAF50;
                }
                .expense{
                    color: #F44336;
                }

                .income, .expense, .balance {
                    background: #F5F8FA; /* Light background for contrast */
                    border: 2px solid #E0E0E0; /* Subtle border */
                    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1); /* Enhanced shadow */
                    border-radius: 15px; /* Smoother corners */
                    padding: 1.5rem;
                    text-align: center;

                    h2 {
                        font-size: 1.4rem;
                        margin-bottom: 0.5rem;
                        color: #333;
                    }

                    p {
                        font-size: 2.5rem;
                        font-weight: 700;
                        margin: 0;
                    }
                }

                .balance {
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    p {
                         
                        font-size: 3.5rem;
                        font-weight: 700;
                        margin: 0;
                    }
                }
            }
        }

        .history-con {
            grid-column: 4 / -1;
            display: flex;
            flex-direction: column;
            height: 100%;

            h2 {
                margin: 1rem 0;
                font-size: 1.6rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #333;
            }

            .salary-title {
                font-size: 1.2rem;
                span {
                    font-size: 1.8rem;
                    font-weight: 700;
                }
            }

            .salary-item {
                background: #F5F8FA;
                border: 2px solid #E0E0E0;
                box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
                padding: 1rem;
                border-radius: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    font-weight: 600;
                    font-size: 1.4rem;
                    margin: 0;
                }
            }
        }
    }
`;

export default Dashboard