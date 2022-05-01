import { Message } from "../Message";
import { render, screen } from "@testing-library/react";

describe('Message', () => {
    it('renders passed text', () => {
        render (
            <Message text="Text" author="author" role="sender" />
        );
    
        const text = screen.getByText("Text");
        expect(text).toBeDefined();
    });

    it('matches snapshot', () => {
        const component = render(<Message text="Text" author="author" role="sender" /> );

        expect(component).toMatchSnapshot();
    });
});