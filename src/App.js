import { useEffect, useRef, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import {
  AppIcon,
  AppNameComponent,
  Header,
  SearchComponent,
  SearchIcon,
  SearchInput,
} from "./components/Header";
import {
  CoverImage,
  IngredientsText,
  RecipeContainer,
  RecipeListContainer,
  RecipeName,
  SeeMoreText,
} from "./components/recipe";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { getData } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
const APP_ID = "3b950f4e";
const APP_KEY = "685f162b2a511fff503e267d3ac9d122";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Placeholder = styled.img`
  width: 200px;
  height: 200px;
  margin: 100px;
  opacity: 50%;
`;
const RecipeComponent = ({ recipeObj,key }) => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <Dialog open={show}>
        <DialogTitle id="alert-dialog-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <th>Ingredients</th>
              <th>Weight</th>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientsObj) => (
                <tr>
                  <td>{ingredientsObj.text}</td>
                  <td>{ingredientsObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick={() => window.open(recipeObj.url)}>
            See More
          </IngredientsText>
          <SeeMoreText onClick={() => setShow(false)}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>
          Ingredients
        </IngredientsText>
        <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
        </SeeMoreText>
      </RecipeContainer>
    </>
  );
};

function App() {
  const dispatch = useDispatch();
  const  data  = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const [searchValue, setSearchValue] = useState("");
  // const searchValue=useRef();
  // useEffect(() => {
  //   dispatch(getData(searchValue));
  // }, [searchValue]);
  // const [timeoutid,updateTimeoutId]=useState();
  const searchRecipe = () => {
    dispatch(getData(searchValue))
}

  // const [recipeList,updateRecipeList]=useState([]);
  // const fetchRecipe=async (searchString)=>{
  //  const response= await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );

  //  updateRecipeList(response.data.hits)
  // };

  const onTextChange = (event) => {
    // clearTimeout(timeoutid);
    // const timeOut = setTimeout(() =>
    //   dispatch(getData(event.target.value), 500)
    // );
    // updateTimeoutId(timeOut);
    setSearchValue(event.target.value);
  };
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <AppIcon src="pizz.svg" />
          Recipe Finder
        </AppNameComponent>
       
        <SearchComponent>
         
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
          <SearchIcon src="/search1.svg" alt="recipe" onClick={searchRecipe} />
        </SearchComponent>

            
      
      </Header>
      <RecipeListContainer>
        {loading? (
          <Placeholder src="pizz.svg" />
         )
        : (data.length>0 &&
          data.map((recipeObj) => (
            <RecipeComponent recipeObj={recipeObj.recipe} key={Math.random()} />
          )
        ))}
      </RecipeListContainer>
    </Container>
  );
}

export default App;
