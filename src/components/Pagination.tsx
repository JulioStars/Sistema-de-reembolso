import { Button } from "./Button";
import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"

type Props = {
    current: number
    total: number
    onNext: () => void
    onPrevious: () => void
}

export function Pagination({current, total, onNext, onPrevious}: Props) {
    return (
        <div className="flex flex-1 items-center gap-4 justify-center">
            <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
                <img src={leftSvg} alt="Icone de voltar" />
            </Button>

            <span className="text-sm text-gray-200">{current}/{total}</span>

            <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
                <img src={rightSvg} alt="Icone de avançar" />
            </Button>
        </div>
    )
}