import { useId } from 'react';

function InputBox({
    label,
    amount,
    onChangeAmount,
    onCurrencyChange,
    selectedCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    className = '',
}) {
    const amountID = useId();

    // Function to handle the change in the input amount
    const handleAmountChange = (e) => {
        const value = e.target.value;

        // Convert the input value to a floating-point number and back to a string
        // This removes any leading zeros
        const numericValue = parseFloat(value).toString();

        // Call the onChangeAmount callback with the numeric value
        if (onChangeAmount) {
            onChangeAmount(numericValue);
        }
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountID} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={handleAmountChange}
                    disabled={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => {
                        if (onCurrencyChange) {
                            onCurrencyChange(e.target.value);
                        }
                    }}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
