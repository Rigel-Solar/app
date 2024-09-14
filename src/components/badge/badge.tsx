import * as C from "./styles";

export function Badge({$status}: C.BadgeProps) {
  return (
    <C.Badge $status={$status}>
      {$status}
    </C.Badge>
  )
}