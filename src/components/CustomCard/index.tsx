import { Card, CardActionArea, CardContent, CardMedia, styled, Typography } from '@mui/material';
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

const StyledCard = styled(Card)({
  backgroundColor: 'aliceblue',
  color: 'darkslategray',
  padding: '0rem',
  textAlign: 'center',
  maxWidth: 300,
});

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
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="p">
            {description}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary" component="span">
            {descriptionFooter}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
