export type resourceProps = {
    name: string;
    amount: number;
    production: number;
    onChange: (increment: number) => void;
    productionchange: (increment: number) => void;
}

const Resource = (props: resourceProps) => {
    return (
        <div className="resourceContainer">
            <p>{props.name}: <span>{props.amount}</span></p>

            <div className="buttonContainer">
                <button type="button" onClick={() => props.onChange(-1)}>-</button>
                <button type="button" onClick={() => props.onChange(+1)}>+</button>
            </div>

            <div className="productionContainer">
                <p>Termelés: <span>{props.production}</span></p>

                <div className="buttonContainer">
                    <button type="button" onClick={() => props.productionchange(-1)}>-</button>
                    <button type="button" onClick={() => props.productionchange(+1)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Resource