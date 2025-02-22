import { mergeProps } from '@zag-js/solid'
import { ark, type ArkComponent, type HTMLArkProps } from '../factory'
import { usePopoverContext } from './popover-context'

export interface PopoverDescriptionProps extends HTMLArkProps<'p'> {}

export const PopoverDescription: ArkComponent<'p'> = (props: PopoverDescriptionProps) => {
  const api = usePopoverContext()
  const mergedProps = mergeProps(() => api().descriptionProps, props)

  return <ark.p {...mergedProps} />
}
