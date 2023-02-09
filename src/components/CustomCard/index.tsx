import { Card, CardActionArea, CardContent, CardMedia, styled, Typography } from '@mui/material';

type CustomCardProps = {
  title: string;
  img?: string;
  description?: string;
  descriptionFooter?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
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

function CustomCard({
  title,
  img,
  description,
  descriptionFooter,
  disabled,
  onClick,
}: CustomCardProps) {
  return (
    <StyledCard>
      <CardActionArea disabled={disabled} onClick={onClick}>
        <StyledCardMedia image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="p">
            {description}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary" component="p">
            {descriptionFooter}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
export default CustomCard;
