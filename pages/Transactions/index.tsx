import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 1.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>18/08/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Pizza</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 50,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>17/08/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 1.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>18/08/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 1.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>18/08/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 1.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>18/08/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}