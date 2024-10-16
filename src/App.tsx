import { useState } from "react"
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

	const MegacreditObj: resourceProps = {
		name: "Megacredit",
		amount: Megacredit,
		onChange: (increment: number) => {
			SetMegacredit(Megacredit + increment)
		}
	}
	const AcelObj: resourceProps = {
		name: "Acél",
		amount: Acel,
		onChange: (increment: number) => {
			SetAcel(Acel + increment)
		}
	}
	const TitanObj: resourceProps = {
		name: "Titán",
		amount: Titan,
		onChange: (increment: number) => {
			SetTitan(Titan + increment)
		}
	}
	const PalantakObj: resourceProps = {
		name: "Palantak",
		amount: Palantak,
		onChange: (increment: number) => {
			SetPalantak(Palantak + increment)
		}
	}
	const EnergiaObj: resourceProps = {
		name: "Energia",
		amount: Energia,
		onChange: (increment: number) => {
			SetEnergia(Energia + increment)
		}
	}
	const HoObj: resourceProps = {
		name: "Ho",
		amount: Ho,
		onChange: (increment: number) => {
			SetHo(Ho + increment)
		}
	}

	return (
		<div className="container">
			<PlayerName/>
			<Resource {...MegacreditObj}/>
			<Resource {...AcelObj}/>
			<Resource {...TitanObj}/>
			<Resource {...PalantakObj}/>
			<Resource {...EnergiaObj}/>
			<Resource {...HoObj}/>
		</div>
	)
}

export default App
