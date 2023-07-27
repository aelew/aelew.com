export function DotPattern() {
  return (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
        aria-hidden
      >
        <defs>
          <pattern
            patternContentUnits="userSpaceOnUse"
            patternUnits="userSpaceOnUse"
            id="radial"
            height={16}
            width={16}
            x={0}
            y={0}
          >
            <circle cx={1} cy={1} r={1} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#radial)" />
      </svg>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(300px, rgba(120, 119, 198, 0.1), rgba(0, 0, 0, 0))'
        }}
      ></div>
    </>
  );
}
