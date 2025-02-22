import { toastAnatomy } from '@ark-ui/anatomy'
import { render, screen, waitFor } from '@solidjs/testing-library'
import user from '@testing-library/user-event'
import { Toast } from '../'
import { getExports, getParts } from '../../setup-test'
import { ComponentUnderTest } from './basic'

describe('Toast', () => {
  it.skip.each(getParts(toastAnatomy))('should render part! %s', async (part) => {
    render(() => <ComponentUnderTest />)
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(toastAnatomy))('should export %s', async (part) => {
    expect(Toast[part]).toBeDefined()
  })

  it('should show and hide a toast message', async () => {
    render(() => <ComponentUnderTest />)
    await user.click(screen.getByText('Create Toast'))

    await waitFor(() => expect(screen.queryByText('Title')).toBeVisible())
    await waitFor(() => expect(screen.queryByText('Description')).toBeVisible())

    await user.click(screen.getByText('Close'))

    await waitFor(() => expect(screen.queryByText('Title')).not.toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText('Description')).not.toBeInTheDocument())
  })
})
