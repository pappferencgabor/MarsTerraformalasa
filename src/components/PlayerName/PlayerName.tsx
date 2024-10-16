import React, { FormEvent, useState } from "react"
import styles from './PlayerName.module.css'

const PlayerName = () => {
    const [isPlayerEdit, setIsPlayerEdit] = useState<boolean>(true)
    const [PlayerName, setPlayerName] = useState<string>("PlayerName")
    const handleIsEdit = () => {
        setIsPlayerEdit(!isPlayerEdit)
    }

    const handlePlayerName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value)
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        setIsPlayerEdit(!isPlayerEdit)
    }

    return (
        <>
            {
                isPlayerEdit ? 
                (
                    <div onClick={handleIsEdit} className={styles.playerName}>
                        <h1>{PlayerName}</h1>
                    </div>
                ) :
                (
                    <form className={styles.nameInput} action="" onSubmit={handleSubmit}>
                        <input type="text" value={PlayerName} onChange={handlePlayerName}/>
                        <button type="submit">save</button>
                    </form>
                )
            }
        </>
    )
}

export default PlayerName