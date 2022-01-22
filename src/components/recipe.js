import styled from "styled-components"
export const RecipeListContainer= styled.div`
display:flex;
flex-direction:row;
padding:30px;
justify-content:space-evenly;
gap:20px;
padding:30px;
flex-wrap:wrap;

`;
export const RecipeContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
box-shadow:0 3px 10px 0 #aaa;
width:300px;


`;
export const CoverImage=styled.img`

height:200px;
`;
export const RecipeName=styled.span`

font-size:18px;
font-weight:bold;
color:black;
margin:10px 0;
`;
export const IngredientsText=styled.span`

font-size:18px;



border:solid 1px green;

cursor:pointer;
padding:10px 15px;
border-radius:4px;
color:green;
text-align:center;
margin-bottom:12px;
`;
export const SeeMoreText=styled(IngredientsText)`

color:#eb3300;
border:solid 1px #eb3300;
`;