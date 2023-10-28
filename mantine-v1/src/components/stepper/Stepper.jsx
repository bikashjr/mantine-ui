import { useState } from 'react';
import { Stepper, Button, Group, Center, Container, Space } from '@mantine/core';

import { FormInput, Citizenship, Documents, Address } from '../forms';

export default function CStepper() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 4 ? 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    return (
        <>
            <Container>
                <Space h="lg" />
                <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="Personal Details" description="">
                        <FormInput />
                    </Stepper.Step>
                    <Stepper.Step label="Citizenship" description="">
                        <Citizenship />
                    </Stepper.Step>
                    <Stepper.Step label="Address" description="">
                        <Address />
                    </Stepper.Step>
                    <Stepper.Step label="Documents" description="">
                        <Documents />
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
