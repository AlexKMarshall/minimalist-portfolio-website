type Props = {}
export function DownArrows(props: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14"
      width="16"
      height="14"
    >
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 9l8 4 8-4" />
        <path opacity=".5" d="M0 5l8 4 8-4" />
        <path opacity=".25" d="M0 1l8 4 8-4" />
      </g>
    </svg>
  )
}
