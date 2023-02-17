import { Container, styled } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from '../../components/CustomCard';
import EscapeFromTarkov from '../../assets/eft-card.jpg';

export default function Home() {
  const GamesCards = React.useMemo(
    () => [
      {
        key: 0,
        title: 'Escape From Tarkov',
        img: EscapeFromTarkov,
        description: 'Some 3D maps from EFT',
        descriptionFooter: 'Credits by 3d maps models: RE3MR',
        disabled: false,
      },
    ],
    [],
  );
  const StyledContainer = styled(Container)({
    paddingTop: 0,
  });

  return (
    <StyledContainer>
      <Grid flex={1} container spacing={3} paddingTop={4}>
        {GamesCards.map((game) => (
          <Grid item key={game.key} lg={3} md={4} sm={6} xs={12}>
            <CustomCard
              title={game.title}
              description={game.description}
              // descriptionFooter={game.descriptionFooter}
              img={game.img}
              disabled={game.disabled}
              // onClick={() => console.log('clicado')}
              toPath="/GameMap"
            />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}
