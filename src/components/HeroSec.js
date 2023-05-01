import {
createStyles,
Image,
Container,
Title,
Button,
Group,
Text,
List,
ThemeIcon,
rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from '../assets/image.svg';

const useStyles = createStyles((theme) => ({
inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
},

content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
    maxWidth: '100%',
    marginRight: 0,
    },
},

title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
    fontSize: rem(28),
    },
},

control: {
    [theme.fn.smallerThan('xs')]: {
    flex: 1,
    },
},

image: {
    src: image,
    flex: 1,

    [theme.fn.smallerThan('md')]: {
        display: 'none',
    },
},

highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
},
}));

export function HeroSec() {
const { classes } = useStyles();
return (
    <div>
    <Container>
        <div className={classes.inner}>
        <div className={classes.content}>
            <Title className={classes.title}>
            The <span className={classes.highlight}>best</span> team <br /> of all time
            </Title>
            <Text color="dimmed" mt="md">
            We are proud to introduce you to our dedicated team of over 100 diligent, compassionate, and trustworthy employees who work tirelessly to ensure that our customers receive the best possible service. Our team is comprised of individuals who are not only passionate about their work but also possess a wealth of knowledge and experience in their respective fields. From customer service representatives to technicians, each member of our team plays a crucial role in maintaining our high standards of excellence.
            </Text>

            <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
                <ThemeIcon size={20} radius="xl">
                <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
            }
            >
            <List.Item>
                <b>Qualified and experienced</b> – our staff comprises dedicated professionals with years of experience in education and a passion for helping students succeed
            </List.Item>
            <List.Item>
                <b>Diversity and inclusion</b> – we value diversity and inclusivity, and our team reflects a range of backgrounds, perspectives, and experiences
            </List.Item>
            <List.Item>
                <b>Student-centered</b> – Our staff create learning environments that encourage students to take ownership of their learning, explore their interests, and develop critical thinking and problem-solving skills.
            </List.Item>
            </List>

            <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
                Let's introduce them
            </Button>
            </Group>
        </div>
        <Image src={image} className={classes.image} />
        </div>
    </Container>
    </div>
);
}
