import { mergeProps } from '@zag-js/solid'
import { type JSX } from 'solid-js/jsx-runtime'
import { createSplitProps } from '../create-split-props'
import { ark, type ArkComponent, type HTMLArkProps } from '../factory'
import { runIfFn } from '../run-if-fn'
import type { Assign } from '../types'
import { FileUploadProvider } from './file-upload-context'
import { useFileUpload, type UseFileUploadProps, type UseFileUploadReturn } from './use-file-upload'

interface ElementProps extends UseFileUploadProps {
  children?: JSX.Element | ((api: UseFileUploadReturn) => JSX.Element)
}

export interface FileUploadRootProps extends Assign<HTMLArkProps<'div'>, ElementProps> {}

export const FileUploadRoot: ArkComponent<'div', FileUploadRootProps> = (
  props: FileUploadRootProps,
) => {
  const [fileUploadProps, localProps] = createSplitProps<UseFileUploadProps>()(props, [
    'accept',
    'allowDrop',
    'dir',
    'disabled',
    'files',
    'getRootNode',
    'id',
    'ids',
    'locale',
    'maxFiles',
    'maxFileSize',
    'minFileSize',
    'name',
    'onFileAccept',
    'onFileReject',
    'onFilesChange',
    'translations',
    'validate',
  ])

  const api = useFileUpload(fileUploadProps)
  const mergedProps = mergeProps(() => api().rootProps, localProps)
  const getChildren = () => runIfFn(localProps.children, api)

  return (
    <FileUploadProvider value={api}>
      <ark.div {...mergedProps}>{getChildren()}</ark.div>
    </FileUploadProvider>
  )
}
