import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container,Space } from '@mantine/core';

export const Citizenship = () => {

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
        <h1>Citizenship Details</h1>
        <Grid>
          <Grid.Col span={6}>
            <TextInput label="Citizenship Number" placeholder="Enter your citizenship number" {...form.getInputProps('Citizenship')} />
            <Space h="lg" />
            <TextInput label="Date of Issue" placeholder="Enter the date issue" {...form.getInputProps('MobileNumber')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Issuing District" placeholder="Enter your email" {...form.getInputProps('Email')} />
            <Space h="lg" />
            <TextInput label="Permanent Address" placeholder="Enter your Permanent Address" {...form.getInputProps('Email')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Municipality/VDC" placeholder="Enter your Municipality/VDC" {...form.getInputProps('Nationality')} />
            <Space h="lg" />
            <TextInput label="District" placeholder="Enter your District Name" {...form.getInputProps('Nationality')} />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Ward No" placeholder="Enter your Ward No" {...form.getInputProps('MartialStatus')} />
            <Space h="lg" />
            <TextInput label="Tole" placeholder="Enter your Tole Name" {...form.getInputProps('Education')} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

