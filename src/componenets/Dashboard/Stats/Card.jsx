import { CometCard } from "../../Aceternity/3DCard/CometCard";

const toneClasses = {
  info: "text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10",
  danger: "text-rose-600 dark:text-rose-300 bg-rose-50 dark:bg-rose-500/10",
  warning:
    "text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10",
  success:
    "text-emerald-600 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10",
};

export default function Card({ label, value, tone = "info" }) {
  return (
    <>
      {/* <NewCard className="p-5 h-full">
        <div className="flex items-center gap-4">
          <div
            className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center ${
              toneClasses[tone] || toneClasses.info
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              {label}
            </div>
            <div className="text-3xl font-semibold text-neutral-900 dark:text-white">
              {value}
            </div>
          </div>
        </div>
      </NewCard> */}
      {/* <article className={`stats-card tone-${tone}`} role="status">
        <div className="stats-body">
          <div className="stats-label">{label}</div>
          <div className="stats-value">{value}</div>
        </div>
      </article> */}
      {/* <CometCard>
        <button
          type="button"
          className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full">
              <img
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                alt="Invite background"
                src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                  opacity: 1,
                }}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
            <div className="text-xs">Comet Invitation</div>
            <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
          </div>
        </button>
      </CometCard> */}
      <CometCard>
        <button
          type="button"
          className="my-10 flex w-[auto] cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
          aria-label="View invite F7RA"
          style={{
            transformStyle: "preserve-3d",
            transform: "none",
            opacity: 1,
          }}
        >
          <div className="p-5 h-full">
            <div className="flex items-center gap-4">
              <div
                className={`h-10 w-10 shrink-0 rounded-xl flex items-center justify-center ${
                  toneClasses[tone] || toneClasses.info
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current" />
              </div>
              <div className="min-w-0">
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {label}
                </div>
                <div className="text-3xl font-semibold text-neutral-900 dark:text-white">
                  {value}
                </div>
              </div>
            </div>
          </div>
        </button>
      </CometCard>
    </>
  );
}
