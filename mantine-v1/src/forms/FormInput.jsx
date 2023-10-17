import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';


function Demo() {

  const form = useForm({
    initialValues: {
      FullName: '',
      Email: '',
      DateOfBirth: null,
    },
  });

  return (
    <Box>
      <Container>
        <h1>Personal Details</h1>
        <Grid>
          <Grid.Col span={6}>
            <TextInput label="Full Name" placeholder="Enter your full name" {...form.getInputProps('FullName')} />
            <TextInput label="Mobile Number" placeholder="Enter your phone number" {...form.getInputProps('MobileNumber')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps('Email')} />
            <DateInput valueFormat="YYYY MMM DD" label="Date of Birth" placeholder="select your DOB" />
          </Grid.Col>
          <Grid.Col span={6}>
          <Select
          checkIconPosition="left"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
      />
      <TextInput label="Mobile Number" placeholder="Enter your phone number" {...form.getInputProps('MobileNumber')} />
          <Select
          checkIconPosition="left"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
      />
      
          </Grid.Col>
          
        </Grid>
      </Container>
    </Box>
  );
}

export default Demo;
