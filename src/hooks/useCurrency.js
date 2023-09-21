import { useEffect,useState } from "react"

function useCurrency(currency) {
	const url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
	const [data, setdata] = useState({})

	async function fetchData(){
		const data= await fetch(url)
		const result = await data.json()
		setdata(result[currency])
	}

	useEffect(()=>{
	 	fetchData()
	},[currency])
	return data;
}

export default useCurrency;