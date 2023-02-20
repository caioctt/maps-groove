import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageTitleSection from '../../components/PageTitleSection';
import Flex from '../../components/Flex';
import { loadMaps } from '../../services/tarkov/load-maps';

export default function GameMaps() {
  const params: any = useParams();
  const gameName: string = params?.name ?? 'not-found';

  const loadFunction = loadMaps[gameName as keyof typeof loadMaps]();

  useEffect(() => {
    loadFunction.then((r: any) => {
      console.log(r);
    });
  }, [loadFunction]);

  return (
    <Flex direction="column" grow>
      <PageTitleSection title="Game Map" subtitle="testando as coisas aqui" />
    </Flex>
  );
}
