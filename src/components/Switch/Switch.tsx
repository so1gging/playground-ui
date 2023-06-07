import {ReactElement} from 'react'


type Case = string
interface Props {
  value: Case
  caseBy: Record<Case, ReactElement>
  defaultComponent?: ReactElement | null
}
function Switch({value, caseBy, defaultComponent = null}: Props) {

  if (value === null) {
    return defaultComponent
  }

  return caseBy[value] ?? defaultComponent
}

export default Switch
