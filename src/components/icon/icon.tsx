import {
  Close,
  DownArrows,
  Github,
  Hamburger,
  LinkedIn,
  Twitter,
} from './icons'

const icons = {
  close: Close,
  downArrows: DownArrows,
  github: Github,
  hamburger: Hamburger,
  linkedIn: LinkedIn,
  twitter: Twitter,
}

type Props = { icon: keyof typeof icons }
export function Icon({ icon }: Props): JSX.Element {
  const IconComponent = icons[icon]

  return <IconComponent />
}
