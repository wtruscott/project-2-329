import {useState} from "react";
import Form from "./CEForm"

const Exchange = (props) => {

const apiKey = "b789e9291e150d9dd5c990f6b42dc7db";
const money = props.money
  const [rate, setRate] = useState(null);
  const getRate = async (secondCurrency) => {
    const response = await fetch(
      `http://data.fixer.io/api/convert?access_key=${apiKey}&from=${money}&to=${secondCurrency}&amount=1`
    );
    const data = await response.json();
    setRate(data);
  };
  return (
      <div className="exchange">
          <h1>Exchange Rate:</h1>
          <Form getRate={getRate}/>
          <h2>1 {money} = {rate? rate.result : "Enter a currency."} {rate? rate.query.to : ""}</h2>
      </div>
  )

}

export default Exchange;