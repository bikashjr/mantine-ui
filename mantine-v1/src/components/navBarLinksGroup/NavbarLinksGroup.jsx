import { useState } from 'react';
import { Group, Box, Collapse, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';

import classes from './NavbarLinksGroup.module.css';

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" align="center">
          <ThemeIcon size={30}>
            <Icon style={{ width: '18px', height: '18px' }} />
          </ThemeIcon>
          <Box ml="md">{label}</Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              size={16}
              style={{
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box minHeight={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}
