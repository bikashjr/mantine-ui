import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container, Select,Space} from '@mantine/core';


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
        <h3>Citizenship Details</h3>
        <Grid>
        <Grid.Col span={6}>
        <TextInput label="Citizenship Number" placeholder="Enter your citizenship number" {...form.getInputProps('Citizenship')} />
        <Space h="lg" />
        <TextInput label="Mobile Number" placeholder="Enter your phone number" {...form.getInputProps('MobileNumber')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <TextInput label="Email" placeholder="Enter your email" {...form.getInputProps('Email')} />
        <Space h="lg" />
        <TextInput label="Date of birth" placeholder="Enter your Date of birth" {...form.getInputProps('Email')} />
      </Grid.Col>
      <Grid.Col span={6}>
        <Select
          label="Gender"
          placeholder="Enter your gender"
          data={['Male', 'Female', 'Other']}
        />
      <Space h="lg" />
      <TextInput label="Nationality" placeholder="Enter your Nationality" {...form.getInputProps('Nationality')} />
      </Grid.Col>
      <Grid.Col span={6}>
      <TextInput label="Martial Status" placeholder="Select Martial Status" {...form.getInputProps('MartialStatus')} />
      <Space h="lg" />
        <TextInput label="Education" placeholder="Enter your education" {...form.getInputProps('Education')} />
      </Grid.Col>
      </Grid>
      </Container>
    </Box>
  );
}

export default Demo;
