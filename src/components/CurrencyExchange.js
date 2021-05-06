import {useEffect, useState} from "react";
import Form from "./CEForm"

const Exchange = () => {

const apiKey = "b789e9291e150d9dd5c990f6b42dc7db";
  const [rate, setRate] = useState(null);
  const getRate = async (firstCurrency, secondCurrency, amount) => {
    const response = await fetch(
      `http://data.fixer.io/api/convert?access_key=${apiKey}&from=${firstCurrency}&to=${secondCurrency}&amount=${amount}`
    );
    const data = await response.json();
    setRate(data);
    console.log(data)
  };

  return (
      <div classname="exchange">
          <Form getRate={getRate}/>
          <h1>{rate.result}</h1>
      </div>
  )

}

export default Exchange;