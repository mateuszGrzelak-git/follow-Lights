import Home from "../page";
import Cards from "./ui/Cards"
import NewBlog from "./new-blog/page";

export default function Blog()
{
    return <>
    <Home />
    <Cards />
        <div className="flex justify-center gap-4">
              <a
                href="/blog/new-blog"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-xl"
              >
                Create new blog
              </a>
        </div>
    </>
}