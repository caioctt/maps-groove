import { Card, CardActionArea, CardContent, CardMedia, styled, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, LinkProps } from 'react-router-dom';

type CustomCardProps = {
  title: string;
  img?: string;
  description?: string;
  descriptionFooter?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  toPath?: LinkProps['to'];
};

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.dark,
  padding: '0rem',
  textAlign: 'center',
  maxWidth: 300,
}));

const StyledCardMedia = styled(CardMedia)({
  height: 150,
});

export default function CustomCard({
  title,
  img,
  description,
  descriptionFooter,
  disabled,
  onClick,
  toPath,
}: CustomCardProps) {
  const theme = useTheme();
  return (
    <StyledCard>
      <CardActionArea
        {...(toPath === undefined
          ? { ...{ disabled, onClick } }
          : { ...{ disabled, component: Link, to: toPath } })}
      >
        <StyledCardMedia image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {theme.palette.mode}
          </Typography>
          <Typography variant="subtitle1" color="background.paper" component="p">
            {description}
          </Typography>
          <br />
          <Typography variant="body2" color="primary.secondary" component="span">
            {descriptionFooter}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
