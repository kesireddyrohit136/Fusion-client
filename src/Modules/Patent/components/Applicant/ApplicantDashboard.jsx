import React from "react";
import { Button, Card, Text, Box, Divider, Anchor } from "@mantine/core";
import { ArrowRight } from "phosphor-react";
import { Link } from "react-router-dom";
import "./ApplicantDashboard.css"; // Import the CSS file

function SubmitNewApplication() {
  return (
    <Box padding="xl">
      {/* Breadcrumb navigation */}
      <Text className="breadcrumb">
        Home &gt; Patent Management &gt; Applicant
      </Text>

      {/* Header */}
      <Text className="header">Submit New Patent Application</Text>

      {/* Tab options (implemented with react-router navigation links) */}
      <Box className="tab-container">
        <Anchor component={Link} to="/viewapplicationspage" underline={false}>
          View Applications
        </Anchor>
        <Anchor component={Link} to="/saveddraftspage" underline={false}>
          Saved Drafts
        </Anchor>
        <Anchor component={Link} to="/notifications" underline={false}>
          Notifications
        </Anchor>
      </Box>

      {/* Card containing form link */}
      <Card className="card-container">
        <Text className="card-header">Intellectual Property Filing Form</Text>
        <Divider className="card-divider" />
        <Button
          rightIcon={<ArrowRight size={16} />}
          variant="filled"
          className="card-button"
        >
          Submit New Patent Application
        </Button>
      </Card>
    </Box>
  );
}

export default SubmitNewApplication;
=======
import { Stack, Title, Grid, Box, Text, Divider } from "@mantine/core";
import CustomBreadcrumbs from "../../../../components/Breadcrumbs";

function ApplicantDashboard() {
  return (
    <Stack>
      {/* Breadcrumbs */}
      <CustomBreadcrumbs />

      {/* Page Title */}
      <Title order={2} mt="md">
        Applicant Dashboard
      </Title>

      {/* Dashboard Sections */}
      <Grid gutter="lg" mt="md">
        <Grid.Col span={12}>
          {/* Submit New Application */}
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: theme.spacing.md,
              borderRadius: theme.radius.md,
              "&:hover": {
                backgroundColor: theme.colors.gray[2],
              },
              cursor: "pointer",
            })}
            onClick={() => console.log("Navigating to Submit New Application")}
          >
            <Text size="lg" weight={500}>
              Submit New Application
            </Text>
            <Divider mt="xs" />
            <Text size="sm" color="dimmed">
              Start a new patent application form.
            </Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* View Applications */}
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: theme.spacing.md,
              borderRadius: theme.radius.md,
              "&:hover": {
                backgroundColor: theme.colors.gray[2],
              },
              cursor: "pointer",
            })}
            onClick={() => console.log("Navigating to View Applications")}
          >
            <Text size="lg" weight={500}>
              View Applications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" color="dimmed">
              Check the status of your patent applications.
            </Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* Saved Drafts */}
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: theme.spacing.md,
              borderRadius: theme.radius.md,
              "&:hover": {
                backgroundColor: theme.colors.gray[2],
              },
              cursor: "pointer",
            })}
            onClick={() => console.log("Navigating to Saved Drafts")}
          >
            <Text size="lg" weight={500}>
              Saved Drafts
            </Text>
            <Divider mt="xs" />
            <Text size="sm" color="dimmed">
              Resume drafting your saved applications.
            </Text>
          </Box>
        </Grid.Col>

        <Grid.Col span={12}>
          {/* Notifications */}
          <Box
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[1],
              padding: theme.spacing.md,
              borderRadius: theme.radius.md,
              "&:hover": {
                backgroundColor: theme.colors.gray[2],
              },
              cursor: "pointer",
            })}
            onClick={() => console.log("Navigating to Notifications")}
          >
            <Text size="lg" weight={500}>
              Notifications
            </Text>
            <Divider mt="xs" />
            <Text size="sm" color="dimmed">
              View your patent-related notifications.
            </Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

export default ApplicantDashboard;