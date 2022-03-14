import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import OpacityIcon from '@mui/icons-material/Opacity';
import Bolt from '@mui/icons-material/Bolt';

import { faker } from '@faker-js/faker';
// fake data
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../../components/Scrollbar';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const NEWS = [
  {
    title: 'Water',
    description: 'Anglian Water',
    postedAt: faker.date.soon(),
    icon: 'OpacityIcon'
  },
  {
    title: 'Rent',
    description: '45 East Park Parade',
    postedAt: faker.date.soon(),
    icon: 'MapsHomeWorkIcon'
  },
  {
    title: 'Energy',
    description: 'Scottish power',
    postedAt: faker.date.soon(),
    icon: 'Bolt'
  }
];
//  title: faker.name.title(),
//     description: faker.lorem.paragraphs(),
//     image: mockImgCover(setIndex),
//     postedAt: faker.date.soon()
// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description, postedAt, icon } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box alt={title} sx={{ width: 48, height: 48, borderRadius: 1.5 }}>
        {icon === 'Bolt' && <Bolt />}
        {icon === 'MapsHomeWorkIcon' && <MapsHomeWorkIcon />}
        {icon === 'OpacityIcon' && <OpacityIcon />}
      </Box>
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {formatDistance(postedAt, new Date())}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Property Bills" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
