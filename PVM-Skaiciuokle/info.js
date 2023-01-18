class PVMCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            vatRate: 0,
            vatAmount: 0,
            totalAmount: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        fetch("vat_calculator.php", {
            method: "POST",
            body: data
        })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    amount: response.amount,
                    vatRate: response.vatRate,
                    vatAmount: response.vatAmount,
                    totalAmount: response.totalAmount
                });
            });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                    />
                </label>
                <br />
                <label>
                    VAT Rate:
                    <input
                        type="number"
                        name="vatRate"
                    />
                </label>
                <br />
                <button type="submit">Calculate VAT</button>
                <br />
                <p>Suma: {this.state.amount}</p>
                <p>PVM Tarifas: {this.state.vatRate}%</p>
                <p>PVM Suma: {this.state.vatAmount}</p>
                <p>Viso suma (VAT included): {this.state.totalAmount}</p>
            </form>
        );
    }
}