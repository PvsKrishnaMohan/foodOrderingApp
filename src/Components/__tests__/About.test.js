import {screen, render} from '@testing-library/react';
import About from '../About';

test('renders the About component', () => {
    render(<About/>);
    const headingElement = screen.getByRole('heading',{name:About});
    expect(headingElement).toBeInTheDocument();
});