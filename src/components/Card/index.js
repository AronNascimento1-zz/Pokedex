import { CardContainer } from "./styles";

export const Card = ({ name, sprites,id,index }) => {
  return (
    <>
      <CardContainer index={index}id={id} >
        <div>
        <img
        width="200px"
        src={sprites?.other?.["official-artwork"]?.front_default}
        alt={name}
      />
      <div>
        <p>{name}</p>
      </div>
        </div>
     
    </CardContainer>
  
     
    </>
  );
};
