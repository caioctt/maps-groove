import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CustomCard from '../../../components/CustomCard';
import PageTitleSection from '../../../components/PageTitleSection';
import { ITarkovMapsModel, ITarkovMapModel } from '../../../models/tarkov-maps.model';
import { loadMaps } from '../../../services/tarkov/load-maps';

export default function TarkovMaps() {
  const [maps, setMaps] = useState<ITarkovMapModel[]>();
  useEffect(() => {
    loadMaps.tarkov().then((response: ITarkovMapsModel) => {
      setMaps(response.maps);
    });
  }, []);

  return (
    <Container>
      <PageTitleSection
        title="Maps of Escape from Tarkov"
        subtitle="Credits of all 3dMaps: RE3MR"
      />
      <Grid flex={1} container spacing={3} paddingTop={4}>
        {!!maps &&
          maps.map((currentMap) => (
            <Grid item key={currentMap.id} lg={3} md={4} sm={6} xs={12}>
              <CustomCard
                title={currentMap.name}
                toPath={`/maps/tarkov/${currentMap.normalizedName}`}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
