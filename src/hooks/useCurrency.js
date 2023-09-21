import { useEffect } from "react"

function useCurrency(currency) {
	const [data, setdata] = useState({})
	useEffect(()=>{
		fetch(currency)
			.then(response => response.json())
			.then(response => setdata(response[currency]))
	},[currency])
	return data;
}

export default useCurrency;