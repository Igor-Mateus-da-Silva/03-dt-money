import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../../src/contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../../src/utils/formatter";

interface Transactions {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    });

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        {transactions.map(transactions => {
                            return (
                                <tr key={transactions.id}>
                                    <td width="50%">{transactions.description}</td>
                                    <td>
                                        <PriceHighlight variant={transactions.type}>
                                            {transactions.type === 'outcome' && '- '}
                                            {priceFormatter.format(transactions.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transactions.category}</td>
                                    <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}