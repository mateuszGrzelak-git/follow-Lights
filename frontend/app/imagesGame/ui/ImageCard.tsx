"use client";

export default function ImageCard({
  src,
  label
}: {
  src: string;
  label: string;
}) {
  return (
    <div className="card bg-base-100 w-40 shadow-md hover:shadow-xl transition cursor-pointer">
      <figure className="px-2 pt-2">
        <img
          src={src}
          alt={label}
          className="rounded-xl object-cover w-full h-32"
        />
      </figure>
      <div className="card-body p-2 text-center">
        <p className="text-sm opacity-70">{label}</p>
      </div>
    </div>
  );
}
