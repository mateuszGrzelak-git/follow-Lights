import Light from "./ui/light";

let count = 9;

export default function Lights() {
    return <>
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: count }).map((_, index) => (
                <Light key={index} />
            ))}
        </div>




        <p className="text-9xl/[300px]">Wynik</p>
    </>
}
