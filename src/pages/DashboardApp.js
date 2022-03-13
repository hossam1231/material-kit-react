// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
            {/* thermostat */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
            {/* cameras */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
            {/* lights */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
            {/* phone */}
          </Grid>

          {/* 
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
            {/* key card */}
          {/* </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppWebsiteVisits /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
            {/* Thermostat */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppConversionRates /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentSubject /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
            {/* property bills */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
            {/* repairs */}
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
            {/* businesses appliances */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppTasks /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
