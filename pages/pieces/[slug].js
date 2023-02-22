import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function ShowPage({ pieces }) {
  const router = useRouter();
  const foundPiece = pieces.find((piece) => piece.slug === router.query.slug);
  const { artist, colors, genre, dimensions, imageSource, name, year } =
    foundPiece;
  console.log(colors);

  return (
    <Container>
      <ImageContainer>
        <Image
          src={imageSource}
          alt="image of the day"
          width={600}
          height={600}
        />
      </ImageContainer>
      <ColorsContainer>
        {colors.map((color) => {
          return (
            <ColorDiv key={color} style={{ backgroundColor: color }}>
              {color}
            </ColorDiv>
          );
        })}
      </ColorsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorDiv = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  color: #000;
  padding: 10px;
  margin: 0 5px;
`;
