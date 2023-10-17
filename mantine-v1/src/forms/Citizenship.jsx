import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container, Select } from '@mantine/core';


function Demo() {

  const form = useForm({
    initialValues: {
      Citizenship: '',
      Email: '',
      DateOfBirth: null,
    },
  });

  return (
    <Box>
      <Container>
        <h6>Citizenship Details</h6>
        <Grid>
          <Grid.Col span={6}>
            <TextInput label="Citizenship Number" placeholder="Enter your citizenship number" {...form.getInputProps('Citizenship')} />
            <TextInput label="Mobile Number" placeholder="Enter your phone number" {...form.getInputProps('MobileNumber')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps('Email')} />
            <TextInput label="Date of birth" placeholder="Enter your Date of birth" {...form.getInputProps('Email')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Gender"
              placeholder="Enter your gender"
              data={['Male', 'Female', 'Other']}
            />
            <TextInput label="Nationality" placeholder="Enter your Nationality" {...form.getInputProps('Nationality')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Martial Status" placeholder="Select Martial Status" {...form.getInputProps('MartialStatus')} />
            <TextInput label="Education" placeholder="Enter your education" {...form.getInputProps('Education')} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default Demo;
