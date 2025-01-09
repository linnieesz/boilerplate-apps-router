import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    //gera snapshot - apenas para verificação se o html esta mesmo correto
    expect(container.firstChild).toMatchSnapshot()
  })
})
