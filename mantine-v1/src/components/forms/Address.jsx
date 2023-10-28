import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container, Space } from '@mantine/core';

export const Address = () => {

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
        <h1>Family-Information</h1>
        <Grid>
          <Grid.Col span={6}>
            <TextInput label="Father's Name" placeholder="Enter your father's name" {...form.getInputProps('Citizenship')} />
            <Space h="lg" />
            <TextInput label="Spouse Name" placeholder="Enter your spouse name" {...form.getInputProps('MobileNumber')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Mother's Name" placeholder="Enter your mother's name" {...form.getInputProps('Email')} />
            <Space h="lg" />
            <TextInput label="Children's Name" placeholder="Enter your children's name " {...form.getInputProps('Email')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Municipality/VDC" placeholder="Enter your Nationality" {...form.getInputProps('Nationality')} />
            <Space h="lg" />
            <TextInput label="District" placeholder="Enter your Nationality" {...form.getInputProps('Nationality')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Ward No" placeholder="Select Martial Status" {...form.getInputProps('MartialStatus')} />
            <Space h="lg" />
            <TextInput label="Tole" placeholder="Enter your education" {...form.getInputProps('Education')} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

