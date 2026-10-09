import type { ReactNode } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { useDocumentTitle } from "@uidotdev/usehooks";
import { LuArrowLeft } from "react-icons/lu";

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, updated, children }: LegalPageProps) {
  const navigate = useNavigate();

  useDocumentTitle(`${title} | Meerkat`);

  // Legal pages are often opened from a direct link, so fall back to home
  // when there's nothing to go back to
  const goBack = () =>
    globalThis.history.length > 1
      ? navigate(-1)
      : navigate("/");

  return (
    <div className="layout">
      <header className="header">
        <Box padding="0.5rem 1rem 0">
          <Button
            variant="plain"
            colorPalette="gray"
            color="fg"
            size="sm"
            paddingX="0"
            onClick={goBack}
          >
            <LuArrowLeft /> Back
          </Button>
          <Heading as="h1" size="xl">{title}</Heading>
          <Text textStyle="xs" color="fg.muted">Last updated {updated}</Text>
        </Box>
      </header>
      <main className="content">
        <Flex direction="column" gap="5" paddingY="4">
          {children}
        </Flex>
      </main>
    </div>
  );
}

export function Section(
  { title, children }: { title: string; children: ReactNode },
) {
  return (
    <Box as="section">
      <Heading as="h2" size="md" marginBottom="2">{title}</Heading>
      <Flex direction="column" gap="2" color="fg.muted" textStyle="sm">
        {children}
      </Flex>
    </Box>
  );
}
