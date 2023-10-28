import { useForm } from '@mantine/form';
import { TextInput, Box, Grid, Container, Space, FileInput } from '@mantine/core';

export const Documents = () => {

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
        <h1>Documents</h1>
        <Grid>
          <Grid.Col span={6}>
            <TextInput label="Citizenship" placeholder="Enter your citizenship" {...form.getInputProps('Citizenship')} />
            <Space h="lg" />
            <FileInput label="Upload files" placeholder="Upload files" multiple />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput label="Passport" placeholder="Enter your passport" {...form.getInputProps('Email')} />
            <Space h="lg" />
            <TextInput label="Signature" placeholder="Signature" {...form.getInputProps('Email')} />
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
