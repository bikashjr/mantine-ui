import { Stepper, Button, Group, Center, Container } from '@mantine/core';
import { useState } from 'react';

export default function stepper() {
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Container>
                <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="First step" description="Create an account">
                        <Center mx='auto'> Step 1 content: Create an account </Center>
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                        <Center mx='auto'>Step 2 content: Verify email </Center>
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        <Center mx="auto">Step 3 content: Get full access</Center>
                    </Stepper.Step>
                    <Stepper.Completed>
                    <Center mx="auto">   Completed, click back button to get to previous step </Center>
                    </Stepper.Completed>
                </Stepper>

                <Group justify="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next step</Button>
                </Group>
            </Container>
        </>
    );
}
