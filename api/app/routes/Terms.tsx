import { Link, List, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router";
import {
  LegalPage,
  Section,
} from "~/components/Legal/LegalPage.tsx";
import { privacy } from "~/routing.ts";

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="October 9, 2026">
      <Section title="Who we are">
        <Text>
          Meerkat is run by the Meerkat team.
        </Text>
      </Section>

      <Section title="Using Meerkat">
        <Text>
          Meerkat lets you ask questions, vote and react during conference
          talks. By using it, including asking a question, voting or
          reacting, you agree to these terms.
        </Text>
      </Section>

      <Section title="Your questions">
        <Text>
          You keep ownership of what you write. By posting, you let us show
          it to the audience, speakers and organizers of that session, on
          screens in the room, and in the session's question list
          afterwards.
        </Text>
        <Text>
          Your display name and activity (questions asked, answered and
          votes received) appear on the conference leaderboard.
        </Text>
      </Section>

      <Section title="What's not allowed">
        <List.Root listStyleType="disc" paddingLeft="5">
          <List.Item>Harassment, threats or hate speech</List.Item>
          <List.Item>Spam or advertising</List.Item>
          <List.Item>Pretending to be someone else</List.Item>
          <List.Item>Sharing other people's personal information</List.Item>
          <List.Item>Anything illegal or that infringes others' rights</List.Item>
        </List.Root>
      </Section>

      <Section title="Moderation">
        <Text>
          Questions are limited in length and number per session, and
          automatic limits slow down rapid posting. Conference organizers
          and speakers can hide or remove questions, and we may remove
          content or block access when these terms are broken.
        </Text>
        <Text>
          If we restrict your content or access, we'll tell you why where we
          can.
        </Text>
      </Section>

      <Section title="No guarantees">
        <Text>
          Meerkat is free to use. We work hard to keep it running, but we
          can't promise it will always be available or error-free.
        </Text>
      </Section>

      <Section title="Liability">
        <Text>
          We are fully liable for damage caused intentionally or through gross
          negligence, and for injury to life, body or health.
        </Text>
        <Text>
          For slight negligence, we are only liable if we breach an obligation
          that is essential for the service to work, and only up to the damage
          that is typical and foreseeable. Otherwise, we are not liable for
          slight negligence.
        </Text>
      </Section>

      <Section title="Privacy">
        <Text>
          How we handle your data is explained in our{" "}
          <Link asChild>
            <ReactRouterLink to={privacy()}>Privacy Policy</ReactRouterLink>
          </Link>.
        </Text>
      </Section>

      <Section title="Changes">
        <Text>
          We'll let you know in the app about significant changes to these
          terms.
        </Text>
      </Section>

      <Section title="Governing law">
        <Text>
          These terms are governed by the laws of Germany. If you live in
          another EU country, you keep the protection of its consumer laws.
        </Text>
      </Section>
    </LegalPage>
  );
}
