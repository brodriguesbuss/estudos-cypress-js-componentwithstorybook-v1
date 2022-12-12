# Getting Started with Storybook and Cypress


This project was created with the aim of automating component testing.
In this project, the storybook was used as a tool to create the components and the cypress framework was also used, which is a testing framework.

## Available Scripts

In the project directory, you can run:

### `yarn run cypress open` or `npx cypress open`

 - This command will be used to start the graphical interface of cypress, where it is possible to analyze the execution of the cases and the suites already created.

### `yarn storybook` or `npm run storybook`

- This command will be to start the graphic interface of the storybook that contains all the components.


### Chromatic - Storybook - Visual Tests

 - When committing changes to this project, it is configured with the storybook visual test validator, called Chromatic. The changes will be uploaded to github, but there will be a checklist that must be manually validated. Following this step-by-step:

1. Go to https://www.chromatic.com/start

2. Wait for the new build to be generated. It will be completed when it is in Orange color, indicating that it remains to be revised

3. When opening it, just click on the component to be reviewed. And accept or reject the changes.

4. If you refuse, in github, the commit history will show that this commit was not accepted. The code will not rollout, as it has not been configured, it will only record that it was not accepted by the reviewer.
