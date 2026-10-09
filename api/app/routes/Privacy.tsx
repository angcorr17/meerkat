import { List, Text } from "@chakra-ui/react";
import {
  LegalPage,
  Section,
} from "~/components/Legal/LegalPage.tsx";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 9, 2026">
      <Section title="Who is responsible">
        <Text>
          The Meerkat team is responsible for your data on Meerkat (the
          "controller" under the GDPR).
        </Text>
      </Section>

      <Section title="What we collect and why">
        <List.Root listStyleType="disc" paddingLeft="5" gap="2">
          <List.Item>
            <strong>Anonymous session.</strong>{" "}
            You can use Meerkat without an account. We create an anonymous
            session and a random display name so you can ask and vote.
          </List.Item>
          <List.Item>
            <strong>Email address</strong>, if you choose to log in. Used
            only to send you a login code.
          </List.Item>
          <List.Item>
            <strong>Ticket proof</strong>, if you connect Zupass or Devcon
            SSO. We verify that you attend the conference without learning
            who you are.
          </List.Item>
          <List.Item>
            <strong>Questions, votes and reactions</strong>{" "}
            you post, so the session works and the leaderboard can count
            them.
          </List.Item>
          <List.Item>
            <strong>Technical data</strong>{" "}
            such as IP address, device and browser, to keep the service
            secure, prevent abuse and fix errors.
          </List.Item>
        </List.Root>
        <Text>
          We process this to provide the service you asked for (GDPR Art.
          6(1)(b)) and for our legitimate interest in keeping it secure
          (Art. 6(1)(f)). We don't sell your data or use it for advertising.
        </Text>
      </Section>

      <Section title="Who else processes it">
        <List.Root listStyleType="disc" paddingLeft="5">
          <List.Item>
            Supabase: database and login, hosted in Frankfurt, Germany
          </List.Item>
          <List.Item>Sentry: error tracking, if enabled</List.Item>
          <List.Item>
            Conference organizers and speakers see the questions posted in
            their sessions
          </List.Item>
        </List.Root>
        <Text>
          Your data is stored and processed in the European Union.
        </Text>
      </Section>

      <Section title="Your rights">
        <Text>
          You can ask to see, correct, delete or export your data, or object
          to how we use it. You can also complain to a data protection
          authority.
        </Text>
      </Section>
    </LegalPage>
  );
}
