import type { ReactNode } from "react";
import { Box, Flex, Grid, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink, useParams } from "react-router";
import { useDocumentTitle } from "@uidotdev/usehooks";
import {
  LuChevronRight,
  LuExternalLink,
} from "react-icons/lu";
import { useEvent } from "../hooks/use-event.ts";
import { useLinks } from "~/components/NavigationDrawer/use-links.ts";
import { NavigationDrawer } from "~/components/NavigationDrawer/index.tsx";
import { WEBSITE_URL } from "~/contact.ts";
import { privacy, terms } from "~/routing.ts";

export default function About() {
  const { uid } = useParams();
  const { data: eventData } = useEvent(uid);
  const event = eventData?.data;
  const navLinks = useLinks({ event });
  const conferenceName = event?.conference.name;

  useDocumentTitle(
    conferenceName ? `About & Help | ${conferenceName}` : "About & Help",
  );

  return (
    <div className="layout">
      <header className="header">
        {/* Same header row as the Q&A page: menu left, conference centered */}
        <Grid
          templateColumns="1fr minmax(0, auto) 1fr"
          gap="1"
          alignItems="center"
          padding="0 1rem 0 1rem"
          marginBottom="2"
          boxShadow="0 6px 10px -8px color-mix(in srgb, var(--chakra-colors-brand-solid) 60%, transparent)"
        >
          <nav>
            <NavigationDrawer navLinks={navLinks} />
          </nav>
          <Text as="span" textStyle="sm" fontWeight="medium" truncate>
            {conferenceName}
          </Text>
        </Grid>
        <Box padding="0.5rem 1rem 0">
          <Heading as="h1" size="xl">About & Help</Heading>
        </Box>
      </header>
      <main className="content">
        <Flex direction="column" gap="6" paddingY="2">
          <Box as="section">
            <Text color="fg.muted">
              Meerkat lets you ask questions, vote on the ones you want
              answered, and react live during talks, so speakers hear from
              the whole room, not just the front row.
            </Text>
          </Box>

          <Box as="section">
            <Flex as="ul" direction="column" gap="2">
              <ActionLink
                href={WEBSITE_URL}
                external
                icon={<LuExternalLink />}
                title="Visit meerkat.events"
              />
            </Flex>
          </Box>

          <Flex as="nav" justifyContent="center" gap="2" textStyle="xs">
            {[
              { label: "Terms", to: terms() },
              { label: "Privacy", to: privacy() },
            ].map((link, i) => (
              <Flex key={link.to} gap="2" color="fg.muted">
                {i > 0 && <span aria-hidden="true">·</span>}
                <Link asChild color="fg.muted">
                  <ReactRouterLink to={link.to}>{link.label}</ReactRouterLink>
                </Link>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </main>
    </div>
  );
}

interface ActionLinkProps {
  href: string;
  icon: ReactNode;
  title: string;
  external?: boolean;
}

function ActionLink(
  { href, icon, title, external }: ActionLinkProps,
) {
  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        display="flex"
        alignItems="center"
        gap="3"
        padding="3"
        borderRadius="lg"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="transparent"
        textDecoration="none"
        _hover={{ borderColor: "brand.solid", textDecoration: "none" }}
        _focusVisible={{ borderColor: "brand.solid" }}
      >
        <Flex
          flexShrink="0"
          width="10"
          height="10"
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
          bg="brand.solid/15"
          color="brand.solid"
        >
          <Icon boxSize="5">{icon}</Icon>
        </Flex>
        <Text flex="1" minW="0" fontWeight="medium" color="fg">
          {title}
        </Text>
        <Icon color="fg.muted" flexShrink="0">
          <LuChevronRight />
        </Icon>
      </Link>
    </li>
  );
}
