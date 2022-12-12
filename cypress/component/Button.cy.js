import { Button } from "../../src/stories/Button";
import {composeStories} from '@storybook/testing-react';
import * as stories from '../../src/stories/Button.stories.jsx';
import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount)
const {Primary} = composeStories(stories);


describe("Button", () => {
  it('Validando botão Primary', () => {
    cy.mount(<Primary />);
    cy.get('.storybook-button').click();
    cy.get('.storybook-button')
    .should("have.css", "padding", "11px 20px")
    .and("have.css", "background-color", "rgb(216, 43, 128)")
    .and("have.css", "font-size", "14px")
    .and("have.css", "color", "rgb(255, 255, 255)")
    .and("have.css", "display", "inline-block");

  });
});