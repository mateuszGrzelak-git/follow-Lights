import Home from "@/app/page";

export default function NewBlog() 
{
    return <>
    <Home/>
    <div className="flex justify-center">
      <div className="avatar">
          <div className="w-24 rounded">
              <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
      </div>
    </div>
    <div className="flex justify-center">
      <fieldset className="fieldset p-4 text-center">
        <legend className="fieldset-legend mx-auto">Blog Title</legend>
        <input type="text" className="input" placeholder="Type here" />
      </fieldset>
    </div>
    <div className="flex justify-center">

      <textarea placeholder="Blog" className="textarea textarea-xl p-4 w-full max-w-5xl"></textarea>
    </div>
    <div className="flex justify-center gap-4">
      <a
        rel="noopener noreferrer"
        className="btn btn-outline rounded-xl"
      >
        Post Blog
      </a>
      </div>
    </>
}