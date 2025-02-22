import { FileUpload, type FileUploadRootProps } from '../'

export const ComponentUnderTest = (props: FileUploadRootProps) => (
  <FileUpload.Root {...props}>
    {(api) => {
      if (api.files.length < 1) api.setFiles([new File([''], 'test.jpg', { type: 'image/jpg' })])

      return (
        <>
          <FileUpload.Dropzone>
            <FileUpload.Label>Drag your file(s) here</FileUpload.Label>
          </FileUpload.Dropzone>
          <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
          <FileUpload.ItemGroup>
            {api.files.map((file) => (
              <FileUpload.Item key={file.name} file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview>FileIcon</FileUpload.ItemPreview>
                <FileUpload.ItemPreviewImage />
                <FileUpload.ItemName>{file.name}</FileUpload.ItemName>
                <FileUpload.ItemSizeText>{api.getFileSize(file)}</FileUpload.ItemSizeText>
                <FileUpload.ItemDeleteTrigger onClick={() => api.deleteFile(file)}>
                  Remove
                </FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))}
          </FileUpload.ItemGroup>
        </>
      )
    }}
  </FileUpload.Root>
)
