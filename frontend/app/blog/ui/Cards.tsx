import { BiDislike, BiLike } from "react-icons/bi"
import Card from "./Card"

export default function Cards()
{
    return <>

<div className="card w-96 bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Small Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions relative">
      <BiLike></BiLike>
      <BiDislike></BiDislike>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions relative">
      <BiLike></BiLike>
      <BiDislike></BiDislike>
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Large Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions relative">
      <BiLike></BiLike>
      <BiDislike></BiDislike>  
    </div>
  </div>
</div>

<div className="card w-96 bg-base-100 card-xl shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Xlarge Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions relative">
      <BiLike></BiLike>
      <BiDislike></BiDislike>
    </div>
  </div>
</div>
    </>
}