import '@mantine/core/styles.css';
import { SideNav } from './components/sidenav/index';
import { Group, MantineProvider, createTheme } from '@mantine/core';
import CStepper from './components/stepper/Stepper';

const theme = createTheme({

});

const App = () => {

  return (
    <MantineProvider theme={theme}>
    <Group>
    <SideNav />
    <CStepper />
    </Group>
    </MantineProvider>
  );
}

export default App;