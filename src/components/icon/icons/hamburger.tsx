import { AllHTMLAttributes, SVGAttributes } from 'react'

type Props = {}
export function Hamburger(props: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 13"
      width="24"
      height="13"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
      </g>
    </svg>
  )
}
