import { useState } from 'react'
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
    const [Amount,setAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setTo]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0);

    const currencyInfo=useCurrencyInfo(from);

    const options=Object.keys(currencyInfo);


    const convert = ()=>{
      setConvertedAmount(Amount*currencyInfo[to]);  
    }

    const swap = ()=>{
      setFrom(to);
      setTo(from);
      setConvertedAmount(Amount);
      setAmount(convertedAmount);
      
    }


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
             backgroundImage:`url("https://images.pexels.com/photos/7788006/pexels-photo-7788006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
             
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={Amount}
                              currencyOptions={options}
                              selectedCurrency={from}
                              onChangeAmount={(amount)=>{
                                   setAmount(amount)
                              }}
                              onCurrencyChange={(currency)=>{
                                 setFrom(currency);
                              }}
                              

                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-purple-900 text-white px-2 py-0.5" onClick={swap}
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              selectedCurrency={to}
                              amountDisable
                              onCurrencyChange={(currency)=>{
                                setTo(currency)
  
                              }}

                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-purple-900 text-white px-4 py-3 rounded-lg" onClick={convert}>
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  ) }

export default App
