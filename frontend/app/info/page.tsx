import Link from "next/link";
import Home from "../page";

export default function info() {
  return <>
    <Home />
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="card bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body space-y-4">
            <h1 className="text-3xl font-bold text-center">ℹ️ About Follow-Lights</h1>

            <p className="text-base leading-relaxed">
              <strong>Follow-Lights</strong> is a fast-paced memory training game inspired by
              competitive formats like <em>Memory League</em>. The goal is simple: observe the
              sequence, remember it, and reproduce it as accurately and as quickly as possible.
            </p>

            <div className="divider">How it works</div>

            <ul className="list-disc list-inside space-y-2">
              <li>Watch the highlighted sequence of lights or cards</li>
              <li>Memorize the order and positions</li>
              <li>Recreate the sequence from memory</li>
              <li>Advance to harder levels with longer and faster sequences</li>
            </ul>

            <div className="divider">Why Follow-Lights?</div>

            <p className="text-base leading-relaxed">
              This app focuses on improving <strong>working memory</strong>, <strong>focus</strong>,
              and <strong>reaction time</strong>. It’s designed both for casual play and for
              serious cognitive training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="stat bg-base-200 rounded-xl">
                <div className="stat-title">Skill</div>
                <div className="stat-value text-lg">Memory</div>
              </div>
              <div className="stat bg-base-200 rounded-xl">
                <div className="stat-title">Mode</div>
                <div className="stat-value text-lg">Solo</div>
              </div>
              <div className="stat bg-base-200 rounded-xl">
                <div className="stat-title">Difficulty</div>
                <div className="stat-value text-lg">Adaptive</div>
              </div>
            </div>

            <div className="divider" />

            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/mateuszGrzelak-git/follow-lights"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-xl"
              >
                Source code
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm opacity-60 mt-4">
          © {new Date().getFullYear()} Follow-Lights · Train smart, play fast
        </p>
      </div>
    </main>
  </>
}
