import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import DisplayText from './displayText';
import"@testing-library/jest-dom/extend-expect";



describe("Test DisplayText",() => {

    it("renders without crashing",() => {

        const {baseElement} = render(<DisplayText />);
        console.log(baseElement.innerHTML);
        expect(baseElement).toBeInTheDocument();

    });

    it("recieves input text",() => {

        const testuser = "testuser";
        const{getByTestId} = render(<DisplayText />);
        const input = getByTestId("user-input");

        fireEvent.change(input,{target: {value:testuser}});
        expect(input).toBeInTheDocument()
        expect(input).toHaveValue(testuser)
    })

    it("shows welcome message", () => {
                const username = "testuser";
                const msg = `Welcome to React testing,${username}`;
                const { getByTestId } = render(<DisplayText />);
                const input = getByTestId("user-input");
                const label = getByTestId("final-msg");
                fireEvent.change(input, { target: { value:username } });
                const btn = getByTestId("input-submit");
                fireEvent.click(btn);
                
                expect(label).toBeInTheDocument();
                expect(label.innerHTML).toBe(msg);
            });

    

    it("matches snapshot", () => {

        const {baseElement} = render(<DisplayText />);
        expect(baseElement).toMatchSnapshot();


    })


    


})