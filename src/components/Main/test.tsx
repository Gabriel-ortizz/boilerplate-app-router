import { render , screen } from '@testing-library/react'

import Main from '.'
import container from 'postcss/lib/container'

describe('<Main />', () => {
  it('should render the heading', () => {
    
    const{container} = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
  })