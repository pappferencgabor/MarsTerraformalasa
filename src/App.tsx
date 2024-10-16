import { FormEvent, useState } from "react"
import "./app.css"
import PlayerName from "./components/PlayerName/PlayerName"
import Resource from "./components/Resource/Resource"
import { resourceProps } from "./components/Resource/Resource"

function App() {
	const [Megacredit, SetMegacredit] = useState<number>(0)
	const [Acel, SetAcel] = useState<number>(0)
	const [Titan, SetTitan] = useState<number>(0)
	const [Palantak, SetPalantak] = useState<number>(0)
	const [Energia, SetEnergia] = useState<number>(0)
	const [Ho, SetHo] = useState<number>(0)

	const [Megacreditproduction, SetMegacreditproduction] = useState<number>(0)
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
