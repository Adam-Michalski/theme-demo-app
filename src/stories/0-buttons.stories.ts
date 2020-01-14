import {moduleMetadata, storiesOf} from '@storybook/angular';
import {NavbarModule} from "../app/navbar/navbar.module";


storiesOf('Navbar', module)
  .addDecorator(
    moduleMetadata({
      imports: [NavbarModule],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-navbar></app-navbar>`,
    };
  });
