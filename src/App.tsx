import { FormEvent, useState, useEffect } from "react"
import "./app.css"
import PlayerName from "./components/PlayerName/PlayerName"
import Resource from "./components/Resource/Resource"
import { resourceProps } from "./components/Resource/Resource"

function App() {
	const loadResourceCount = ( resource:string ):number => {
		const savedMegacredit = localStorage.getItem(resource);
		return savedMegacredit ? Number(savedMegacredit) : 0;
	}

	const loadResourceProdCount = ( resource:string ):number => {
		const savedMegacredit = localStorage.getItem(`${resource}prod`);
		return savedMegacredit ? Number(savedMegacredit) : 0;
	}

	const [Megacredit, SetMegacredit] = useState<number>(loadResourceCount("Megacredit"))
	const [Acel, SetAcel] = useState<number>(loadResourceCount("Acel"))
	const [Titan, SetTitan] = useState<number>(loadResourceCount("Titan"))
	const [Palantak, SetPalantak] = useState<number>(loadResourceCount("Palantak"))
	const [Energia, SetEnergia] = useState<number>(loadResourceCount("Energia"))
	const [Ho, SetHo] = useState<number>(loadResourceCount("Ho"))

	const [Megacreditproduction, SetMegacreditproduction] = useState<number>(loadResourceProdCount("Megacredit"))
	const [Acelproduction, SetAcelproduction] = useState<number>(0)
	const [Titanproduction, SetTitanproduction] = useState<number>(0)
	const [Palantakproduction, SetPalantakproduction] = useState<number>(0)
	const [Energiaproduction, SetEnergiaproduction] = useState<number>(0)
	const [Hoproduction, SetHoproduction] = useState<number>(0)

	const MegacreditObj: resourceProps = {
		name: "Megacredit",
		amount: Megacredit,
		production: Megacreditproduction,
		onChange: (increment: number) => {
			SetMegacredit(Megacredit + increment)
		},
		productionchange: (increment: number) => {
			SetMegacreditproduction(Megacreditproduction + increment)
		}
	}
	const AcelObj: resourceProps = {
		name: "Acél",
		amount: Acel,
		production: Acelproduction,
		onChange: (increment: number) => {
			SetAcel(Acel + increment)
		},
		productionchange: (increment: number) => {
			SetAcelproduction(Acelproduction + increment)
		}
	}
	const TitanObj: resourceProps = {
		name: "Titán",
		amount: Titan,
		production: Titanproduction,
		onChange: (increment: number) => {
			SetTitan(Titan + increment)
		},
		productionchange: (increment: number) => {
			SetTitanproduction(Titanproduction + increment)
		}
	}
	const PalantakObj: resourceProps = {
		name: "Palantak",
		amount: Palantak,
		production: Palantakproduction,
		onChange: (increment: number) => {
			SetPalantak(Palantak + increment)
		},
		productionchange: (increment: number) => {
			SetPalantakproduction(Palantakproduction + increment)
		}
	}
	const EnergiaObj: resourceProps = {
		name: "Energia",
		amount: Energia,
		production: Energiaproduction,
		onChange: (increment: number) => {
			SetEnergia(Energia + increment)
		},
		productionchange: (increment: number) => {
			SetEnergiaproduction(Energiaproduction + increment)
		}
	}
	const HoObj: resourceProps = {
		name: "Ho",
		amount: Ho,
		production: Hoproduction,
		onChange: (increment: number) => {
			SetHo(Ho + increment)
		},
		productionchange: (increment: number) => {
			SetHoproduction(Hoproduction + increment)
		}
	}

	const handleSubmit = (e:FormEvent) => {
		e.preventDefault()
		SetMegacredit(Megacredit + Megacreditproduction)
	}

	useEffect(() => {
		localStorage.setItem("Megacredit", Megacredit.toString())
	}, [Megacredit])

	useEffect(() => {
		localStorage.setItem("Megacreditprod", Megacreditproduction.toString())
	}, [Megacreditproduction])

	return (
		<form action="" onSubmit={handleSubmit}>
			<div className="container">
				<PlayerName/>
				<Resource {...MegacreditObj}/>
				<Resource {...AcelObj}/>
				<Resource {...TitanObj}/>
				<Resource {...PalantakObj}/>
				<Resource {...EnergiaObj}/>
				<Resource {...HoObj}/>

				<button type="submit" className="nextRound">next round</button>
			</div>
		</form>
	)
}

export default App
