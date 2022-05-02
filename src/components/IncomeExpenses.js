import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts
        .filter(num => num > 0)
        .reduce((acc, item) => (acc += item))   
        .toFixed(2)
    const expense = Math.abs(amounts
        .filter(num => num < 0)
        .reduce((acc, item) => (acc -= item))
        .toFixed(2)
        )

    return (
        <div className="inc-exp-container">
            <div>
                <h4>
                    Income
                </h4>

                <p className="money plus">
                    +${income}
                </p>
            </div>
                <h4>
                    Expense
                </h4>

                <p className="money minus">
                    -${expense}
                </p>
        </div>
    )
}

export default IncomeExpenses