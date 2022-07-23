import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import {useState} from "react";

export default function SearchField({ fetchCitiesList }) {
//   console.log("SearchField activated")
  const [textToSearch, setTextToSearch] = useState("");

  function onChangeHandler(e) {
    if (e?.target.value) {
      setTextToSearch(e.target.value);
    } else {
      setTextToSearch(textToSearch);
    }
  }

  function onClickHandler(e) {
      fetchCitiesList(textToSearch);
  }

    
  return (
    <Grid container spacing={4} className="search-field-wrapper">
      <Grid item xs={1}>
        <Button onClick={(e) => onClickHandler(e)} size="large">
          SEARCH
        </Button>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
          //   onChange={(e) => onClickHandler(e, setTextToSearch)}
          onChange={(e)=>onChangeHandler(e)}
        />
      </Grid>
    </Grid>
  );
}
