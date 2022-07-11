import { render } from '@redwoodjs/testing/web'

import LicenceGeneratorPage from './LicenceGeneratorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LicenceGeneratorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LicenceGeneratorPage />)
    }).not.toThrow()
  })
})
