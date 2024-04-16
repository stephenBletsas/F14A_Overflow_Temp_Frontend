import React from 'react';
import { useParams } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography
} from '@mui/material';

// project import
import IncomeAreaChart from '../dashboard/IncomeAreaChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import dataList from 'assets/text/companyNameTickers'
import Articles from './Articles';
import fetchCompanyArticles from 'utils/retrieveArticles';

const calculateScoreCard = (title, count, percentage) => {
    const isLoss = percentage < 0;
    const color = percentage < 0 ? 'warning' : 'primary'

    return <AnalyticEcommerce title={title} count={count} percentage={Math.abs(percentage)} isLoss={isLoss} color={color} />;
};

const getTickerFromName = (name) => {
    const item = dataList.find(item => item.name === name);
    return item ? item.ticker : undefined;
};

const Company = () => {
  const { query } = useParams();
  const [slot, setSlot] = React.useState('week');
  const [articles, setArticles] = React.useState([]);

  const ticker = getTickerFromName(query);

  React.useEffect(() => {
    if (ticker) {
      fetchCompanyArticles(ticker)
        .then(data => {
          setArticles(data.articles); // Assuming the data structure has an articles array
        })
        .catch(error => {
          console.error('Error fetching company articles:', error);
        });
    }

    console.log(articles);
  }, [ticker]); // This effect will run when query or ticker changes

  
  return (
    // <div>
    //   <h1>Company</h1>
    //   <p>Results for: {query}</p>
    //   {/* Implement your search logic here */}
    // </div>
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h1">{query.toUpperCase()}</Typography>
        <Typography variant="h5">NASDAQ: {ticker}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {calculateScoreCard('Sentiment', '8.9', 20.4)}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {calculateScoreCard('Environmental Risk', '0.5', 70.5)}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {calculateScoreCard('Social Risk', '7.4', -27.4)}
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        {calculateScoreCard('Governance risk', '9.4', -10.4)}
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Latest Articles</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          {articles && <Articles articles={articles}/>}
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sentiment Trend</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        <Grid item xs={12} md={5} lg={4}>
            <Grid item>
                <Typography variant="h5">Peer Sentiment Scores</Typography>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    {calculateScoreCard('Sony', '8.9', 20.4)}
                </Grid>
                <Grid item>
                    {calculateScoreCard('Samsung', '7.5', 70.5)}
                </Grid>
                <Grid item>
                    {calculateScoreCard('Alphabet', '7.4', -27.4)}
                </Grid>
                <Grid item>
                    {calculateScoreCard('Meta', '9.4', -10.4)}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Company;
