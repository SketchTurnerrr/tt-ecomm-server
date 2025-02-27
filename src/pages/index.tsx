import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { execute, parse } from 'graphql';
import { schema } from '../../graphql/schema';
import { useEffect, useState } from 'react';

function Index() {
  const [state, setState] = useState<string | undefined>();
  useEffect(() => {
    const myGraphql = async () => {
      const myQuery = parse(/* GraphQL */ `
        query {
          hello
        }
      `);

      const result = await execute({
        schema,
        document: myQuery,
      });

      console.log(result);
    };

    myGraphql();
  }, []);

  return (
    <Container height='100vh'>
      <Hero />
      <Main>
        <Text color='text'>
          <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>TypeScript</Code>.
        </Text>

        <List spacing={3} my={0} color='text'>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            <ChakraLink
              isExternal
              href='https://chakra-ui.com'
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color='green.500' />
            <ChakraLink
              isExternal
              href='https://nextjs.org'
              flexGrow={1}
              mr={2}
            >
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
}

export default Index;
