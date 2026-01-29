import { BiDislike, BiLike } from "react-icons/bi"

export default function Card(cardTitle: string)
{
    return (
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className={cardTitle}>
                <h2 className="title">Xsmall Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions relative">
                    <BiLike></BiLike>
                    <BiDislike></BiDislike>
                </div>
            </div>
        </div>
    );
}